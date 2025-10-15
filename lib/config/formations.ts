import { FormationsConfig } from './types';

/**
 * Configuration des formations
 * Ajoutez, modifiez ou supprimez des formations selon vos besoins
 */
const formationsConfig: FormationsConfig = {
  // Catégories de formations
  categories: [
    {
      id: 'Management',
      name: 'Management & Leadership',
      description: 'Développez vos compétences managériales et votre leadership',
      icon: 'Users'
    },
    {
      id: 'Communication',
      name: 'Communication',
      description: 'Améliorez votre communication et vos prises de parole',
      icon: 'MessageCircle'
    },
    {
      id: 'Développement professionnel',
      name: 'Développement professionnel',
      description: 'Développez votre potentiel et votre bien-être professionnel',
      icon: 'Smile'
    },
    {
      id: 'Sciences cognitives',
      name: 'Sciences cognitives',
      description: 'Comprenez et maîtrisez les mécanismes de votre cerveau',
      icon: 'Brain'
    }
  ],
  
  formations: [
    {
      id: 'communication-empathie',
      title: 'Améliorer sa communication et son empathie',
      shortDescription: 'Renforcez votre communication, vos prises de parole en public et votre écoute empathique pour gagner en impact, en sérénité et en qualité relationnelle.',
      fullDescription: 'Renforcez votre communication, vos prises de parole en public et votre écoute empathique pour gagner en impact, en sérénité et en qualité relationnelle.',
      slug: 'formation-communication-empathie',
      category: 'Communication',
      image: '/images/communication.png',
      duration: '7h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '1250€ HT', label: '' },
        collectif: { price: '1250€ HT', label: '' }
      },
      dates: {
        collectif: ["4/12/25 et 24/03/26"],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Communication améliorée',
        'Empathie développée',
        'Prise de parole en public',
        'Qualité relationnelle'
      ],
      objectives: [
        'Comprendre les mécanismes cognitifs et émotionnels de la communication',
        'Développer une communication claire, impactante et authentique',
        'Renforcer son empathie et sa compréhension des autres',
        'Gérer ses émotions et adapter sa communication en fonction des contextes',
        'Prendre la parole avec assurance et conviction'
      ],
      program: [
        {
          title: 'Comprendre les enjeux',
          items: [
            'Ce que les sciences cognitives nous apprennent sur la communication',
            'Définitions et dimensions de l\'empathie',
            'Apprendre à décoder et mobiliser l\'empathie',
            'Biais cognitifs et distorsions en communication'
          ]
        },
        {
          title: 'Connecter à votre situation spécifique',
          items: [
            'Auto-évaluation de votre pratique de la communication',
            'Focus sur le management empathique (Pour des managers)',
            'S\'adapter à son interlocuteur et au contexte pour maximiser l\'impact',
            'Eviter le stress et la confusion dans vos prises de parole, gérer les situations de crise'
          ]
        },
        {
          title: 'Passer à l\'action : communiquer avec fluidité et aisance',
          items: [
            'Construire un message clair, convaincant et émotionnellement engageant',
            'S\'adapter à son interlocuteur et au contexte pour maximiser l\'impact',
            'Gérer le trac et les blocages cognitifs en situation de prise de parole',
            'Etudes de cas et mises en pratique'
          ]
        }
      ],
      publicVise: [
        'Toute personne souhaitant améliorer ses performances ou son impact en matière de communication',
        'Professionnels ayant des fonctions de management, d\'encadrement ou de gestion de projets',
        'Professionnels du secteur de la formation ou de l’accompagnement'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Questionnaire préalable',
        'Test d’entrée, test de sortie, quiz en salle',
        'Feuilles de présence, questions orales, étude de cas pratique',
        'Formulaires d’évaluation post-formation',
        'Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Communication impactante',
          description: 'Gagnez en impact, en sérénité et en qualité relationnelle dans toutes vos interactions.',
          icon: 'MessageCircle'
        },
        {
          title: 'Empathie et écoute',
          description: 'Développez une écoute empathique et une meilleure compréhension des autres.',
          icon: 'Users'
        },
        {
          title: 'Prise de parole assurée',
          description: 'Prenez la parole en public avec confiance et authenticité.',
          icon: 'Mic'
        },
        {
          title: 'Gestion des émotions',
          description: 'Apprenez à gérer vos émotions et à adapter votre communication selon les contextes.',
          icon: 'Smile'
        }
      ]
    },
    {
      id: 'leadership-confiance',
      title: 'Cultiver son leadership et sa confiance en soi',
      shortDescription: 'Osez révéler votre plein potentiel en confiance, grâce à des approches éprouvées en neurosciences, lecture, intelligence émotionnelle et développement professionnel.',
      fullDescription: 'Osez révéler votre plein potentiel en confiance, grâce à des approches éprouvées en neurosciences, lecture, intelligence émotionnelle et développement professionnel.',
      slug: 'formation-leadership-confiance',
      category: 'Management & Leadership',
      image: '/images/leadership.png',
      duration: '14h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '2500€ HT', label: '' },
        collectif: { price: '2500€ HT', label: '' }
      },
      dates: {
        collectif: ["19 et 20/03/26"],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Leadership authentique',
        'Confiance en soi renforcée',
        'Décision améliorée',
        'Syndrome de l\'imposture dépassé'
      ],
      objectives: [
        'Comprendre les mécanismes cognitifs et émotionnels du leadership et de la confiance en soi',
        'Développer une posture de leadership authentique et affirmé',
        'Améliorer ses prises de décisions',
        'Déjouer le syndrome de l\'imposture et renforcer sa légitimité',
        'Mettre en place des stratégies durables pour ancrer la confiance en soi et l\'affirmation de soi'
      ],
      program: [
        {
          title: 'Comprendre',
          items: [
            'Sciences cognitives et confiance en soi : comment se construit la perception de légitimité ? Qu\'est-ce qui nourrit l\'assertivité ?',
            'Qu\'est-ce que le syndrome de l\'imposture ? Quels sont ses effets dans la vie professionnelle ?',
            'L\'impact du syndrome sur la carrière professionnelle'
          ]
        },
        {
          title: 'Connecter à sa situation',
          items: [
            'Identifier ses forces et ancrer une identité de leader',
            'Les croyances limitantes : étude de cas',
            'Les biais cognitifs : les décoder, les désamorcer',
            'Gérer les émotions et le regard des autres',
            'Oser être soi sans surjouer'
          ]
        },
        {
          title: 'S\'engager et passer à l\'action pour prendre confiance durablement',
          items: [
            'Construire son assertivité et développer son propre impact',
            'Dépasser ses blocages grâce aux bonnes stratégies',
            'Se constituer sa boite à outils pour pérenniser les apprentissages et réussir à venir à bout du syndrome de l\'imposture'
          ]
        }
      ],
      publicVise: [
        'Professionnels',
        'Managers',
        'Formateurs qui souhaitent découvrir nos outils pour leur pratique',
        'Particuliers en quête de réassurance, de clarté et de sérénité'
      ],
      prerequis: [
        'Aucun pré-requis n\'est indispensable'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Leadership authentique',
          description: 'Développez une posture de leadership authentique et affirmé basée sur vos forces.',
          icon: 'Crown'
        },
        {
          title: 'Confiance durable',
          description: 'Mettez en place des stratégies durables pour ancrer la confiance en soi.',
          icon: 'Shield'
        },
        {
          title: 'Décision améliorée',
          description: 'Améliorez vos prises de décisions grâce aux sciences cognitives.',
          icon: 'Target'
        },
        {
          title: 'Syndrome de l\'imposture dépassé',
          description: 'Déjouez le syndrome de l\'imposture et renforcez votre légitimité.',
          icon: 'Zap'
        }
      ]
    },
    {
      id: 'biais-cognitifs',
      title: 'Décoder les biais cognitifs pour mieux travailler',
      shortDescription: 'Déjouez les pièges de votre cerveau ! Apprenez à identifier et neutraliser les biais cognitifs pour gagner en sérénité et en performance.',
      fullDescription: 'Les biais cognitifs influencent vos décisions, faussent vos jugements et génèrent du stress. Apprenez à les identifier et à les neutraliser grâce à des outils concrets pour gagner en sérénité et en performance.',
      slug: 'formation-biais-cognitifs',
      category: 'Sciences cognitives',
      image: '/images/intelligence.png',
      duration: '7h',
      formateur: 'Céline Mas (avec la contribution d\'Alizon Pergher, PHD)',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '1250€ HT', label: '' },
        collectif: { price: '1250€ HT', label: '' }
      },
      dates: {
        collectif: ["14/04 et 11/06/2026"],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Décodage des biais cognitifs',
        'Outils anti-biais',
        'Décision plus rationnelle',
        'Gestion de projet équitable'
      ],
      objectives: [
        'Comprendre le fonctionnement des biais cognitifs et leur impact sur la prise de décision',
        'Appréhender les différents types de biais cognitifs et leurs exemples courants',
        'Limiter l’influence des biais cognitifs dans la gestion des équipes et la prise de décision',
        'Favoriser une gestion de projet plus équitable et efficace en réduisant les biais inconscients',
        'Sensibiliser aux biais cognitifs spécifiques au domaine du management et apprendre à les gérer'
      ],
      program: [
        {
          title: 'Comprendre',
          items: [
            'Comment fonctionnent les biais cognitifs ?',
            'Pourquoi notre cerveau privilégie-t-il certaines décisions irrationnelles ?',
            'Impact des biais cognitifs au travail : recrutement, évaluation, négociation, gestion des conflits'
          ]
        },
        {
          title: 'Connecter à votre situation professionnelle',
          items: [
            'Expérimentation de biais à travers des illusions cognitives et des scénarios de prise de décision',
            'Identifier les biais les plus courants dans une organisation : confirmation, ancrage, disponibilité, surconfiance, halo, aversion à la perte',
            'Les liens entre biais cognitifs et management',
            'Auto-évaluation et prise de conscience de ses propres biais'
          ]
        },
        {
          title: 'Passer à l’action : stratégies et outils pour limiter l’impact des biais',
          items: [
            'Techniques pour ralentir la prise de décision et activer la pensée analytique',
            'Pratiques de "checklist cognitive" pour des décisions plus rationnelles',
            'Boite à outils anti-biais',
            'Un plan d’action personnalisé'
          ]
        }
      ],
      publicVise: [
        'Professionnels ayant des fonctions de management, d’encadrement ou de gestion de projets',
        'Professionnels du secteur de la formation ou de l’accompagnement',
        'Tous types de particuliers souhaitant découvrir et approfondir sa connaissance des biais cognitifs'
      ],
      prerequis: [
        'Pour les professionnels, une première expérience managériale, de gestion de projet ou d’accompagnement est recommandée.'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d’entrée, test de sortie, quiz en salle',
        'Suivi de l’exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d’évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Décodage des biais',
          description: 'Comprenez et limitez l’influence des biais cognitifs dans vos décisions.',
          icon: 'Brain'
        },
        {
          title: 'Outils anti-biais',
          description: 'Repartez avec une boîte à outils concrète pour des décisions plus rationnelles.',
          icon: 'Tool'
        },
        {
          title: 'Gestion de projet équitable',
          description: 'Favorisez l’équité et l’efficacité dans vos projets et vos équipes.',
          icon: 'Users'
        },
        {
          title: 'Sérénité professionnelle',
          description: 'Gagnez en sérénité et en performance en neutralisant les pièges de votre cerveau.',
          icon: 'Smile'
        }
      ]
    },    
    {
      id: 'intelligence-emotionnelle',
      title: 'Développer son intelligence émotionnelle',
      shortDescription: 'Faites de l\'intelligence émotionnelle votre meilleur allié pour prendre les bonnes décisions, motiver les autres et gérer avec sérénité les défis du management.',
      fullDescription: 'Faites de l\'intelligence émotionnelle votre meilleur allié pour prendre les bonnes décisions, motiver les autres et gérer avec sérénité les défis du management.',
      slug: 'formation-intelligence-emotionnelle',
      category: 'Développement professionnel',
      image: '/images/biais.png',
      duration: '7h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '1250€ HT', label: '' },
        collectif: { price: '1250€ HT', label: '' }
      },
      dates: {
        collectif: ["27/11/25 et 22/01/26"],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Maîtrise des émotions',
        'Décision améliorée',
        'Management serein',
        'Bien-être au travail'
      ],
      objectives: [
        'Mieux identifier les différentes émotions dans notre quotidien professionnel',
        'Comprendre le rôle et les conséquences de l\'intelligence émotionnelle dans le travail et les prises de décision',
        'Mieux utiliser l\'intelligence émotionnelle au quotidien dans le management ou la gestion de projet',
        'Améliorer votre bien-être et celui de vos collègues par une plus grande maîtrise de vos émotions, donner des clés pour aborder plus sereinement les situations de stress',
        'Découvrir des techniques et outils innovants pour accompagner des personnes ou des groupes dans des périodes charnières de leurs parcours professionnel'
      ],
      program: [
        {
          title: 'Comprendre les bases de l\'intelligence émotionnelle',
          items: [
            'Qu\'est-ce qu\'une émotion ? Qu\'est-ce que l\'intelligence émotionnelle ?',
            'À quoi servent-elles dans la vie professionnelle ?',
            'Les bases cognitives des émotions : d\'où viennent-elles ? Comment fonctionne notre cerveau ?',
            'Rôle des biais cognitifs',
            'Effets de l\'intelligence émotionnelle sur le management'
          ]
        },
        {
          title: 'Connecter',
          items: [
            'Les 6 émotions fondamentales : particularités, bénéfices, limites',
            'Les émotions au quotidien vs. les émotions dans les situations clés ou de crise',
            'Les principaux enjeux : maîtrise de ses émotions et décodage de celles des autres',
            'Impact de l\'intelligence émotionnelle sur la prise de décision, notamment en contexte interculturel'
          ]
        },
        {
          title: 'S\'engager - Passer à l\'action',
          items: [
            'Les étapes et outils clés d\'une méthode efficace pour cultiver son intelligence émotionnelle',
            'Pratiques : comment gérer des cas de crise et des blocages ?',
            'Plan d\'action personnalisé : les leviers les plus stratégiques pour faire des émotions des alliées dans la vie professionnelle'
          ]
        }
      ],
      publicVise: [
        'Managers',
        'Non managers désireux de progresser dans la maîtrise de leurs émotions au travail',
        'Professionnels du secteur de la formation ou de l\'accompagnement',
        'Toute personne souhaitant améliorer son intelligence émotionnelle au quotidien'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Maîtrise des émotions',
          description: 'Apprenez à identifier et maîtriser vos émotions pour une meilleure performance professionnelle.',
          icon: 'Heart'
        },
        {
          title: 'Décision améliorée',
          description: 'Utilisez l\'intelligence émotionnelle pour prendre de meilleures décisions au quotidien.',
          icon: 'Target'
        },
        {
          title: 'Management serein',
          description: 'Gérez avec sérénité les défis du management et motivez vos équipes.',
          icon: 'Users'
        },
        {
          title: 'Bien-être au travail',
          description: 'Améliorez votre bien-être et celui de vos collègues en maîtrisant vos émotions.',
          icon: 'Smile'
        }
      ]
    },
    {
      id: 'courage-managerial',
      title: 'Le courage managérial : oser décider, agir et affirmer son leadership',
      shortDescription: 'Oser affirmer ses décisions, gérer les conflits avec justesse et incarner un leadership authentique : engager vos équipes et assumer pleinement vos responsabilités.',
      fullDescription: 'Oser affirmer ses décisions, gérer les conflits avec justesse et incarner un leadership authentique : développez votre courage managérial pour engager vos équipes et assumer pleinement vos responsabilités.',
      slug: 'formation-courage-managerial',
      category: 'Management & Leadership',
      image: '/images/courage.png',
      duration: '7h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '1250€ HT', label: '' },
        collectif: { price: '1250€ HT', label: '' }
      },
      dates: {
        collectif: ["17/02/2026"],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Courage managérial',
        'Décision assumée',
        'Gestion des conflits',
        'Leadership authentique'
      ],
      objectives: [
        'Comprendre les enjeux et les mécanismes du courage managérial, Identifier les freins psychologiques, émotionnels et organisationnels',
        'Développer l\'assertivité et l\'affirmation de soi en tant que manager',
        'Prendre des décisions difficiles et les assumer avec sérénité',
        'Gérer les conflits et les situations délicates avec courage et diplomatie',
        'S\'engager dans une posture de leader inspirant et responsable'
      ],
      program: [
        {
          title: 'Comprendre les fondamentaux du sujet',
          items: [
            'Qu\'est-ce que le courage managérial ? Y-a-t-il plusieurs styles de courage ?',
            'Comment est-il "fabriqué" par notre cerveau ? A quoi sert-il dans le management ? Exemples de figures de courage',
            'D\'où vient la peur ? Comment la maîtriser ?'
          ]
        },
        {
          title: 'Courage et management',
          items: [
            'A quoi sert le courage dans la prise de décision managériale ? Comment l\'utiliser ?',
            'Que sont les biais cognitifs ? Quels effets ont-ils sur le courage ?',
            'Comment faire un bon feedback : clair, juste, précis, sans heurter ?',
            'Poser un cadre clair et maintenir une posture managériale alignée',
            'Comment développer le courage chez les autres ?'
          ]
        },
        {
          title: 'Passer à l\'action en cultivant le courage managérial dans la durée',
          items: [
            'Gérer les conflits et recadrer avec courage',
            'Exprimer ses convictions et faire face à la pression',
            'Inspirer et mobiliser par un leadership courageux',
            'Bâtir un plan d\'action personnalisé et des rituels d\'entretien'
          ]
        }
      ],
      publicVise: [
        'Managers novices ou expérimentés',
        'Professionnels ayant des fonctions de gestion de projets',
        'Professionnels du secteur de la formation ou de l\'accompagnement'
      ],
      prerequis: [
        'Une première expérience managériale, de gestion de projet ou d\'accompagnement est recommandée'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Courage managérial',
          description: 'Développez votre courage managérial pour engager vos équipes et assumer vos responsabilités.',
          icon: 'Shield'
        },
        {
          title: 'Décision assumée',
          description: 'Prenez des décisions difficiles et assumez-les avec sérénité.',
          icon: 'Target'
        },
        {
          title: 'Gestion des conflits',
          description: 'Gérez les conflits et les situations délicates avec courage et diplomatie.',
          icon: 'Users'
        },
        {
          title: 'Leadership authentique',
          description: 'Incarnez un leadership authentique et inspirez vos équipes.',
          icon: 'Crown'
        }
      ]
    },
    {
      id: 'gestion-stress-burnout',
      title: 'Mieux gérer son stress, prévenir le burnout',
      shortDescription: 'Libérez-vous du stress avant qu\'il ne vous épuise : adoptez des stratégies innovantes pour regagner en énergie, prévenir le burnout et cultiver un équilibre dans la durée !',
      fullDescription: 'Libérez-vous du stress avant qu\'il ne vous épuise : adoptez des stratégies innovantes pour regagner en énergie, prévenir le burnout et cultiver un équilibre dans la durée !',
      slug: 'formation-gestion-stress-burnout',
      category: 'Développement professionnel',
      image: '/images/stess.png',
      duration: '7h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '1250€ HT', label: '' },
        collectif: { price: '1250€ HT', label: '' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Gestion du stress',
        'Prévention du burnout',
        'Équilibre professionnel',
        'Techniques de relaxation'
      ],
      objectives: [
        'Comprendre les mécanismes cognitifs du stress et du burnout',
        'Appliquer des techniques de gestion du stress adaptées à son environnement professionnel',
        'Identifier les signes avant-coureurs du burnout, comprendre les causes profondes',
        'Mettre en place des actions de prévention du burnout en milieu professionnel',
        'Explorer des outils issus des sciences cognitives, de la fiction et de la créativité pour prendre soin de soi'
      ],
      program: [
        {
          title: 'Comprendre',
          items: [
            'Les mécanismes cognitifs du stress et du burnout',
            'Les déclencheurs',
            'Les situations critiques',
            'Les différents types de stress'
          ]
        },
        {
          title: 'Connecter à votre situation professionnelle',
          items: [
            'Faire votre auto-diagnostic',
            'Identifier les facteurs agravants et les éléments rééquilibrants',
            'Connecter l\'intelligence émotionnelle à la maîtrise du stress',
            'Burnout et management'
          ]
        },
        {
          title: 'Passer à l\'action pour une meilleure gestion du stress et la prévention du burnout',
          items: [
            'Construire une routine anti-stress',
            'Étapes clés d\'une méthode efficace pour faire face au burnout',
            'Plan d\'action personnalisé fondé sur la lecture, les sciences cognitives, la relaxation'
          ]
        }
      ],
      publicVise: [
        'Professionnels ayant des fonctions de management, d\'encadrement ou de gestion de projets',
        'Professionnels du secteur de la formation ou de l\'accompagnement',
        'Tous types de particuliers rencontrant des difficultés face au stress'
      ],
      prerequis: [
        'Pour les professionnels, une première expérience managériale, de gestion de projet ou d\'accompagnement est recommandée'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible sous 15 jours après inscription',
        'Adaptations possibles sur demande pour les personnes en situation de handicap',
        'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
      ],
      reasons: [
        {
          title: 'Gestion du stress',
          description: 'Apprenez des techniques innovantes pour gérer votre stress au quotidien.',
          icon: 'Zap'
        },
        {
          title: 'Prévention du burnout',
          description: 'Identifiez les signes avant-coureurs et prévenez l\'épuisement professionnel.',
          icon: 'Shield'
        },
        {
          title: 'Équilibre professionnel',
          description: 'Cultivez un équilibre durable entre vie professionnelle et personnelle.',
          icon: 'Balance'
        },
        {
          title: 'Techniques de relaxation',
          description: 'Découvrez des outils issus des sciences cognitives et de la créativité.',
          icon: 'Heart'
        }
      ]
    },
    {
      id: 'egalite-femmes-hommes',
      title: 'Égalité femmes-hommes : comprendre les enjeux, lever les freins, agir concrètement',
      shortDescription: 'Brisez les inégalités et agissez pour une organisation plus équitable ! En une journée, identifiez les freins, dépassez les stéréotypes et adoptez des actions concrètes en ligne avec les tendances.',
      fullDescription: 'Brisez les inégalités et agissez pour une organisation plus équitable ! En une journée, identifiez les freins, dépassez les stéréotypes et adoptez des actions concrètes en ligne avec les tendances. Formation proposée en format présentiel ; également disponible en format 100% distanciel, mixte ou format conférence. Formation intra sur devis.',
      slug: 'formation-egalite-femmes-hommes',
      category: 'Développement professionnel',
      image: '/images/egalite.png',
      duration: '14h',
      formateur: 'Céline Mas (avec la contribution d\'Alizon Pergher, PHD)',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '2500€ HT', label: '' },
        collectif: { price: '2500€ HT', label: '' }
      },
      dates: {
        collectif: ["11 et 12/02/26"],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Compréhension des enjeux d\'égalité',
        'Déconstruction des stéréotypes',
        'Actions concrètes d\'équité',
        'Culture d\'égalité'
      ],
      objectives: [
        'Comprendre les enjeux de l\'égalité professionnelle femmes-hommes',
        'Identifier les impacts des inégalités de genre sur la performance, l\'engagement et le climat de travail en entreprise',
        'Reconnaître et déconstruire les stéréotypes de genre et les biais inconscients',
        'Analyser les freins structurels à l\'égalité et les leviers d\'action',
        'Adopter des pratiques managériales et RH favorisant l\'équité et l\'inclusion',
        'S\'engager activement dans la promotion d\'une culture d\'égalité dans votre organisation'
      ],
      program: [
        {
          title: 'Jour 1 - Bilan et perspectives',
          items: [
            'L\'égalité professionnelle : où en sommes-nous ?',
            'Définition et cadre juridique de l\'égalité femmes-hommes',
            'Chiffres clés : écarts salariaux, accès aux responsabilités, stéréotypes',
            'Conséquences des inégalités sur la performance et le climat de travail',
            'Les biais inconscients et les stéréotypes de genre : auto-évaluation et mises en pratique'
          ]
        },
        {
          title: 'Jour 1 - Connecter à la situation des apprenants',
          items: [
            'Identifier les freins à l\'égalité et les leviers d\'action en entreprise : obstacles structurels, enjeux spécifiques',
            'Bonnes pratiques et solutions éprouvées',
            'Diagnostic collectif des freins et des leviers d\'action dans son entreprise',
            'Adopter une communication et un management inclusifs : langage, climat de travail et techniques pour encourager l\'égalité',
            'Soft skills égalité : au quotidien, comment faire ?'
          ]
        },
        {
          title: 'Jour 2 - Passer à l\'action pour plus d\'impact',
          items: [
            'Benchmarks nationaux et internationaux',
            'Construire une culture d\'égalité au sein de son organisation',
            'Mettre en place des stratégies cognitives et comportementales pour changer la donne',
            'Réagir de façon appropriée face aux résistances et aux comportements discriminants',
            'Engagement personnel : mon plan d\'action égalité en 3 actions clés'
          ]
        }
      ],
      publicVise: [
        'Managers D&I, responsables RSE, responsables RH',
        'Professionnels ayant des fonctions de management, d\'encadrement ou de gestion de projets',
        'Professionnels du secteur de la formation ou de l\'accompagnement',
        'Professionnels du secteur philanthropique, dont les fondations',
        'Particuliers ayant une appétence pour le sujet'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible dans un délai de 2 semaines, aménageable sur demande à un public en situation de handicap',
        'Conformément à la réglementation (loi du 11 Février 2005 et Articles D.5211-1 et suivants du code du travail)',
        'LOVE FOR LIVRES s\'engage à répondre aux besoins particuliers des stagiaires en situation de handicap',
        'Mobilisation possible de compétences externes (Centre de Ressources Formation Handicap, P.A.S AGEFIPH-FIPHFP)'
      ],
      reasons: [
        {
          title: 'Compréhension des enjeux',
          description: 'Comprenez les enjeux de l\'égalité professionnelle et ses impacts sur la performance.',
          icon: 'Users'
        },
        {
          title: 'Déconstruction des stéréotypes',
          description: 'Reconnaissez et déconstruisez les stéréotypes de genre et les biais inconscients.',
          icon: 'Brain'
        },
        {
          title: 'Actions concrètes',
          description: 'Adoptez des pratiques managériales et RH favorisant l\'équité et l\'inclusion.',
          icon: 'Target'
        },
        {
          title: 'Culture d\'égalité',
          description: 'Construisez une culture d\'égalité durable dans votre organisation.',
          icon: 'Heart'
        }
      ]
    },
    {
      id: 'serenite-efficacite',
      title: 'Gagner en sérénité pour optimiser son efficacité',
      shortDescription: 'Un programme innovant, théorique et pratique, alliant neurosciences, gestion émotionnelle et outils concrets pour un équilibre durable.',
      fullDescription: 'Un programme innovant, théorique et pratique, alliant neurosciences, gestion émotionnelle et outils concrets pour un équilibre durable. Formation proposée en format présentiel ; également disponible en format 100% distanciel, mixte ou format conférence. Formation intra sur devis.',
      slug: 'formation-serenite-efficacite',
      category: 'Développement professionnel',
      image: '/images/serenite.png',
      duration: '14h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '2500€ HT', label: '' },
        collectif: { price: '2500€ HT', label: '' }
      },
      dates: {
        collectif: ["21 et 22/05/26"],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Gestion du stress',
        'Sérénité au travail',
        'Efficacité optimisée',
        'Équilibre durable'
      ],
      objectives: [
        'Comprendre le stress et la sérénité',
        'Identifier les sources de stress au travail',
        'Maîtriser ses émotions et réduire les effets du stress',
        'Renforcer la collaboration, la prise de décision, et instaurer un climat serein au travail',
        'Améliorer sa sérénité grâce à des stratégies cognitives et techniques pratiques'
      ],
      program: [
        {
          title: '1 : Comprendre et connecter',
          items: [
            'Qu\'est-ce que le stress ? Comment le stress est-il fabriqué par notre cerveau ? Quels sont ses effets ?',
            'Types et mécanismes du stress, répercussions sur le cerveau et le bien-être',
            'Quiz, échanges, études de cas en sciences cognitives',
            'Identifier les effets du stress chez des personnages'
          ]
        },
        {
          title: '2 : Sérénité et performance',
          items: [
            'Les effets de la sérénité sur la collaboration, la prise de décision et l\'efficacité',
            'Lien entre calme intérieur et efficacité professionnelle',
            'Intelligence émotionnelle',
            'Ateliers : Le Scan émotionnel, échanges, lectures, cas : pratique du mode automatique du cerveau'
          ]
        },
        {
          title: '3 : S\'engager et passer à l\'action',
          items: [
            'Techniques pour cultiver la sérénité',
            'Outils pratiques de gestion du stress, techniques d\'écoute active, cohérence cardiaque',
            'Reprise des apprentissages du jour 1, positionnement grégaire, pratiques de l\'écoute active',
            'Savoir trouver sa place (contribution vs. responsabilité), l\'arbre aux personnages ou le schéma narratif de Greimas',
            'La carte de l\'empathie / le oui, non, oui',
            'Méthodes et communication, gestion des conflits, retour au calme après un stress'
          ]
        }
      ],
      publicVise: [
        'Toutes personnes souhaitant améliorer la gestion du stress au service de plus de sérénité et d\'efficacité au travail',
        'Managers'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible dans un délai de 2 semaines, aménageable sur demande à un public en situation de handicap',
        'Conformément à la réglementation (loi du 11 Février 2005 et Articles D.5211-1 et suivants du code du travail)',
        'LOVE FOR LIVRES s\'engage à répondre aux besoins particuliers des stagiaires en situation de handicap',
        'Mobilisation possible de compétences externes (Centre de Ressources Formation Handicap, P.A.S AGEFIPH-FIPHFP)'
      ],
      reasons: [
        {
          title: 'Gestion du stress',
          description: 'Comprenez les mécanismes du stress et apprenez à le gérer efficacement.',
          icon: 'Zap'
        },
        {
          title: 'Sérénité au travail',
          description: 'Cultivez la sérénité pour améliorer votre bien-être professionnel.',
          icon: 'Heart'
        },
        {
          title: 'Efficacité optimisée',
          description: 'Optimisez votre efficacité grâce à un équilibre émotionnel durable.',
          icon: 'Target'
        },
        {
          title: 'Équilibre durable',
          description: 'Développez des stratégies cognitives et techniques pratiques pour un équilibre durable.',
          icon: 'Balance'
        }
      ]
    },
    {
      id: 'diversite-inclusion',
      title: 'La diversité et l\'inclusion (D&I) : Comprendre, agir, transformer',
      shortDescription: 'Faites de la diversité et de l\'inclusion un levier de performance ! En 2 jours, identifiez les biais inconscients, adoptez des pratiques inclusives et passez à l\'action pour transformer votre organisation.',
      fullDescription: 'Faites de la diversité et de l\'inclusion un levier de performance ! En 2 jours, identifiez les biais inconscients, adoptez des pratiques inclusives et passez à l\'action pour transformer votre organisation. Formation proposée en format présentiel ; également disponible en format 100% distanciel, mixte ou format conférence. Formation intra sur devis.',
      slug: 'formation-diversite-inclusion',
      category: 'Développement professionnel',
      image: '/images/diversite.png',
      duration: '14h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '2500€ HT', label: '' },
        collectif: { price: '2500€ HT', label: '' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Compréhension des enjeux D&I',
        'Déconstruction des biais',
        'Management inclusif',
        'Transformation organisationnelle'
      ],
      objectives: [
        'Comprendre les enjeux de la diversité et de l\'inclusion en entreprise',
        'Reconnaître et déconstruire les biais inconscients',
        'Adopter une communication et un management inclusifs',
        'S\'engager activement dans une démarche D&I durable'
      ],
      program: [
        {
          title: 'Jour 1 - Comprendre les enjeux',
          items: [
            'Pourquoi la diversité et l\'inclusion sont essentielles ?',
            'Définitions et concepts clés : diversité, inclusion, équité, appartenance',
            'Impact de la D&I sur la performance, l\'innovation et la marque employeur'
          ]
        },
        {
          title: 'Jour 1 - Connecter aux besoins des apprenants',
          items: [
            'Développer une communication et un management inclusifs',
            'Posture du manager inclusif : écoute active, équité et reconnaissance',
            'Cultiver l\'empathie et l\'intelligence émotionnelle pour favoriser l\'inclusion',
            'Gérer les résistances et favoriser un dialogue constructif'
          ]
        },
        {
          title: 'Jour 2 - Passer à l\'action pour transformer',
          items: [
            'Benchmarks nationaux et internationaux',
            'Construire une culture d\'inclusion au sein de son organisation',
            'Développer des stratégies inclusives adaptées à son rôle : gestion des talents, management quotidien, favoriser l\'engagement et l\'appartenance',
            'Anticiper et répondre aux situations de discrimination et d\'exclusion',
            'Engagement personnel : Mon plan d\'action inclusif en 3 actions clés'
          ]
        }
      ],
      publicVise: [
        'Managers D&I, responsables RSE, responsables RH',
        'Professionnels ayant des fonctions de management, d\'encadrement ou de gestion de projets',
        'Professionnels du secteur de la formation ou de l\'accompagnement',
        'Professionnels du secteur philanthropique, dont les fondations',
        'Particuliers ayant une appétence pour le sujet'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation accessible dans un délai de 2 semaines, aménageable sur demande à un public en situation de handicap',
        'Conformément à la réglementation (loi du 11 Février 2005 et Articles D.5211-1 et suivants du code du travail)',
        'LOVE FOR LIVRES s\'engage à répondre aux besoins particuliers des stagiaires en situation de handicap',
        'Mobilisation possible de compétences externes (Centre de Ressources Formation Handicap, P.A.S AGEFIPH-FIPHFP)'
      ],
      reasons: [
        {
          title: 'Compréhension des enjeux D&I',
          description: 'Comprenez les enjeux de la diversité et de l\'inclusion en entreprise.',
          icon: 'Users'
        },
        {
          title: 'Déconstruction des biais',
          description: 'Reconnaissez et déconstruisez les biais inconscients pour une meilleure équité.',
          icon: 'Brain'
        },
        {
          title: 'Management inclusif',
          description: 'Adoptez une communication et un management inclusifs au quotidien.',
          icon: 'Heart'
        },
        {
          title: 'Transformation organisationnelle',
          description: 'Transformez votre organisation avec une démarche D&I durable.',
          icon: 'Target'
        }
      ]
    },
    {
      id: 'incertitude-eco-anxiete',
      title: 'Savoir faire face à l\'incertitude et à l\'éco-anxiété',
      shortDescription: 'Apprenez à naviguer sereinement dans l\'incertitude et à transformer votre éco-anxiété en moteur d\'action positive grâce à des stratégies concrètes pour retrouver sérénité et engagement.',
      fullDescription: 'Apprenez à naviguer sereinement dans l\'incertitude et à transformer votre éco-anxiété en moteur d\'action positive grâce à des stratégies concrètes pour retrouver sérénité et engagement. Formation proposée en format présentiel ; également disponible en 100% distanciel, mixte ou format conférence. Formation intra sur devis.',
      slug: 'formation-incertitude-eco-anxiete',
      category: 'Développement professionnel',
      image: '/images/incertitude.png',
      duration: '7h',
      formateur: 'Céline Mas',
      formationType: 'non-certifiante',
      prices: {
        individuel: { price: '1250€ HT', label: '' },
        collectif: { price: '1250€ HT', label: '' }
      },
      dates: {
        collectif: [],
        individuel: []
      },
      cpfEligible: false,
      features: [
        'Gestion de l\'incertitude',
        'Transformation de l\'éco-anxiété',
        'Régulation émotionnelle',
        'Action constructive'
      ],
      objectives: [
        'Identifier les processus cognitifs et émotionnels impliqués dans la gestion de l\'incertitude et du stress environnemental',
        'Analyser l\'impact de l\'incertitude sur la prise de décision et le bien-être psychologique',
        'Expérimenter des techniques de régulation émotionnelle et cognitive',
        'Mettre en place des stratégies d\'adaptation pour transformer l\'anxiété en action constructive'
      ],
      program: [
        {
          title: 'Comprendre',
          items: [
            'Neurosciences et psychologie de l\'incertitude',
            'Analyser l\'éco-anxiété : un stress unique',
            'Les impacts physiologiques et émotionnels de l\'incertitude et de l\'éco-anxiété'
          ]
        },
        {
          title: 'Connecter à son rôle professionnel ou sa situation',
          items: [
            'Explorer son rapport personnel à l\'incertitude et à l\'engagement',
            'Transformer l\'éco-anxiété en moteur d\'action'
          ]
        },
        {
          title: 'S\'engager : trouver des solutions adaptées à soi et à son environnement',
          items: [
            'Les rituels et outils clés pour vous aider à mieux vivre ces périodes d\'incertitude',
            'Méthodes de gestion de l\'éco-anxiété',
            'Plan d\'action personnalisé : les leviers les plus stratégiques pour vous accompagner'
          ]
        }
      ],
      publicVise: [
        'Managers',
        'Professionnels du secteur de la formation ou de l\'accompagnement',
        'Experts techniques',
        'Toute personne, particulier ou professionnel, souhaitant se former sur la question de l\'incertitude et l\'appréhension de l\'éco-anxiété'
      ],
      prerequis: [
        'Aucun'
      ],
      teachingMethods: [
        'Pédagogie active',
        'Mise en situation',
        'Jeux de rôle',
        'Lectures et écriture guidée',
        'Visuels, études de cas, documents théoriques en sciences cognitives'
      ],
      evaluationMethods: [
        'Analyse des besoins : Questionnaire préalable',
        'Évaluation des acquis : Test d\'entrée, test de sortie, quiz en salle',
        'Suivi de l\'exécution : Feuilles de présence, questions orales, étude de cas pratique',
        'Feedback et satisfaction : Formulaires d\'évaluation post-formation',
        'Attestation de formation : Certificat de réalisation remis en fin de formation'
      ],
      accessibility: [
        'Formation présentielle, également adaptable en distanciel',
        'Formation accessible dans un délai de 2 semaines, aménageable sur demande à un public en situation de handicap',
        'Conformément à la réglementation (loi du 11 Février 2005 et Articles D.5211-1 et suivants du code du travail)',
        'LOVE FOR LIVRES s\'engage à répondre aux besoins particuliers des stagiaires en situation de handicap',
        'Mobilisation possible de compétences externes (Centre de Ressources Formation Handicap, P.A.S AGEFIPH-FIPHFP)'
      ],
      reasons: [
        {
          title: 'Gestion de l\'incertitude',
          description: 'Apprenez à naviguer sereinement dans l\'incertitude grâce aux neurosciences.',
          icon: 'Shield'
        },
        {
          title: 'Transformation de l\'éco-anxiété',
          description: 'Transformez votre éco-anxiété en moteur d\'action positive.',
          icon: 'Zap'
        },
        {
          title: 'Régulation émotionnelle',
          description: 'Expérimentez des techniques de régulation émotionnelle et cognitive.',
          icon: 'Heart'
        },
        {
          title: 'Action constructive',
          description: 'Mettez en place des stratégies d\'adaptation pour une action constructive.',
          icon: 'Target'
        }
      ]
    }
    
    // Vous pouvez continuer à ajouter d'autres formations ici
  ]
};

export default formationsConfig;
