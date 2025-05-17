import { FormationsConfig } from './types';

/**
 * Configuration des formations
 * Ajoutez, modifiez ou supprimez des formations selon vos besoins
 */
const formationsConfig: FormationsConfig = {
  // Catégories de formations
  categories: [
    {
      id: 'langues',
      name: 'Langues',
      description: 'Maîtrisez de nouvelles langues pour développer vos opportunités professionnelles',
      icon: 'Globe'
    },
    {
      id: 'communication',
      name: 'Communication',
      description: 'Perfectionnez vos compétences en communication écrite et orale',
      icon: 'MessageSquare'
    },
    {
      id: 'management',
      name: 'Management',
      description: 'Développez vos compétences en gestion d\'équipe et leadership',
      icon: 'Users'
    },
    {
      id: 'informatique',
      name: 'Informatique & Digital',
      description: 'Maîtrisez les outils numériques essentiels pour votre activité',
      icon: 'Laptop'
    }
  ],
  
  // Liste des formations
  formations: [
    {
      id: 'anglais',
      title: 'Formation Anglais',
      shortDescription: 'Développez vos compétences en anglais professionnel',
      fullDescription: 'Notre formation en anglais professionnel vous permet de gagner en aisance à l\'oral comme à l\'écrit dans un contexte professionnel. Adaptée à votre niveau et à vos besoins spécifiques.',
      slug: 'formation-anglais',
      category: 'langues',
      image: '/images/formations/anglais.jpg',
      duration: '40h',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      cpfEligible: true,
      features: [
        'Formation sur-mesure adaptée à votre niveau',
        'Accent mis sur la pratique orale',
        'Préparation aux situations professionnelles',
        'Certification reconnue internationalement'
      ],
      certifications: [
        'TOEIC',
        'LINGUASKILL',
        'BRIGHT'
      ],
      objectives: [
        'Améliorer la compréhension et l\'expression orale',
        'Enrichir le vocabulaire professionnel',
        'Gagner en confiance lors des échanges en anglais',
        'Maîtriser les situations courantes en contexte professionnel'
      ],
      program: [
        {
          title: 'Fondamentaux',
          items: [
            'Évaluation initiale et définition des objectifs',
            'Révision des structures grammaticales essentielles',
            'Enrichissement du vocabulaire professionnel',
            'Amélioration de la prononciation'
          ]
        },
        {
          title: 'Communication professionnelle',
          items: [
            'Techniques de présentation en anglais',
            'Participation active aux réunions',
            'Rédaction d\'emails et de rapports',
            'Conversations téléphoniques'
          ]
        },
        {
          title: 'Mise en pratique',
          items: [
            'Jeux de rôle en situations professionnelles',
            'Études de cas concrets',
            'Immersion dans des contextes authentiques',
            'Préparation à la certification'
          ]
        }
      ]
    },
    
    {
      id: 'francais',
      title: 'Formation Français Langue Étrangère (FLE)',
      shortDescription: 'Perfectionnez votre français à l\'écrit et à l\'oral',
      fullDescription: 'Notre formation en Français Langue Étrangère (FLE) s\'adresse aux professionnels non-francophones souhaitant améliorer leur niveau de français pour évoluer dans un contexte professionnel francophone.',
      slug: 'formation-francais',
      category: 'langues',
      image: '/images/formations/francais.jpg',
      duration: '40h',
      prices: {
        individuel: { price: '1 950€*', label: 'Éligible CPF' },
        collectif: { price: '1 250€*', label: 'Éligible CPF' }
      },
      cpfEligible: true,
      features: [
        'Approche personnalisée selon votre niveau',
        'Focus sur vos besoins professionnels spécifiques',
        'Formateurs natifs expérimentés',
        'Préparation aux certifications officielles'
      ],
      certifications: [
        'DCL FLE',
        'TCF',
        'TEF'
      ],
      objectives: [
        'Communiquer avec aisance dans un contexte professionnel',
        'Maîtriser les subtilités de la langue française',
        'Rédiger des documents professionnels en français',
        'S\'intégrer facilement dans un environnement francophone'
      ],
      program: [
        {
          title: 'Bases linguistiques',
          items: [
            'Évaluation du niveau et identification des besoins',
            'Grammaire et conjugaison adaptées au niveau',
            'Enrichissement du vocabulaire professionnel',
            'Amélioration de la prononciation et de l\'intonation'
          ]
        },
        {
          title: 'Communication professionnelle',
          items: [
            'Expression orale en contexte professionnel',
            'Compréhension de documents authentiques',
            'Rédaction professionnelle',
            'Communication téléphonique et en réunion'
          ]
        },
        {
          title: 'Culture et intégration',
          items: [
            'Codes culturels français en entreprise',
            'Mise en situation professionnelle',
            'Préparation à la certification',
            'Plan d\'action personnalisé post-formation'
          ]
        }
      ]
    },
    
    // Ajoutez d'autres formations selon le même modèle...
    
    {
      id: 'communication',
      title: 'Formation Communication Professionnelle',
      shortDescription: 'Perfectionnez votre communication orale et écrite',
      fullDescription: 'Notre formation en communication professionnelle vous permet de développer des compétences essentielles pour communiquer efficacement dans tous les contextes professionnels, de la prise de parole en public à la rédaction de contenus impactants.',
      slug: 'formation-communication',
      category: 'communication',
      image: '/images/formations/communication.jpg',
      duration: '21h',
      prices: {
        individuel: { price: '1 490€*', label: 'Financement OPCO' },
        collectif: { price: '990€*', label: 'Financement OPCO' }
      },
      cpfEligible: false,
      features: [
        'Méthodes pédagogiques interactives',
        'Exercices pratiques et mises en situation',
        'Outils concrets à appliquer immédiatement',
        'Suivi post-formation personnalisé'
      ],
      certifications: [],
      objectives: [
        'Structurer efficacement son discours',
        'Adapter sa communication selon les interlocuteurs',
        'Maîtriser les techniques de prise de parole en public',
        'Perfectionner sa communication écrite professionnelle'
      ],
      program: [
        {
          title: 'Fondamentaux de la communication',
          items: [
            'Les principes d\'une communication efficace',
            'Identifier son style de communication',
            'Adapter son message selon le contexte',
            'Développer son assertivité'
          ]
        },
        {
          title: 'Communication orale',
          items: [
            'Techniques de prise de parole en public',
            'Gestion du stress et des émotions',
            'Communication en réunion et en visioconférence',
            'L\'art du pitch et de l\'argumentation'
          ]
        },
        {
          title: 'Communication écrite',
          items: [
            'Structurer ses écrits professionnels',
            'Rédaction d\'emails efficaces',
            'Conception de présentations impactantes',
            'Communication digitale et sur les réseaux sociaux'
          ]
        }
      ]
    }
    
    // Vous pouvez continuer à ajouter d'autres formations ici
  ]
};

export default formationsConfig;
