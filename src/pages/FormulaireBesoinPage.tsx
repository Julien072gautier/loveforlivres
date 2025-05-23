import React, { useState } from 'react';
import { useSendEmail } from '../hooks/useSendEmail';
import { CheckCircle, Users, BookOpen, MessageSquare, School } from 'lucide-react';
import themeConfig from '../config/theme';

const FormulaireBesoinPage = () => {
  const [formData, setFormData] = useState({
    trainingType: 'individuelle',
    modality: '',
    modalityDetail: '',
    name: '',
    email: '',
  });

  const { sendEmail, loading, error, success } = useSendEmail();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailContent = `
      Type de formation : ${formData.trainingType}
      Modalité : ${formData.modality}
      ${formData.modality === 'mixte' ? `Détail modalité : ${formData.modalityDetail}` : ''}
      Nom : ${formData.name}
      Email : ${formData.email}
    `;

    await sendEmail({
      to: themeConfig.company.contact.email,
      subject: "Demande de formation personnalisée - FORMAPRO by Accertif",
      text: emailContent
    });

    if (success) {
      setFormData({
        trainingType: 'individuelle',
        modality: '',
        modalityDetail: '',
        name: '',
        email: '',
      });
    }
  };

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
                    <span>Form'action mixte (E-learning + pratique tutorée)</span>
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
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                    required
                  />
                </div>
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