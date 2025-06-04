import { FormationsConfig } from './types';

/**
 * Configuration des formations
 * Ajoutez, modifiez ou supprimez des formations selon vos besoins
 */
const formationsConfig: FormationsConfig = {
  // Catégories de formations
  categories: [
    {
      id: 'Communication numérique',
      name: 'Communication numérique',
      description: 'Renforcez votre présence en ligne',
      icon: 'Users'
    },
    {
      id: 'Transformation numérique',
      name: 'Transformation numérique',
      description: 'Accélérez votre transition digitale',
      icon: 'Users'
    },
    {
      id: 'Intelligence Artificielle',
      name: 'Intelligence Artificielle',
      description: 'Intégrez l’intelligence artificielle efficacement',
      icon: 'Users'
    },
    {
      id: 'Personal branding',
      name: 'Personal branding',
      description: 'Valorisez votre image professionnelle',
      icon: 'Users'
    },
    {
      id: 'Management',
      name: 'Management',
      description: 'Développez un leadership performant',
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
      category: 'Communication numérique',
      image: '/images/Community.png',
      duration: '21h',
      formateur: '',
      prices: {
        individuel: { price: 'Dès 2920€ HT', label: 'Éligible CPF' },
        collectif: { price: 'Dès 2440€ HT', label: 'Éligible CPF' }
      },

      dates: {
        collectif: [
          
                              
                  ],
        individuel: [
          
        ]
      },
      cpfEligible: true,
      features: [
        'Relation client renforcée',
        'Visibilité accrue',
        'Engagement optimisé',
        'E-réputation maîtrisée'
      ],
      certifications: [
        'Webmarketing & Com - RS6452'
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
    },
    {
      id: 'linkedin-repositionnement',
      title: '(Re)positionner son profil pro sur LinkedIn',
      shortDescription: 'Clarifiez votre positionnement et rayonnez sur LinkedIn',
      fullDescription: 'Aujourd’hui, LinkedIn est bien plus qu’un simple CV en ligne. C’est un levier d’opportunités professionnelles, de repositionnement, de visibilité et de réseau. Pour les profils en reconversion, en création d’activité ou en veille, c’est devenu un passage stratégique, parfois intimidant. Cette formation donne les clés concrètes pour construire un profil percutant, sincère et efficace, même si on part de zéro. Une journée pour clarifier son positionnement, gagner en assurance, et poser un cadre simple et réaliste pour rayonner sur LinkedIn.',
      slug: 'formation-linkedin-repositionnement',
      category: 'Personal branding',
      image: '/images/Linkedin.png', // ← fichier à placer dans : C:\Users\julie\OneDrive - ACCERTIF\FORMAPRO BY ACCERTIF\COMMUNICATION\Site\Backup\zuma\public\images
      duration: '7h',
      formateur: '',
      prices: {
        individuel: { price: 'Dès 980€ HT', label: '' },
        collectif: { price: 'Dès 790€ HT', label: '' }
      },
      dates: {
        collectif: [
          
        ],
        individuel: [
          
        ]
      },
      cpfEligible: false,
      features: [
        'Profil LinkedIn optimisé',
        'Visibilité renforcée',
        'Réseau professionnel aligné',
        'Plan d’action concret sur 3 mois'
      ],
      objectives: [
        'Comprendre les usages actuels de LinkedIn',
        'Créer ou optimiser son profil professionnel',
        'Développer un réseau aligné avec ses objectifs',
        'Mettre en œuvre un plan d’action simple et durable'
      ],
      program: [
        {
          title: 'Matinée – Comprendre les enjeux de LinkedIn et (re)construire son profil',
          items: [
            'Pourquoi LinkedIn est stratégique aujourd’hui ?',
            'Fonctionnement des algorithmes et de la visibilité',
            'Les 3 piliers d’un bon profil (clarté, cohérence, authenticité)',
            'Atelier : Réécriture du profil (titre, bio, expériences, contenus)'
          ]
        },
        {
          title: 'Après-midi – Développer sa visibilité et construire une présence alignée',
          items: [
            'Les bases d’une visibilité authentique et non chronophage',
            'Publications, commentaires et interactions pertinentes',
            'Réseautage efficace et naturel',
            'Atelier : Élaboration d’un plan d’action LinkedIn personnalisé'
          ]
        }
      ],
      publicVise: [
        'Personnes en reconversion ou repositionnement professionnel',
        'Freelances, solopreneurs, cadres en veille',
        'Seniors ou profils hybrides souhaitant clarifier leur image pro'
      ],
      prerequis: [
        'Avoir un compte LinkedIn (même inactif)',
        'Apporter un ordinateur ou une tablette'
      ],
      teachingMethods: [
        'Ateliers pratiques sur les profils des participants',
        'Démonstrations en direct',
        'Feedbacks croisés et échanges de pratiques',
        'Livret synthétique avec checklists'
      ],
      evaluationMethods: [
        'Évaluation avant/après du profil LinkedIn',
        'Élaboration d’un plan d’action individuel',
        'Attestation de fin de formation',
        'Feuilles de présence'
      ],
      
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Profil clair et impactant',
          description: 'Valorisez votre singularité avec un profil authentique et aligné',
          icon: 'UserCheck'
        },
        {
          title: 'Stratégie de visibilité naturelle',
          description: 'Soyez visible sans pression ni posture artificielle',
          icon: 'Eye'
        },
        {
          title: 'Réseau professionnel ciblé',
          description: 'Développez un réseau cohérent avec vos objectifs',
          icon: 'Users'
        },
        {
          title: 'Plan d’action durable',
          description: 'Repartez avec une méthode concrète sur 3 mois',
          icon: 'CalendarCheck'
        }
      ]
    },    
    {
      id: 'ia-tpe-entrepreneurs',
      title: 'Accélérez votre entreprise avec l’IA',
      shortDescription: 'Comprendre, tester et intégrer les bons outils d’IA pour booster votre activité',
      fullDescription: 'L’intelligence artificielle n’est plus réservée aux grandes entreprises ou aux experts en technologie. Elle est désormais accessible, abordable et redoutablement efficace pour les petites structures, dès leur création ou en phase de développement. Cette formation permet aux entrepreneurs débutants comme aux dirigeants de TPE/PME de comprendre l’essentiel de l’IA, de tester des outils simples et d’identifier les usages concrets les plus utiles à leur activité.',
      slug: 'formation-ia-tpe-entrepreneurs',
      category: 'Intelligence Artificielle',
      image: '/images/IA.png', // ← Place cette image dans : C:\Users\julie\OneDrive - ACCERTIF\FORMAPRO BY ACCERTIF\COMMUNICATION\Site\Backup\zuma\public\images
      duration: '14h',
      formateur: '',
      prices: {
        individuel: { price: 'Dès 2140€ HT', label: '' },
        collectif: { price: 'Dès 1790€ HT', label: '' }
      },
      dates: {
        collectif: [
          
        ],
        individuel: [
          
        ]
      },
      cpfEligible: false,
      features: [
        'Outils concrets pour TPE/PME',
        'Mises en pratique guidées',
        'Automatisation des tâches',
        'Kit IA personnalisé'
      ],
      objectives: [
        'Comprendre les usages concrets de l’IA pour une petite entreprise',
        'Identifier les outils adaptés à ses besoins',
        'Prendre en main des solutions d’IA simples et utiles',
        'Mettre en place une démarche responsable et sécurisée'
      ],
      program: [
        {
          title: 'Jour 1 — Comprendre le potentiel de l’IA et l’adapter à son entreprise',
          items: [
            'Pourquoi l’IA est une opportunité pour les petites structures',
            'Automatiser les tâches, optimiser la communication, libérer sa créativité',
            'Découverte des outils IA utiles : ChatGPT, Canva IA, Notion AI, etc.',
            'Premier atelier pratique : assistant IA pour le quotidien'
          ]
        },
        {
          title: 'Jour 2 — Intégrer l’IA dans ses processus et se lancer',
          items: [
            'Visibilité, prospection, SEO : mieux vendre avec l’IA',
            'Automatiser sa gestion, sa comptabilité ou sa veille',
            'Construire son kit IA et ses workflows sécurisés',
            'Atelier final : feuille de route IA personnalisée sur 3 mois'
          ]
        }
      ],
      publicVise: [
        'Créateurs d’entreprise',
        'Dirigeants de TPE/PME',
        'Porteurs de projet ou collaborateurs impliqués dans la communication, la gestion ou le développement'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Avoir une idée de projet ou une activité en cours'
      ],
      teachingMethods: [
        'Apports illustrés et concrets',
        'Démonstrations en direct',
        'Mises en pratique sur des outils d’IA',
        'Études de cas et échanges de pratiques',
        'Support synthétique avec outils testés'
      ],
      evaluationMethods: [
        'Auto-évaluation avant/après',
        'Plan d’action IA personnalisé',
        'Feuilles de présence',
        'Attestation de réalisation'
      ],
      
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Automatisation accessible',
          description: 'Gagnez un temps précieux grâce aux outils d’IA simples',
          icon: 'Zap'
        },
        {
          title: 'Communication optimisée',
          description: 'Créez visuels, contenus, newsletters plus facilement',
          icon: 'MessageCircle'
        },
        {
          title: 'Pilotage facilité',
          description: 'Structurez et organisez votre activité avec l’aide de l’IA',
          icon: 'Activity'
        },
        {
          title: 'Vision stratégique renforcée',
          description: 'Construisez un plan d’action IA clair et sécurisé',
          icon: 'Target'
        }
      ]
    },
    {
      id: 'culture-collaborative',
      title: 'Développer une culture collaborative efficace',
      shortDescription: 'Structurez les échanges pour mieux travailler ensemble avec les bons outils et méthodes',
      fullDescription: 'Beaucoup d’équipes croulent sous les outils (WhatsApp, mails, Drive, Excel…), sans cadre commun ni méthode partagée. Résultat : surcharge mentale, silos, perte d’infos, stress. Dans un contexte de télétravail, d’hybridation et de transformation numérique, il devient urgent d’adopter une culture collaborative structurée. Cette formation aide les entreprises à repenser leurs pratiques de travail, à installer un socle numérique commun, et à redonner du sens au “travailler ensemble”.',
      slug: 'formation-culture-collaborative',
      category: 'Management',
      image: '/images/Culture.png', // ← Place cette image dans : C:\Users\julie\OneDrive - ACCERTIF\FORMAPRO BY ACCERTIF\COMMUNICATION\Site\Backup\zuma\public\images
      duration: '14h',
      formateur: '',
      prices: {
        individuel: { price: 'Dès 2140€ HT', label: '' },
        collectif: { price: 'Dès 1790€ HT', label: '' }
      },
      dates: {
        collectif: [
          
        ],
        individuel: [
          
        ]
      },
      cpfEligible: false,
      features: [
        'Collaboration structurée',
        'Outils numériques adaptés',
        'Routines durables',
        'Plan d’action opérationnel'
      ],
      objectives: [
        'Comprendre les enjeux d’une collaboration numérique fluide',
        'Identifier les outils collaboratifs adaptés aux usages de l’équipe',
        'Structurer les échanges et les flux d’information',
        'Installer des routines de travail partagées et sécurisées'
      ],
      program: [
        {
          title: 'Jour 1 – Diagnostic et bases de la collaboration numérique',
          items: [
            'Comprendre les impacts du “trop d’outils”',
            'Cartographie collective des pratiques actuelles',
            'Principes de base : centralisation, visibilité, accessibilité',
            'Tester les outils : Trello, Notion, Google Workspace, Slack, etc.',
            'Atelier 1 : repenser un processus d’équipe avec les bons outils'
          ]
        },
        {
          title: 'Jour 2 – Construire une culture collaborative durable',
          items: [
            'Rituels et routines d’équipe efficaces (stand-up, hebdo...)',
            'Organisation du télétravail et bonnes pratiques de communication',
            'Sécuriser les usages numériques (RGPD, pro/perso, déconnexion)',
            'Déployer un socle commun et une charte collaborative',
            'Atelier final : plan de collaboration numérique à 3 mois'
          ]
        }
      ],
      publicVise: [
        'Dirigeants, managers, responsables de service',
        'Assistants de direction, chefs de projets, coordinateurs',
        'Toute personne chargée de structurer la collaboration dans une équipe'
      ],
      prerequis: [
        'Utilisation basique d’Internet et d’un ordinateur (navigateur, e-mail, bureautique simple)'
      ],
      teachingMethods: [
        'Démonstrations en direct sur outils',
        'Ateliers pratiques avec scénarios métiers',
        'Cartographie collaborative des pratiques',
        'Apports méthodologiques et cas concrets'
      ],
      evaluationMethods: [
        'Auto-évaluation début et fin de session',
        'Restitution d’un mini plan de collaboration personnalisé',
        'Feuilles de présence',
        'Attestation de réalisation'
      ],
      
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Moins d’outils, plus d’efficacité',
          description: 'Mettez fin au chaos numérique avec un socle commun structuré',
          icon: 'FolderCog'
        },
        {
          title: 'Travail en équipe simplifié',
          description: 'Favorisez les échanges fluides et la clarté des rôles',
          icon: 'Users'
        },
        {
          title: 'Gain de temps et sérénité',
          description: 'Évitez les doublons, les pertes d’infos et le stress',
          icon: 'Clock'
        },
        {
          title: 'Plan d’action clair',
          description: 'Repartez avec une feuille de route collaborative à 3 mois',
          icon: 'ClipboardCheck'
        }
      ]
    },
    {
      id: 'performance-rh-numerique',
      title: 'Performance RH : simplifier, engager, recruter, former à l’ère numérique',
      shortDescription: 'Recrutez, intégrez, formez et collaborez efficacement grâce aux outils numériques',
      fullDescription: 'La fonction RH est aujourd’hui un acteur stratégique de la transformation numérique. Digitaliser les processus RH ne signifie pas remplacer l’humain, mais gagner en réactivité, en clarté et en impact. Cette formation aide les professionnels RH à s’approprier les bons outils, à fluidifier l’expérience collaborateur, et à structurer un plan RH digitalisé cohérent, sans jargon ni complexité.',
      slug: 'formation-performance-rh-numerique',
      category: 'Transformation numérique',
      image: '/images/RH.png', // ← Place cette image dans : C:\Users\julie\OneDrive - ACCERTIF\FORMAPRO BY ACCERTIF\COMMUNICATION\Site\Backup\zuma\public\images
      duration: '14h',
      formateur: '',
      prices: {
        individuel: { price: 'Dès 2320€ HT', label: '' },
        collectif: { price: 'Dès 1940€ HT', label: '' }
      },
      dates: {
        collectif: [
          
        ],
        individuel: [
        
        ]
      },
      cpfEligible: false,
      features: [
        'Outils RH testés et accessibles',
        'Recrutement digitalisé',
        'Formation modernisée',
        'Plan d’action RH opérationnel'
      ],
      objectives: [
        'Identifier les enjeux de la digitalisation RH',
        'Choisir et utiliser les bons outils numériques RH',
        'Améliorer l’expérience candidat et collaborateur',
        'Intégrer l’IA dans les processus RH avec éthique',
        'Structurer un plan RH digitalisé sur 6 mois'
      ],
      program: [
        {
          title: 'Jour 1 – Recruter, intégrer et collaborer à l’ère digitale',
          items: [
            'Enjeux et leviers de la digitalisation RH',
            'Panorama des outils : SIRH, ATS, onboarding digital, etc.',
            'Améliorer la visibilité et fluidifier le recrutement',
            'Utiliser l’IA sans déshumaniser',
            'Créer un onboarding hybride engageant'
          ]
        },
        {
          title: 'Jour 2 – Former, gérer, accompagner avec les outils numériques',
          items: [
            'Déployer une stratégie de formation digitale inclusive',
            'Choisir une plateforme LMS simple',
            'Impliquer les collaborateurs dans leur montée en compétences',
            'Collaborer efficacement à distance et en mode hybride',
            'Construire un plan RH digitalisé sur 6 mois'
          ]
        }
      ],
      publicVise: [
        'Professionnels RH : responsables RH, chargés de recrutement, RRH, responsables formation',
        'Toute personne en charge du développement RH dans une PME, ETI ou start-up'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Connaissance de base des missions RH dans l’organisation'
      ],
      teachingMethods: [
        'Apports illustrés et concrets',
        'Mises en pratique sur outils sans installation',
        'Ateliers collaboratifs et co-développement',
        'Cas pratiques issus des problématiques réelles'
      ],
      evaluationMethods: [
        'Auto-évaluation des acquis en entrée/sortie',
        'Élaboration d’un mini plan d’action RH digitalisé',
        'Feuilles de présence',
        'Attestation de réalisation'
      ],
      
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Processus fluidifiés',
          description: 'Optimisez vos recrutements et intégrations avec des outils simples',
          icon: 'Users'
        },
        {
          title: 'Formation modernisée',
          description: 'Déployez une stratégie digitale inclusive et motivante',
          icon: 'GraduationCap'
        },
        {
          title: 'RH augmentées',
          description: 'Appuyez-vous sur l’IA et les outils numériques pour mieux piloter',
          icon: 'Brain'
        },
        {
          title: 'Plan d’action structuré',
          description: 'Repartez avec un plan RH digitalisé à 6 mois',
          icon: 'ClipboardList'
        }
      ]
    },
    {
      id: 'transition-numerique-tpepme',
      title: 'Transition numérique des TPE/PME : mode d’emploi',
      shortDescription: 'Boostez votre visibilité, optimisez vos process, développez vos ventes grâce au numérique',
      fullDescription: 'Aujourd’hui, digitaliser son entreprise ne relève plus du luxe mais d’une nécessité stratégique. Pour les TPE et PME, le numérique représente une opportunité immédiate de développement commercial, d’amélioration de la relation client, d’automatisation des tâches chronophages et de visibilité accrue. Cette formation vous aide à poser les bases d’une transition numérique structurée, avec des outils simples et adaptés à vos priorités.',
      slug: 'formation-transition-numerique-tpepme',
      category: 'Transformation numérique',
      image: '/images/Transnum.png', // ← Place cette image dans : C:\Users\julie\OneDrive - ACCERTIF\FORMAPRO BY ACCERTIF\COMMUNICATION\Site\Backup\zuma\public\images
      duration: '14h',
      formateur: '',
      prices: {
        individuel: { price: 'Dès 2140€ HT', label: '' },
        collectif: { price: 'Dès 1790€ HT', label: '' }
      },
      dates: {
        collectif: [
          
        ],
        individuel: [
          
        ]
      },
      cpfEligible: false,
      features: [
        'Plan d’action digital personnalisé',
        'Visibilité web renforcée',
        'Relation client optimisée',
        'Automatisation des tâches'
      ],
      objectives: [
        'Comprendre les leviers du numérique pour développer son activité',
        'Identifier les outils adaptés à sa taille d’entreprise',
        'Évaluer la maturité numérique de son entreprise',
        'Construire une feuille de route digitale claire et réaliste'
      ],
      program: [
        {
          title: 'Jour 1 — Pourquoi et comment amorcer sa transition numérique ?',
          items: [
            'Bénéfices immédiats du numérique pour TPE/PME',
            'Visibilité : réseaux sociaux, Google, site web',
            'Automatiser la gestion : devis, factures, relances, CRM',
            'Autodiagnostic de maturité numérique',
            'Cartographie des outils et priorités d’action'
          ]
        },
        {
          title: 'Jour 2 — Construire sa feuille de route numérique et passer à l’action',
          items: [
            'Définir ses priorités : visibilité, CRM, automatisation',
            'Choisir les bons outils pour chaque usage',
            'Structurer sa stratégie web et réseaux sociaux',
            'Optimiser sa présence locale (fiche Google)',
            'Formaliser une feuille de route sur 3–6 mois'
          ]
        }
      ],
      publicVise: [
        'Dirigeants de TPE/PME',
        'Responsables opérationnels',
        'Collaborateurs en charge de la communication, de la gestion ou du développement commercial'
      ],
      prerequis: [
        'Aucun prérequis technique',
        'Bonne connaissance de son activité, de son organisation et de ses clients'
      ],
      teachingMethods: [
        'Ateliers collaboratifs',
        'Cas concrets et témoignages d’entreprises',
        'Autodiagnostic de maturité numérique',
        'Exemples d’outils simples à mettre en œuvre',
        'Co-développement autour des projets des participants'
      ],
      evaluationMethods: [
        'Auto-évaluation des compétences en début et fin de session',
        'Élaboration d’un plan d’action individuel',
        'Attestation de fin de formation',
        'Feuilles de présence'
      ],
      
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Diagnostic numérique clair',
          description: 'Faites le point sur votre maturité digitale avec un autodiagnostic simple',
          icon: 'BarChart'
        },
        {
          title: 'Outils adaptés aux TPE',
          description: 'Découvrez des solutions simples, efficaces et peu coûteuses',
          icon: 'Tool'
        },
        {
          title: 'Visibilité renforcée',
          description: 'Optimisez votre présence en ligne pour attirer de nouveaux clients',
          icon: 'Globe'
        },
        {
          title: 'Feuille de route actionnable',
          description: 'Repartez avec un plan digital sur 3–6 mois adapté à vos priorités',
          icon: 'ClipboardList'
        }
      ]
    },
    
    
    
    // Vous pouvez continuer à ajouter d'autres formations ici
  ]
};

export default formationsConfig;
