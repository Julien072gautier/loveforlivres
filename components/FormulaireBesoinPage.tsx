'use client';

import React, { useState } from 'react';
import { useSendEmail } from '../hooks/useSendEmail';
import { useGTM, usePageView } from '../hooks/useGTM';
import { CheckCircle, Users, BookOpen, MessageSquare, School } from 'lucide-react';
import themeConfig from '../lib/config/theme';
import Captcha from './Captcha';
import formationsConfig from '../lib/config/formations';

const FormulaireBesoinPage = () => {
  const [formData, setFormData] = useState({
    trainingType: 'individuelle',
    formation: '',
    autreFormation: '',
    modality: '',
    modalityDetail: '',
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [captchaValid, setCaptchaValid] = useState(false);

  const { sendEmail, loading, error, success } = useSendEmail();
  const { trackFormStart, trackFormSubmit, trackFormSuccess, trackFormError } = useGTM();

  // Track page view
  usePageView('Demande de formation personnalisée');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    
    // Track form start on first interaction
    if (name === 'firstName' && value.length === 1) {
      trackFormStart('custom_training_request');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
    const errors = validateForm({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    });
    
    // Validation spéciale pour "autre formation"
    if (formData.formation === 'autre' && !formData.autreFormation.trim()) {
      setValidationErrors({ ...errors, autreFormation: 'Veuillez préciser la formation recherchée' });
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        autreFormation: true,
      });
      return;
    }

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
    
    // Track form submission
    trackFormSubmit('custom_training_request');
    
    const emailContent = `
      GENRE: ${formData.gender === 'M' ? 'Monsieur' : 'Madame'}
      PRENOM: ${formData.firstName}
      NOM: ${formData.lastName}
      EMAIL: ${formData.email}
      TELEPHONE: ${formData.phone}
      FORMATION: ${formData.formation === 'autre' ? 'Autre formation (à préciser)' : formationsConfig.formations.find(f => f.slug === formData.formation)?.title || formData.formation}
      ${formData.formation === 'autre' ? `FORMATION_PERSONNALISEE: ${formData.autreFormation}` : ''}
      TYPE_FORMATION: ${formData.trainingType}
      MODALITE: ${formData.modality}
      ${formData.modality === 'mixte' ? `DETAIL_MODALITE: ${formData.modalityDetail}` : ''}
      DATE_ENVOI: ${new Date().toLocaleDateString('fr-FR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
    `;

    await sendEmail({
      to: themeConfig.company.contact.email,
      subject: "Demande de formation personnalisée - Love for Livres",
      text: emailContent
    });

    if (success) {
      // Track form success
      trackFormSuccess('custom_training_request');
      
      setFormData({
        trainingType: 'individuelle',
        formation: '',
        autreFormation: '',
        modality: '',
        modalityDetail: '',
        gender: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      });
      setValidationErrors({});
      setTouched({});
      setCaptchaValid(false);
    } else {
      // Track form error
      trackFormError('custom_training_request', error || 'Unknown error');
    }
  };

  // Liste des formations disponibles
  const formations = formationsConfig.formations ? formationsConfig.formations.map(f => ({
    value: f.slug,
    label: f.title
  })) : [
    { value: 'communication-empathie', label: 'Améliorer sa communication et son empathie' },
    { value: 'leadership-confiance', label: 'Cultiver son leadership et sa confiance en soi' },
    { value: 'autre', label: 'Autre formation (à préciser)' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Composez votre formation sur mesure</h1>
            <p className="text-xl text-gray-600">
              Créez votre parcours sur-mesure en quelques clics
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Formation Selection */}
              <div>
                <label htmlFor="formation" className="block text-gray-700 font-medium mb-2">
                  Formation souhaitée *
                </label>
                <select
                  id="formation"
                  name="formation"
                  value={formData.formation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez une formation</option>
                  {formations.map((formation) => (
                    <option key={formation.value} value={formation.value}>
                      {formation.label}
                    </option>
                  ))}
                </select>
                {touched.formation && !formData.formation && (
                  <p className="text-red-500 text-sm mt-1">Veuillez sélectionner une formation</p>
                )}
              </div>

              {/* Champ "Autre formation" conditionnel */}
              {formData.formation === 'autre' && (
                <div>
                  <label htmlFor="autreFormation" className="block text-gray-700 font-medium mb-2">
                    Précisez la formation recherchée *
                  </label>
                  <textarea
                    id="autreFormation"
                    name="autreFormation"
                    value={formData.autreFormation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Décrivez la formation que vous recherchez..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    required
                  />
                  {touched.autreFormation && !formData.autreFormation && (
                    <p className="text-red-500 text-sm mt-1">Veuillez préciser la formation recherchée</p>
                  )}
                </div>
              )}

              {/* Training Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Type de formation
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.trainingType === 'individuelle' 
                      ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                      : 'border-gray-200 hover:border-[#FFD400]'}
                  `}>
                    <input
                      type="radio"
                      name="trainingType"
                      value="individuelle"
                      checked={formData.trainingType === 'individuelle'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <Users className="mr-2" size={20} />
                    <span>Individuelle</span>
                  </label>
                  <label className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.trainingType === 'collective' 
                      ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                      : 'border-gray-200 hover:border-[#FFD400]'}
                  `}>
                    <input
                      type="radio"
                      name="trainingType"
                      value="collective"
                      checked={formData.trainingType === 'collective'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <Users className="mr-2" size={20} />
                    <span>Collective</span>
                  </label>
                </div>
              </div>

              {/* Training Modality */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Modalité de formation
                </label>
                <div className="grid gap-4">
                  <label className={`
                    flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.modality === 'presentiel' 
                      ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                      : 'border-gray-200 hover:border-[#FFD400]'}
                  `}>
                    <input
                      type="radio"
                      name="modality"
                      value="presentiel"
                      checked={formData.modality === 'presentiel'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <School className="mr-2" size={20} />
                    <span>Avec un formateur expert à côté</span>
                  </label>
                  
                  <label className={`
                    flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.modality === 'visio' 
                      ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                      : 'border-gray-200 hover:border-[#FFD400]'}
                  `}>
                    <input
                      type="radio"
                      name="modality"
                      value="visio"
                      checked={formData.modality === 'visio'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <MessageSquare className="mr-2" size={20} />
                    <span>Avec un formateur expert en visioconférence</span>
                  </label>
                  
                  <label className={`
                    flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                    ${formData.modality === 'mixte' 
                      ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                      : 'border-gray-200 hover:border-[#FFD400]'}
                  `}>
                    <input
                      type="radio"
                      name="modality"
                      value="mixte"
                      checked={formData.modality === 'mixte'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <BookOpen className="mr-2" size={20} />
                    <span>E-learning + pratique tutorée</span>
                  </label>
                </div>
              </div>

              {/* Mixed Training Detail */}
              {formData.modality === 'mixte' && (
                <div className="ml-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Modalité de la pratique tutorée
                  </label>
                  <div className="grid gap-4">
                    <label className={`
                      flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.modalityDetail === 'presentiel' 
                        ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                      : 'border-gray-200 hover:border-[#FFD400]'}
                    `}>
                      <input
                        type="radio"
                        name="modalityDetail"
                        value="presentiel"
                        checked={formData.modalityDetail === 'presentiel'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <School className="mr-2" size={20} />
                      <span>À côté du formateur</span>
                    </label>
                    
                    <label className={`
                      flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.modalityDetail === 'visio' 
                        ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                      : 'border-gray-200 hover:border-[#FFD400]'}
                    `}>
                      <input
                        type="radio"
                        name="modalityDetail"
                        value="visio"
                        checked={formData.modalityDetail === 'visio'}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <MessageSquare className="mr-2" size={20} />
                      <span>En visioconférence</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                {/* Gender */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Genre *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`
                      flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.gender === 'M' 
                        ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                        : 'border-gray-200 hover:border-[#FFD400]'}
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
                      flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${formData.gender === 'F' 
                        ? 'border-[#FFD400] bg-[#FFD400] text-black' 
                        : 'border-gray-200 hover:border-[#FFD400]'}
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

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
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
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent ${
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
              </div>

              {/* CAPTCHA */}
              <div className="pt-6 border-t border-gray-200">
                <Captcha onValidation={setCaptchaValid} />
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md flex items-center">
                  <CheckCircle className="mr-2" size={20} />
                  <span>Votre demande a été envoyée avec succès !</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !formData.modality || (!formData.modalityDetail && formData.modality === 'mixte')}
                className={`
                  w-full py-3 px-4 rounded-md font-medium transition-all
                  ${loading || !formData.modality || (!formData.modalityDetail && formData.modality === 'mixte')
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'border-[#FFD400] bg-[#FFD400] text-black'}
                `}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </div>
                ) : (
                  "Envoyer ma demande"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaireBesoinPage;