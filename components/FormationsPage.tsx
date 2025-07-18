'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Award, Clock, Tag, CreditCard, MessageSquare, Target, Brain, Star, Globe, Hand, Laptop, Users } from 'lucide-react';
import formationsConfig from '../lib/config/formations';
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Transforme les données de configuration en données utilisables pour l'affichage
  const formations = useMemo<FormationDisplayData[]>(() => {
    // Si nous avons des formations dans le fichier de configuration, utilisez-les
    if (formationsConfig.formations && formationsConfig.formations.length > 0) {
      return formationsConfig.formations.map(formation => ({
        id: formation.id,
        title: formation.title,
        category: formationsConfig.categories.find(cat => cat.id === formation.category)?.name || formation.category,
        level: "Intermédiaire", // Valeur par défaut
        duration: formation.duration,
        certification: formation.certifications ? formation.certifications[0] : "",
        price: formation.prices.collectif.price,
        cpf: formation.cpfEligible,
        description: formation.shortDescription,
        image: formation.image,
        icon: formationsConfig.categories.find(cat => cat.id === formation.category)?.icon || "MessageSquare",
        path: `/${formation.slug}`
      }));
    }
    
    // Fallback si pas de formations dans la config
    return fallbackFormations;
  }, []);

  // Extraire les catégories depuis le fichier de configuration
  const categories = useMemo<string[]>(() => {
    if (formationsConfig.categories && formationsConfig.categories.length > 0) {
      const categoriesFromConfig = formationsConfig.categories.map(cat => cat.name);
      return ["Toutes les catégories", ...categoriesFromConfig];
    }
    return defaultCategories;
  }, []);

  // Filtrer les formations en fonction des critères de recherche
  const filteredFormations = useMemo(() => {
    // Si aucun terme de recherche et catégorie par défaut, afficher toutes les formations
    if (!searchTerm && selectedCategory === 'Toutes les catégories') {
      return formations;
    }
    
    return formations.filter(formation => {
      const matchesSearch = !searchTerm || formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            formation.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Toutes les catégories' || formation.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [formations, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Développez vos compétences ou celles de vos équipes grâce à des formations efficaces et enrichissantes.</h1>
          <p className="text-gray-600 text-lg">
          Toutes nos formations peuvent faire l’objet d’un financement par les dispositifs habituels : OPCO, Pôle emploi ou autres aides à la formation. N’hésitez pas à nous contacter, nous vous accompagnons dans les démarches.</p>
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
                onChange={(e) => setSearchTerm(e.target.value)}
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
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
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
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            {filteredFormations.length} formation{filteredFormations.length !== 1 ? 's' : ''} trouvée{filteredFormations.length !== 1 ? 's' : ''}
          </p>
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
                <div className="flex items-start mb-4 min-h-[56px]">
                  <div className="bg-brand p-2 rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-white">
                    <FormationIcon icon={formation.icon} size={20} className="" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{formation.title}</h3>
                </div>
                <p className="text-gray-600 mb-5 min-h-[48px] flex items-center">
                  {formation.description}
                </p>
                <div className="flex flex-wrap items-center justify-between mb-5 border-t border-b border-gray-100 py-3 min-h-[48px]">
                  {formation.cpf ? (
                    <>
                    <div className="flex items-center text-sm text-gray-600 mr-3 mb-2 min-w-[120px]">
                    <Clock size={16} className="mr-2 text-brand-600" />
                    <span>{formation.duration}</span>
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
                        <span>{formation.duration}</span>
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
                  <span>Certifié par {formation.certification}</span>
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
              }}
              className="bg-[#FFD400] text-black font-medium hover:bg-[#E0BB00] px-2 py-1 rounded"
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
