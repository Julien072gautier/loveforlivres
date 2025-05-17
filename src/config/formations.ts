import { FormationsConfig } from './types';

/**
 * Configuration des formations
 * Ajoutez, modifiez ou supprimez des formations selon vos besoins
 */
const formationsConfig: FormationsConfig = {
  // Catégories de formations
  categories: [
    {
      id: 'digital',
      name: 'Digital',
      description: 'Communication digitale et réseaux sociaux',
      icon: 'Users'
    },
  ],
  
  formations: [
    {
      id: 'community-management',
      title: 'Développer son activité avec le Community Management',
      shortDescription: 'Maîtrisez les stratégies et outils du Community Management',
      fullDescription: 'Le Community Management est essentiel pour les entreprises car il permet de construire et maintenir des relations solides avec leur audience sur les plateformes numériques. Grâce à une gestion proactive des médias sociaux, il favorise l\'engagement des clients, renforce la fidélité à la marque et génère des retours précieux pour améliorer les produits et services. En outre, le Community Management contribue à façonner une image de marque positive et à gérer les crises de réputation de manière efficace. En somme, il s\'agit d\'une stratégie incontournable pour accroître la visibilité et la crédibilité d\'une entreprise dans un monde de plus en plus connecté.',
      slug: 'formation-community-management',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      duration: '21h',
      prices: {
        individuel: { price: '2 450€*', label: 'Éligible CPF' },
        collectif: { price: '1 650€*', label: 'Éligible CPF' }
      },
      cpfEligible: true,
      features: [
        'Relation client renforcée',
        'Visibilité accrue',
        'Engagement optimisé',
        'E-réputation maîtrisée'
      ],
      certifications: [
        'RS6452 - Webmarketing & Com'
      ],
      objectives: [
        'Elaborer une stratégie de Community Management',
        'Organiser l’application opérationnelle d’un projet de Community Management',
        'Suivre et évaluer l’impact de ses actions de Community Management'
      ],
      program: [
        {
          title: 'Module 1 : Définir sa stratégie de Community Management',
          items: [
            'Définir sa cible et ses objectifs sur les réseaux sociaux',
            'Intégrer le Community Management à sa stratégie globale',
            'Sélectionner les plateformes adaptées et définir son budget'
          ]
        },
        {
          title: 'Module 2 : Créer ses comptes sur les réseaux sociaux',
          items: [
            'Élaborer une charte graphique cohérente',
            'Créer et paramétrer ses comptes professionnels'
          ]
        },
        {
          title: 'Module 3 : Animer ses comptes sociaux',
          items: [
            'Concevoir un calendrier éditorial efficace',
            'Créer et publier du contenu engageant',
            'Comprendre les algorithmes et maximiser l\'engagement'
          ]
        },
        {
          title: 'Module 4 : Mettre en place des actions d\'acquisition d\'abonnés',
          items: [
            'Développer sa communauté naturellement',
            'Utiliser la publicité pour accélérer sa croissance'
          ]
        },
        {
          title: 'Module 5 : Mobiliser les compétences pour un projet de Community Management',
          items: [
            'Piloter son projet et organiser le travail des intervenants',
            'Sélectionner les outils et plateformes adaptés'
          ]
        },
        {
          title: 'Module 6 : Analyser les résultats de sa stratégie',
          items: [
            'Suivi des performances et analyse des indicateurs clés',
            'Proposition d\'axes d\'amélioration et optimisation du ROI'
          ]
        }
      ],
      publicVise: [
        'Dirigeants de petites entreprises',
        'Collaborateurs en charge de la communication marketing'
      ],
      prerequis: [
        'Être utilisateur des réseaux sociaux',
        'Avoir un projet de communication sur les réseaux sociaux',
        'Justifier d\'un an d\'expérience professionnelle'
      ],
      teachingMethods: [
        'Approche théorique',
        'Exemples concrets',
        'Partages d’expériences',
        'Cas pédagogiques en groupe',
        'Mises en situation, jeux de rôles, co-développement'
      ],
      evaluationMethods: [
        'Évaluation des compétences entrée vs sortie',
        'Feuilles de présence',
        'Certificat de réalisation'
      ],
      certificationDetails: {
        name: 'Développer son activité avec le Community Management',
        code: 'RS6452',
        organization: 'Webmarketing & Com',
        description: 'Cette formation vous prépare à la certification « Développer son activité avec le Community Management » enregistrée à France Compétences sous le numéro RS6452',
        examDetails: {
          format: [
            'Mise en situation professionnelle avec soutenance orale',
            'Présentation de la stratégie éditoriale',
            'Analyse des actions et outils utilisés'
          ],
          successRate: '95%'
        },
      },
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Relation client renforcée',
          description: 'Bâtissez une relation solide avec votre audience sur les réseaux sociaux',
          icon: 'Users'
        },
        {
          title: 'Visibilité accrue',
          description: 'Augmentez votre visibilité et votre crédibilité sur le marché',
          icon: 'Target'
        },
        {
          title: 'Engagement optimisé',
          description: 'Favorisez l\'engagement et la fidélisation de vos clients',
          icon: 'MessageSquare'
        },
        {
          title: 'E-réputation maîtrisée',
          description: 'Gérez efficacement votre réputation en ligne',
          icon: 'Star'
        }
      ]
    }
    
    // Vous pouvez continuer à ajouter d'autres formations ici
  ]
};

export default formationsConfig;
