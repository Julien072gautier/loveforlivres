'use client';

import React, { useState } from 'react';
import { useSendEmail } from '../hooks/useSendEmail';
import { X } from 'lucide-react';
import Captcha from './Captcha';

interface ContactFormProps {
  formationName: string;
  onClose?: () => void;
  isOpen?: boolean;
  actionType?: 'information' | 'parcours';
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  formationName, 
  onClose, 
  isOpen = true, 
  actionType = 'information',
  onSuccess,
  onError
}) => {
  const [formData, setFormData] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [captchaValid, setCaptchaValid] = useState(false);
  
  const { sendEmail, loading, error, success } = useSendEmail();

  // Fonction de validation simple
  const validateForm = (data: any) => {
    const errors: Record<string, string> = {};
    
    if (!data.firstName?.trim()) {
      errors.firstName = 'Le prénom est requis';
    }
    
    if (!data.lastName?.trim()) {
      errors.lastName = 'Le nom est requis';
    }
    
    if (!data.email?.trim()) {
      errors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'L\'email n\'est pas valide';
    }
    
    if (!data.phone?.trim()) {
      errors.phone = 'Le téléphone est requis';
    } else if (!/^[0-9\s\-\+\(\)]{10,}$/.test(data.phone.replace(/\s/g, ''))) {
      errors.phone = 'Le téléphone n\'est pas valide';
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Marquer le champ comme touché
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validation en temps réel
    if (touched[name]) {
      const errors = validateForm({
        firstName: name === 'firstName' ? value : formData.firstName,
        lastName: name === 'lastName' ? value : formData.lastName,
        email: name === 'email' ? value : formData.email,
        phone: name === 'phone' ? value : formData.phone,
      });
      
      setValidationErrors(prev => ({
        ...prev,
        [name]: errors[name] || ''
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const errors = validateForm({
      firstName: name === 'firstName' ? value : formData.firstName,
      lastName: name === 'lastName' ? value : formData.lastName,
      email: name === 'email' ? value : formData.email,
      phone: name === 'phone' ? value : formData.phone,
    });
    
    setValidationErrors(prev => ({
      ...prev,
      [name]: errors[name] || ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier la validation CAPTCHA
    if (!captchaValid) {
      alert('Veuillez compléter la vérification de sécurité avant d\'envoyer votre demande.');
      return;
    }
    
    // Validation complète avant envoi
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
      });
      return;
    }
    
    const emailContent = `
      GENRE: ${formData.gender === 'M' ? 'Monsieur' : 'Madame'}
      PRENOM: ${formData.firstName}
      NOM: ${formData.lastName}
      EMAIL: ${formData.email}
      TELEPHONE: ${formData.phone}
      FORMATION: ${formationName}
      TYPE_DEMANDE: ${actionType === 'information' ? 'Demande d\'information' : 'Demande de parcours'}
      DATE_ENVOI: ${new Date().toLocaleDateString('fr-FR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
    `;

    await sendEmail({
      to: 'contact@loveforlivres.com', // À adapter selon votre configuration
      subject: `Demande d'information - ${formationName} - Love for Livres`,
      text: emailContent
    });

    if (success) {
      setFormData({
        gender: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      });
      setValidationErrors({});
      setTouched({});
      setCaptchaValid(false);
      onSuccess?.();
    } else {
      onError?.(error || 'Erreur lors de l\'envoi');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Demande d'information
            </h2>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            )}
          </div>
          
          <p className="text-gray-600 mb-6">
            Formation : <strong>{formationName}</strong>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Genre */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Genre *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`
                  flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all
                  ${formData.gender === 'M' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 hover:border-blue-300'}
                `}>
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    checked={formData.gender === 'M'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="hidden"
                    required
                  />
                  <span>Monsieur</span>
                </label>
                <label className={`
                  flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all
                  ${formData.gender === 'F' 
                    ? 'border-blue-500 bg-blue-50 text-blue-700' 
                    : 'border-gray-200 hover:border-blue-300'}
                `}>
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    checked={formData.gender === 'F'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="hidden"
                    required
                  />
                  <span>Madame</span>
                </label>
              </div>
            </div>

            {/* Prénom et Nom */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    touched.firstName && validationErrors.firstName 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  required
                />
                {touched.firstName && validationErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.firstName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    touched.lastName && validationErrors.lastName 
                      ? 'border-red-500' 
                      : 'border-gray-300'
                  }`}
                  required
                />
                {touched.lastName && validationErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.lastName}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  touched.email && validationErrors.email 
                    ? 'border-red-500' 
                    : 'border-gray-300'
                }`}
                required
              />
              {touched.email && validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  touched.phone && validationErrors.phone 
                    ? 'border-red-500' 
                    : 'border-gray-300'
                }`}
                placeholder="06 12 34 56 78"
                required
              />
              {touched.phone && validationErrors.phone && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
              )}
            </div>

            {/* CAPTCHA */}
            <Captcha onValidation={setCaptchaValid} />

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-3 bg-green-50 text-green-700 rounded-md text-sm">
                Votre demande a été envoyée avec succès !
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-3 px-4 rounded-md font-medium transition-all
                ${loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'}
              `}
            >
              {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
