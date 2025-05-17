import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, Award, Users, CheckCircle, ArrowRight, Calendar, Phone, X, Tag, MessageSquare, Target, Brain, Star, Globe, BookOpen, Laptop } from 'lucide-react';
import { useSendEmail } from '../hooks/useSendEmail';
import formationsConfig from '../config/formations';
import themeConfig from '../config/theme';
import { Link } from 'react-router-dom';

// Mapping des icônes pour les formations
const iconMap: Record<string, React.ReactNode> = {
  'Clock': <Clock className="mr-2" />,
  'Award': <Award className="mr-2" />,
  'Users': <Users className="mr-2" />,
  'CheckCircle': <CheckCircle className="mr-2" />,
  'ArrowRight': <ArrowRight className="mr-2" />,
  'Calendar': <Calendar className="mr-2" />,
  'Tag': <Tag className="mr-2" />,
  'Brain': <Brain className="mr-2" />,
  'Target': <Target className="mr-2" />,
  'Globe': <Globe className="mr-2" />,
  'BookOpen': <BookOpen className="mr-2" />,
  'MessageSquare': <MessageSquare className="mr-2" />,
  'Laptop': <Laptop className="mr-2" />,
  'Star': <Star className="mr-2" />
};

const FormationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedModality, setSelectedModality] = useState<'individuel' | 'collectif'>('individuel');
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [callbackData, setCallbackData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const { sendEmail, loading, error, success } = useSendEmail();

  // Trouver la formation correspondante
  const formation = formationsConfig.formations.find(f => f.slug === slug);
  const category = formation ? formationsConfig.categories.find(cat => cat.id === formation.category) : null;

  // Rediriger si la formation n'existe pas
  useEffect(() => {
    if (!formation && slug) {
      navigate('/');
    }
  }, [formation, slug, navigate]);

  // Si la formation n'est pas trouvée, ne rien afficher pendant la redirection
  if (!formation) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCallbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = `Demande d'information - ${formation.title}
    Nom: ${callbackData.name} 
    Téléphone: ${callbackData.phone}
    Email: ${callbackData.email}`;
    
    await sendEmail({
      to: themeConfig.company.contact.email,
      subject: `Demande d'information - ${formation.title}`,
      text: data
    });

    if (success) {
      setCallbackData({
        name: '',
        phone: '',
        email: '',
      });
    }
  };

  // Déterminer quels blocs afficher en fonction des données disponibles
  const hasReasons = formation?.reasons && formation.reasons.length > 0;
  const hasPublicVise = formation?.publicVise && formation.publicVise.length > 0;
  const hasPrerequisites = formation?.prerequis && formation.prerequis.length > 0;
  const hasTeachingMethods = formation?.teachingMethods && formation.teachingMethods.length > 0;
  const hasEvaluationMethods = formation?.evaluationMethods && formation.evaluationMethods.length > 0;
  const hasAccessibility = formation?.accessibility && formation.accessibility.length > 0;
  const hasCertificationDetails = formation?.certificationDetails;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-600 to-brand text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-2 rounded-md inline-block mb-4">
              <span className="text-white font-medium">
                {category ? category.description : 'Formation'} 
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{formation.title}</h1>
            <p className="text-xl mb-8">{formation.fullDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsCallbackOpen(true)}
                className="bg-[#FFD400] text-black hover:bg-[#E0BB00] font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Demander plus d'informations
              </button>
              <a 
                href={`tel:${themeConfig.company.contact.phone?.replace(/\s/g, '')}`}
                className="bg-[#FFD400] text-black border-0 hover:bg-[#E0BB00] font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                {themeConfig.company.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Formation Details */}
          <section className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={formation.image}
                  alt={formation.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold mb-6">Détails de la formation</h2>
                <div className="space-y-4">
                  {formation.certifications && formation.certifications.length > 0 && (
                    <div className="flex items-center">
                      <Award className="text-brand mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Certification</p>
                        <p className="text-gray-600">
                          {hasCertificationDetails && formation.certificationDetails?.code ? 
                            `${formation.certificationDetails.code} - ${formation.certificationDetails.organization}` : 
                            formation.certifications.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Clock className="text-brand mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-medium">Durée</p>
                      <p className="text-gray-600">{formation.duration}</p>
                    </div>
                  </div>
                  {formation.modalites && (
                    <div className="flex items-center">
                      <Calendar className="text-brand mr-3 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Modalités</p>
                        <p className="text-gray-600">{formation.modalites}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex gap-4 mb-4">
                    <button 
                      onClick={() => setSelectedModality('individuel')} 
                      className={`px-4 py-2 border rounded-md ${selectedModality === 'individuel' ? 'bg-[#FFD400] text-black' : 'bg-gray-100'}`}
                    >
                      Individuel
                    </button>
                    <button 
                      onClick={() => setSelectedModality('collectif')} 
                      className={`px-4 py-2 border rounded-md ${selectedModality === 'collectif' ? 'bg-[#FFD400] text-black' : 'bg-gray-100'}`}
                    >
                      Collectif
                    </button>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center mb-2">
                      <Tag size={16} className="mr-2 text-brand-600" />
                      <span className="text-2xl font-bold text-gray-800">{formation.prices[selectedModality].price}</span>
                      {formation.prices[selectedModality].label && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ml-3">
                          {formation.prices[selectedModality].label}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                      *Les tarifs indiqués couvrent une formation mixte alliant 20% d'e-learning et 80% de Form'action. <br /><br />
                      Cette formation professionnelle de par son caractère certifiant peut être prise en charge par le CPF. 
                      Toute action ne rentrant pas dans le cadre de l'article L6313-1 du code du travail ne rentre pas dans ce dispositif de prise en charge
                    </p>
                    <div className="mt-4">
                      <Link 
                        to="/demande-formation"
                        className="inline-flex items-center justify-center px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors"
                      >
                        <Target size={18} className="mr-2" />
                        Créer la form'action qui vous ressemble
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contexte / Pourquoi suivre cette formation */}
          {hasReasons && formation.reasons && (
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {formation.id === 'community-management' ? 'Pourquoi le Community Management ?' : 'Pourquoi suivre cette formation ?'}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {formation.reasons.map((reason, index) => (
                    <div key={index} className="flex items-start mb-4">
                      <div className="bg-brand p-3 rounded-full mr-4 flex items-center justify-center" style={{ width: '48px', height: '48px' }}>
                        {reason.icon === 'Users' ? <Users className="text-white" size={24} /> :
                         reason.icon === 'Target' ? <Target className="text-white" size={24} /> :
                         reason.icon === 'MessageSquare' ? <MessageSquare className="text-white" size={24} /> :
                         reason.icon === 'Star' ? <Star className="text-white" size={24} /> :
                         <CheckCircle className="text-white" size={24} />}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{reason.title}</h3>
                        <p className="text-gray-600">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Objectifs */}
          {formation.objectives && formation.objectives.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">🎯 Objectifs pédagogiques</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <ul className="space-y-3">
                  {formation.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Programme */}
          {formation.program && formation.program.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Programme détaillé</h2>
              <div className="space-y-6">
                {formation.program.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <ArrowRight className="text-brand mr-3 mt-1 flex-shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Public & Prérequis */}
          {(hasPublicVise || hasPrerequisites) && (
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {hasPublicVise && formation.publicVise && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Public visé</h2>
                    <ul className="space-y-2">
                      {formation.publicVise.map((public_item, index) => (
                        <li key={index} className="flex items-start">
                          <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{public_item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hasPrerequisites && formation.prerequis && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Prérequis</h2>
                    <ul className="space-y-2">
                      {formation.prerequis.map((prerequis, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{prerequis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Méthodes & Évaluation */}
          {(hasTeachingMethods || hasEvaluationMethods) && (
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {hasTeachingMethods && formation.teachingMethods && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Méthodes pédagogiques</h2>
                    <ul className="space-y-2">
                      {formation.teachingMethods.map((method, index) => (
                        <li key={index} className="flex items-start">
                          <Target className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {hasEvaluationMethods && formation.evaluationMethods && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Modalités d'évaluation</h2>
                    <ul className="space-y-2">
                      {formation.evaluationMethods.map((method, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Certification */}
          {hasCertificationDetails && formation.certificationDetails && (
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Certification</h2>
                <div className="flex items-center mb-6">
                  <Award className="text-brand mr-4" size={48} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {formation.certificationDetails.name || formation.title}
                    </h3>
                    <p className="text-gray-600">{formation.certificationDetails.description}</p>
                  </div>
                </div>
                {formation.certificationDetails.examDetails && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-2">Épreuves finales</h4>
                      <ul className="space-y-2">
                        {formation.certificationDetails.examDetails.format.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {formation.certificationDetails.examDetails.successRate && (
                      <div>
                        <h4 className="font-semibold mb-2">Statistiques</h4>
                        <div className="bg-brand p-4 rounded-lg">
                          <p className="text-white font-medium mb-2">
                            Taux de réussite : {formation.certificationDetails.examDetails.successRate}
                          </p>
                          <p className="text-white">Données basées sur les certifications de l'année en cours</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Accessibilité */}
          {hasAccessibility && formation.accessibility && (
            <section className="mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Accessibilité et inclusion</h2>
                <ul className="space-y-4">
                  {formation.accessibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      {index % 3 === 0 ? <Calendar className="text-brand mr-3 mt-1 flex-shrink-0" size={20} /> :
                       index % 3 === 1 ? <Users className="text-brand mr-3 mt-1 flex-shrink-0" size={20} /> :
                       <MessageSquare className="text-brand mr-3 mt-1 flex-shrink-0" size={20} />}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="text-center bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">📩 Intéressé(e) ? Inscrivez-vous dès maintenant !</h2>
            <p className="text-gray-600 mb-8">
              Contactez-nous pour obtenir plus d'informations ou démarrer votre inscription.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsCallbackOpen(true)}
                className="btn-primary btn-lg btn-with-icon"
              >
                Je lance mon parcours
              </button>
              <a
                href={`tel:${themeConfig.company.contact.phone?.replace(/\s/g, '')}`}
                className="bg-[#FFD400] text-black font-medium py-3 px-6 rounded-md hover:bg-[#E0BB00] transition-colors inline-flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                {themeConfig.company.contact.phone}
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Callback Popup */}
      {isCallbackOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setIsCallbackOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            
            <div className="p-6">
              {!success ? (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Demande d'information</h3>
                  <p className="text-gray-600 mb-4">
                    Intéressé(e) par notre formation en {formation.title} ? Laissez-nous vos coordonnées et un conseiller vous contactera sous 24h.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={callbackData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={callbackData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={callbackData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                        required
                      />
                    </div>

                    {error && (
                      <div className="mb-4 p-3 bg-red-50 text-red-800 rounded-md">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#FFD400] text-black py-2 px-4 rounded-md hover:bg-[#E0BB00] transition-colors flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        "Demander plus d'informations"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-800 p-4 rounded-md mb-4">
                    <p className="font-medium">Demande envoyée avec succès !</p>
                    <p>Un conseiller vous contactera dans les 24h.</p>
                  </div>
                  <p className="text-gray-600">Merci pour votre intérêt pour notre formation.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Helmet>
        <title>{formation.title} | {themeConfig.company.fullName}</title>
        <meta name="description" content={formation.fullDescription} />
      </Helmet>
    </div>
  );
};

export default FormationPage;
