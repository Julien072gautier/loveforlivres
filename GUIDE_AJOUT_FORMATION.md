# Guide pratique : Ajouter une nouvelle formation

Ce guide vous explique pas à pas comment ajouter une nouvelle formation au site.

## 1. Éditer le fichier de configuration des formations

Ouvrez le fichier `src/config/formations.ts` et ajoutez une nouvelle formation à la liste `formations` :

```typescript
formations: [
  // Formations existantes...
  
  // Votre nouvelle formation
  {
    id: 'nouvelle-formation',              // Identifiant unique de la formation
    title: 'Titre de votre formation',     // Titre affiché
    shortDescription: 'Description courte qui apparaîtra dans les listes et cartes',
    fullDescription: 'Description complète qui apparaîtra sur la page détaillée',
    slug: 'formation-nouvelle',            // URL : /formation-nouvelle
    category: 'categorie-id',              // ID d'une catégorie existante
    image: '/images/formations/votre-image.jpg',
    duration: '21h',                       // Durée de la formation
    prices: {
      individuel: { 
        price: '1 500€*', 
        label: 'Éligible CPF' 
      },
      collectif: { 
        price: '950€*', 
        label: 'Éligible CPF' 
      }
    },
    cpfEligible: true,                     // La formation est-elle éligible au CPF ?
    features: [
      'Caractéristique 1 de la formation',
      'Caractéristique 2 de la formation',
      'Caractéristique 3 de la formation'
    ],
    certifications: [
      'Nom de la certification',
      'Éventuellement une autre certification'
    ],
    objectives: [
      'Objectif pédagogique 1',
      'Objectif pédagogique 2',
      'Objectif pédagogique 3',
      'Objectif pédagogique 4'
    ],
    program: [
      {
        title: 'Module 1 : Introduction',
        items: [
          'Contenu du module 1 - point 1',
          'Contenu du module 1 - point 2',
          'Contenu du module 1 - point 3'
        ]
      },
      {
        title: 'Module 2 : Approfondissement',
        items: [
          'Contenu du module 2 - point 1',
          'Contenu du module 2 - point 2',
          'Contenu du module 2 - point 3'
        ]
      },
      {
        title: 'Module 3 : Mise en pratique',
        items: [
          'Contenu du module 3 - point 1',
          'Contenu du module 3 - point 2',
          'Contenu du module 3 - point 3'
        ]
      }
    ]
  }
]
```

## 2. Ajouter une nouvelle catégorie (si nécessaire)

Si votre formation appartient à une nouvelle catégorie, ajoutez d'abord cette catégorie :

```typescript
categories: [
  // Catégories existantes...
  
  // Votre nouvelle catégorie
  {
    id: 'categorie-id',                // Identifiant unique de la catégorie
    name: 'Nom de la catégorie',       // Nom affiché
    description: 'Description de la catégorie qui sera affichée sur la page des formations',
    icon: 'MessageSquare'              // Icône à utiliser (voir liste ci-dessous)
  }
]
```

### Icônes disponibles pour les catégories

Utilisez l'une des icônes suivantes :

- `MessageSquare` : Communication, messages
- `Brain` : Intelligence artificielle, apprentissage
- `Users` : Management, travail d'équipe
- `Globe` : Langues, international
- `Hand` : Langues des signes, accessibilité
- `Laptop` : Informatique, développement
- `Star` : Excellence, performance
- `Target` : Objectifs, stratégie
- `Clock` : Gestion du temps
- `Award` : Certifications, récompenses
- `CheckCircle` : Validation, accomplissement
- `ArrowRight` : Direction, progression
- `Calendar` : Planning, organisation
- `Tag` : Marketing, commerce
- `BookOpen` : Formation, éducation

Pour les formations de langue, vous pouvez utiliser directement un emoji drapeau :
`🇫🇷`, `🇬🇧`, `🇪🇸`, `🇮🇹`, `🇩🇪`, etc.

## 3. Ajouter une image pour la formation

1. Préparez une image au format JPG ou PNG (idéalement de ratio 16:9)
2. Placez l'image dans le dossier `public/images/formations/`
3. Référencez cette image dans votre configuration comme `/images/formations/nom-image.jpg`

## 4. Tester votre nouvelle formation

1. Lancez l'application avec `npm run dev`
2. Vérifiez que votre formation apparaît sur la page des formations
3. Cliquez sur votre formation pour accéder à sa page détaillée
4. Vérifiez que toutes les informations s'affichent correctement

## 5. Personnalisation avancée

### Ajouter un contenu détaillé personnalisé

Si vous avez besoin d'une mise en page particulière pour une formation spécifique :

1. Créez un fichier dans `src/pages/FormationXxxPage.tsx` (remplacez Xxx par le nom de la formation)
2. Adaptez le contenu selon vos besoins
3. Ajoutez une route dans App.tsx pour cette page

### Ajouter un formulaire spécifique

Si votre formation a besoin d'un formulaire d'inscription ou de contact personnalisé :

1. Ajoutez les champs nécessaires dans le composant de formulaire
2. Personnalisez la soumission pour traiter ces données supplémentaires

## Exemple concret

Voici un exemple d'ajout d'une formation en développement web :

```typescript
{
  id: 'developpement-web-react',
  title: 'Développement Web avec React',
  shortDescription: 'Maîtrisez React.js et créez des applications web modernes, performantes et réactives',
  fullDescription: 'Cette formation vous permettra d\'acquérir toutes les compétences pour développer des applications web complexes avec React.js, la bibliothèque JavaScript la plus populaire pour créer des interfaces utilisateur dynamiques et performantes.',
  slug: 'formation-react-js',
  category: 'informatique',
  image: '/images/formations/react-development.jpg',
  duration: '35h',
  prices: {
    individuel: { price: '2 200€*', label: 'Éligible CPF' },
    collectif: { price: '1 450€*', label: 'Éligible CPF' }
  },
  cpfEligible: true,
  features: [
    'Formation 100% pratique avec projets concrets',
    'Support de cours et ressources téléchargeables',
    'Accès à une communauté de développeurs',
    'Suivi personnalisé post-formation'
  ],
  certifications: [
    'Certification Professionnelle React Developer'
  ],
  objectives: [
    'Maîtriser les fondamentaux de React.js',
    'Créer des applications single-page réactives',
    'Gérer l\'état de l\'application avec Redux',
    'Implémenter des tests automatisés',
    'Déployer une application React en production'
  ],
  program: [
    {
      title: 'Module 1 : Fondamentaux React',
      items: [
        'Introduction à l\'écosystème React',
        'Composants, props et état',
        'Cycles de vie et hooks',
        'Gestion des événements et formulaires'
      ]
    },
    {
      title: 'Module 2 : État et données',
      items: [
        'Gestion avancée de l\'état avec Context API',
        'Introduction à Redux et Redux Toolkit',
        'Appels API et gestion des données asynchrones',
        'Optimisation des performances'
      ]
    },
    {
      title: 'Module 3 : Projet pratique',
      items: [
        'Conception d\'une architecture scalable',
        'Implémentation des fonctionnalités principales',
        'Tests unitaires et d\'intégration',
        'Déploiement et CI/CD'
      ]
    }
  ]
}
```
