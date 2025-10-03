'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Award, Clock, Tag, CreditCard, MessageSquare, Target, Brain, Star, Globe, Hand, Laptop, Users } from 'lucide-react';
import formationsConfig from '../lib/config/formations';
import themeConfig from '../lib/config/theme';
import FormationIcon from './FormationIcon';

// Définition du type pour les formations transformées
interface FormationDisplayData {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  certification: string;
  price: string;
  cpf: boolean;
  description: string;
  image: string;
  icon: string;
  path: string;
}

// Liste de formations par défaut
const fallbackFormations: FormationDisplayData[] = [
  {
    id: 'communication-prise-parole',
    title: "Communiquer avec impact à l'oral en public",
    category: "Communication",
    level: "Débutant",
    duration: "21 heures",
    certification: "Pollen Conseil",
    price: "Sur-mesure",
    cpf: true,
    description: "Structurer votre pensée, maîtriser votre posture et votre voix, gérer les objections et vous adapter aux prises de parole en distanciel pour captiver et convaincre votre auditoire.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    icon: "MessageSquare",
    path: "/formation/communication-prise-parole"
  },
  {
    id: 'community-management',
    title: "Développer son activité avec le Community Management",
    category: "Digital",
    level: "Débutant",
    duration: "21 heures",
    certification: "Webmarketing & Com",
    price: "Sur-mesure",
    cpf: true,
    description: "Maîtrisez les stratégies et outils du Community Management pour développer votre présence en ligne, animer une communauté et accroître l'engagement sur les réseaux.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    icon: "Users",
    path: "/formation/community-management"
  }
];

// Liste de catégories par défaut
const defaultCategories = [
  "Toutes les catégories",
];

const FormationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories');
  const [cpfFilter, setCpfFilter] = useState('all'); // 'all', 'eligible', 'not-eligible'
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Éviter les problèmes d'hydratation en production
  useEffect(() => {
    setIsClient(true);
    
    // Cache-busting pour les données de formation
    if (typeof window !== 'undefined') {
      const timestamp = Date.now();
      // Forcer le rechargement des données si nécessaire
      const cacheKey = `formations-cache-${timestamp}`;
      localStorage.setItem('cache-version', timestamp.toString());
    }
  }, []);

  // Fonction pour formater la durée en heures (1 jour = 7 heures)
  const formatDuration = (duration: string) => {
    // Si la durée contient "jour" ou "jours", convertir en heures
    if (duration.toLowerCase().includes('jour')) {
      const match = duration.match(/(\d+)/);
      if (match) {
        const days = parseInt(match[1]);
        const hours = days * 7;
        return `${hours}h`;
      }
    }
    // Si la durée contient déjà "h", la retourner telle quelle
    if (duration.toLowerCase().includes('h')) {
      return duration;
    }
    // Par défaut, retourner la durée originale
    return duration;
  };

  // Transforme les données de configuration en données utilisables pour l'affichage
  const formations = useMemo<FormationDisplayData[]>(() => {
    // Vérification de sécurité pour éviter les erreurs en production
    if (!isClient) return [];
    
    // Si nous avons des formations dans le fichier de configuration, utilisez-les
    if (formationsConfig?.formations && formationsConfig.formations.length > 0) {
      return formationsConfig.formations
        .map(formation => ({
          id: formation.id || '',
          title: formation.title || '',
          category: formationsConfig.categories?.find(cat => cat.id === formation.category)?.name || formation.category || '',
          level: "Intermédiaire", // Valeur par défaut
          duration: formation.duration || '',
          certification: formation.certificationDetails && formation.certificationDetails.code ? 
            (formation.certificationDetails.partenaire ? `En partenariat avec ${formation.certificationDetails.partenaire}` : `Certifié par ${formation.certificationDetails.organization}`) : "",
          price: formation.prices?.collectif?.price || '',
          cpf: formation.cpfEligible || false,
          description: formation.shortDescription || '',
          image: formation.image || '',
          icon: formationsConfig.categories?.find(cat => cat.id === formation.category)?.icon || "MessageSquare",
          path: `/${formation.slug || ''}`
        }))
        .sort((a, b) => {
          // Fonction pour extraire la première lettre significative du titre
          const getFirstLetter = (title: string) => {
            // Supprimer les articles français courants au début
            const cleanTitle = title
              .replace(/^(L'|D'|Un |Une |Le |La |Les |Des |Du |De |D'|L'|A |À |Au |Aux )/i, '')
              .replace(/^[^a-zA-ZÀ-ÿ]*/, '') // Supprimer tout ce qui n'est pas une lettre au début
              .trim();
            return cleanTitle.charAt(0).toLowerCase();
          };
          
          const firstLetterA = getFirstLetter(a.title);
          const firstLetterB = getFirstLetter(b.title);
          
          return firstLetterA.localeCompare(firstLetterB, 'fr', { sensitivity: 'base' });
        });
    }
    
    // Fallback si pas de formations dans la config
    return fallbackFormations.sort((a, b) => {
      // Fonction pour extraire la première lettre significative du titre
      const getFirstLetter = (title: string) => {
        // Supprimer les articles français courants au début
        const cleanTitle = title
          .replace(/^(L'|D'|Un |Une |Le |La |Les |Des |Du |De |D'|L'|A |À |Au |Aux )/i, '')
          .replace(/^[^a-zA-ZÀ-ÿ]*/, '') // Supprimer tout ce qui n'est pas une lettre au début
          .trim();
        return cleanTitle.charAt(0).toLowerCase();
      };
      
      const firstLetterA = getFirstLetter(a.title);
      const firstLetterB = getFirstLetter(b.title);
      
      return firstLetterA.localeCompare(firstLetterB, 'fr', { sensitivity: 'base' });
    });
  }, [isClient]);

  // Extraire les catégories depuis le fichier de configuration
  const categories = useMemo<string[]>(() => {
    if (!isClient) return defaultCategories;
    
    if (formationsConfig?.categories && formationsConfig.categories.length > 0) {
      // Récupérer toutes les catégories qui ont au moins une formation
      const categoriesWithFormations = new Set<string>();
      formationsConfig.formations?.forEach(formation => {
        const categoryName = formationsConfig.categories?.find(cat => cat.id === formation.category)?.name;
        if (categoryName) {
          categoriesWithFormations.add(categoryName);
        }
      });
      
      // Convertir en tableau et trier par ordre alphabétique
      const sortedCategories = Array.from(categoriesWithFormations).sort();
      
      return ["Toutes les catégories", ...sortedCategories];
    }
    return defaultCategories;
  }, [isClient]);

  // Filtrer les formations en fonction des critères de recherche
  const filteredFormations = useMemo(() => {
    if (!isClient) return [];
    
    return formations.filter(formation => {
      const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            formation.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Toutes les catégories' || formation.category === selectedCategory;
      
      let matchesCpf = true;
      if (cpfFilter === 'eligible') {
        matchesCpf = formation.cpf === true;
      } else if (cpfFilter === 'not-eligible') {
        matchesCpf = formation.cpf === false;
      }
      
      return matchesSearch && matchesCategory && matchesCpf;
    });
  }, [formations, searchTerm, selectedCategory, cpfFilter, isClient]);

  // Éviter le rendu des filtres avant l'hydratation complète
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Libérez votre potentiel et celui de vos équipes grâce à des formations centrées sur l’humain et les sciences cognitives.</h1>
            <p className="text-gray-600 text-lg mb-4">
              Découvrez notre catalogue de formations en développement personnel, communication, management et sciences cognitives conçues pour développer vos compétences professionnelles et booster votre carrière.
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Libérez votre potentiel et celui de vos équipes grâce à des formations centrées sur l’humain et les sciences cognitives.</h1>
          <p className="text-gray-600 text-lg mb-4">
          Des programmes sur-mesure en soft skills, QVCT, créativité & management, conçus pour transformer l’engagement en résultats tangibles..
          </p>
          <div 
            className="rounded-lg p-6 mb-6 text-white"
            style={{
              background: `linear-gradient(to right, ${themeConfig.brand.primaryColor}, ${themeConfig.brand.primaryColor}dd)`
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Financement facilité</h3>
            </div>
            <p className="text-white text-opacity-90">
              Toutes nos formations peuvent faire l'objet d'un financement par les dispositifs habituels : <strong>OPCO</strong>, <strong>France Travail</strong> ou autres aides à la formation. N'hésitez pas à nous contacter, nous vous accompagnons dans les démarches.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une formation..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                value={searchTerm}
                onChange={(e) => {
                  if (e && e.target) {
                    setSearchTerm(e.target.value);
                  }
                }}
              />
            </div>
            <button
              className="md:hidden flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              Filtres
            </button>
          </div>

          <div className="hidden md:flex gap-4">
            <div className="w-full">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Catégorie
              </label>
              <select
                id="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                value={selectedCategory}
                onChange={(e) => {
                  if (e && e.target) {
                    setSelectedCategory(e.target.value);
                  }
                }}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="cpf-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Éligibilité CPF
              </label>
              <select
                id="cpf-filter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                value={cpfFilter}
                onChange={(e) => {
                  if (e && e.target) {
                    setCpfFilter(e.target.value);
                  }
                }}
              >
                <option value="all">Toutes les formations</option>
                <option value="eligible">Éligibles CPF</option>
                <option value="not-eligible">Non éligibles CPF</option>
              </select>
            </div>
          </div>

          {isFilterOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <div>
                <label htmlFor="category-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  id="category-mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  value={selectedCategory}
                  onChange={(e) => {
                    if (e && e.target) {
                      setSelectedCategory(e.target.value);
                    }
                  }}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cpf-filter-mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Éligibilité CPF
                </label>
                <select
                  id="cpf-filter-mobile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
                  value={cpfFilter}
                  onChange={(e) => {
                    if (e && e.target) {
                      setCpfFilter(e.target.value);
                    }
                  }}
                >
                  <option value="all">Toutes les formations</option>
                  <option value="eligible">Éligibles CPF</option>
                  <option value="not-eligible">Non éligibles CPF</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-gray-600">
              {filteredFormations.length} formation{filteredFormations.length !== 1 ? 's' : ''} trouvée{filteredFormations.length !== 1 ? 's' : ''}
            </p>
            {(cpfFilter !== 'all' || selectedCategory !== 'Toutes les catégories' || searchTerm) && (
              <div className="flex flex-wrap gap-2">
                {cpfFilter === 'eligible' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CreditCard size={12} className="mr-1" />
                    Éligibles CPF
                  </span>
                )}
                {cpfFilter === 'not-eligible' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <CreditCard size={12} className="mr-1" />
                    Non éligibles CPF
                  </span>
                )}
                {selectedCategory !== 'Toutes les catégories' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {selectedCategory}
                  </span>
                )}
                {searchTerm && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    "{searchTerm}"
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFormations.map((formation) => (
            <div key={formation.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform flex flex-col h-full min-h-[500px]">
              <div className="h-48 overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3 min-h-[32px]">
                  <span className="bg-brand text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {formation.category}
                  </span>
                </div>
                <div className="flex items-start mb-4 min-h-[80px]">
                  <div className="bg-brand p-2 rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-white">
                    <FormationIcon icon={formation.icon} size={20} className="" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">{formation.title}</h3>
                </div>
                <p className="text-gray-600 mb-5 min-h-[80px] flex items-start">
                  {formation.description}
                </p>
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 min-h-[48px]">
                  {formation.cpf ? (
                    <>
                    <div className="flex items-center text-sm text-gray-600 mr-3 mb-2 min-w-[120px]">
                    <Clock size={16} className="mr-2 text-brand-600" />
                    <span>{formatDuration(formation.duration)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mr-3 mb-2 min-w-[120px]">
                    <Tag size={16} className="mr-2 text-brand-600" />
                    <span>{formation.price}</span>
                  </div>
                    <div className="flex items-center text-sm text-green-600 font-medium mr-3 mb-2 min-w-[120px]">
                      <CreditCard size={16} className="mr-2 text-green-600" />
                      <span>Éligible CPF</span>
                    </div>
                    </>
                  ):
                  (
                    <div className="flex w-full items-center justify-between mb-2">
                      <div className="flex items-center text-sm text-gray-600 min-w-[120px]">
                        <Clock size={16} className="mr-2 text-brand-600" />
                        <span>{formatDuration(formation.duration)}</span>
                      </div>
                      <div className="flex-1 flex justify-center min-w-[120px]">
                        <div className="flex items-center text-sm text-gray-800">
                          <Tag size={16} className="mr-2 text-brand-600" />
                          <span>{formation.price}</span>
                        </div>
                      </div>
                      <div className="w-[120px]" />
                    </div>
                  )}
                </div>
                {formation.certification && (
                <div className="flex items-center text-sm text-gray-600 mb-5 min-h-[32px]">
                  <Award size={16} className="mr-2 text-brand-600" />
                  <span>{formation.certification}</span>
                </div>
                )}
                <Link 
                  href={formation.path as any}
                  className="btn-primary btn-md btn-with-icon w-full mt-auto"
                >
                  Découvrir cette formation <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredFormations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Aucune formation ne correspond à votre recherche.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Toutes les catégories');
                setCpfFilter('all');
              }}
              className="bg-[#8b308e] text-white font-medium hover:bg-[#6d256f] px-2 py-1 rounded"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormationsPage;