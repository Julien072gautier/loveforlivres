# Guide de personnalisation du site de formation

Ce document explique comment personnaliser facilement le site de formation professionnelle grâce à son système de configuration centralisée.

## Structure des fichiers de configuration

Les fichiers de configuration se trouvent dans le dossier `src/config/` :

- `theme.ts` : Configuration générale du site (logo, couleurs, coordonnées, menu)
- `types.ts` : Types TypeScript pour la configuration
- `formations.ts` : Données des formations
- `colors.ts` : Générateur de variantes de couleurs

## Personnalisation de l'apparence générale

Pour modifier l'apparence générale du site, éditez le fichier `src/config/theme.ts` :

```typescript
// Exemple d'édition des informations de l'entreprise
const themeConfig: ThemeConfig = {
  company: {
    name: "VotreNomEntreprise", // Nom court
    fullName: "Votre Nom Complet d'Entreprise", // Nom complet
    tagline: "Votre slogan ici", // Slogan
    description: "Description détaillée de votre entreprise",
    // ...
  },
  // ...
}
```

### Configuration des couleurs

Pour changer le thème de couleurs du site, modifiez l'objet `brand` dans `theme.ts` :

```typescript
brand: {
  primaryColor: "#0055FF", // Couleur principale
  primaryColorName: "blue", // Nom de la couleur
  secondaryColor: "#FFBB00", // Couleur secondaire
  accentColor: "#FF5500", // Couleur d'accent
  fontFamily: {
    heading: "Montserrat, sans-serif", // Police des titres
    body: "Inter, sans-serif" // Police du texte
  }
},
```

### Configuration des logos

Pour changer les logos du site, modifiez l'objet `logos` dans `theme.ts` :

```typescript
logos: {
  header: {
    url: "/images/logos/votre-logo.svg",
    alt: "Votre Logo",
    link: "/"
  },
  footer: {
    url: "/images/logos/votre-logo-footer.svg",
    alt: "Votre Logo",
    link: "/"
  },
  // ...
}
```

## Gestion des formations

Pour ajouter, modifier ou supprimer des formations, éditez le fichier `src/config/formations.ts`.

### Catégories de formations

Pour modifier les catégories de formations :

```typescript
categories: [
  {
    id: 'votre-categorie',
    name: 'Votre Catégorie',
    description: 'Description de votre catégorie de formation',
    icon: 'MessageSquare' // Nom d'une icône Lucide React
  },
  // Ajoutez d'autres catégories ici
]
```

### Ajouter une formation

Pour ajouter une nouvelle formation :

```typescript
formations: [
  // Formations existantes...
  {
    id: 'votre-formation',
    title: 'Titre de votre formation',
    shortDescription: 'Description courte de votre formation',
    fullDescription: 'Description complète et détaillée de votre formation',
    slug: 'votre-formation', // URL de la page de formation
    category: 'votre-categorie', // ID de la catégorie
    image: '/images/formations/votre-image.jpg',
    duration: '30h',
    prices: {
      individuel: { price: '1 950€*', label: 'Éligible CPF' },
      collectif: { price: '1 250€*', label: 'Éligible CPF' }
    },
    cpfEligible: true,
    features: [
      'Caractéristique 1',
      'Caractéristique 2'
    ],
    certifications: [
      'Nom de la certification'
    ],
    objectives: [
      'Objectif 1',
      'Objectif 2'
    ],
    program: [
      {
        title: 'Module 1: Titre du module',
        items: ['Contenu 1', 'Contenu 2']
      },
      {
        title: 'Module 2: Titre du module',
        items: ['Contenu 1', 'Contenu 2']
      }
    ],
    // Nouveaux champs pour les sections additionnelles
    teachingMethods: [
      'Méthode pédagogique 1',
      'Méthode pédagogique 2',
      'Méthode pédagogique 3'
    ],
    evaluationMethods: [
      'Méthode d\'évaluation 1',
      'Méthode d\'évaluation 2'
    ],
    accessibility: [
      'Information d\'accessibilité 1',
      'Information d\'accessibilité 2'
    ]
  }
]
```

## Personnalisation approfondie des formations

Le système permet une personnalisation avancée des pages de formation avec de nombreux champs configurables. Voici un exemple complet de configuration d'une formation:

```typescript
{
  id: 'communication-prise-parole',
  title: 'Communiquer avec impact à l\'oral en présentiel et à distance',
  shortDescription: 'Développez votre aisance orale, maîtrisez votre posture et captivez votre auditoire.',
  fullDescription: 'Cette formation vous permettra d\'acquérir toutes les techniques pour communiquer efficacement à l\'oral, que ce soit en présentiel ou à distance, et captiver votre audience.',
  slug: 'formation-communication',
  category: 'communication',
  image: '/images/formations/communication.jpg',
  duration: '21h',
  modalites: 'Présentiel ou distanciel ou mixte',
  prices: {
    individuel: { price: '2 450€*', label: 'Éligible CPF' },
    collectif: { price: '1 650€*', label: 'Éligible CPF' }
  },
  cpfEligible: true,
  
  // Informations de certification
  certifications: ['Communiquer à l\'oral avec impact'],
  certificationDetails: {
    name: 'Communiquer à l\'oral avec impact en présentiel et à distance',
    code: 'RS6377',
    organization: 'Pollen Conseil',
    description: 'Cette formation prépare à l\'obtention du certificat de compétences « Communiquer à l\'oral avec impact en présentiel et à distance » enregistré par Pollen Conseil auprès de France Compétences en date du 20/09/2023 pour une durée de trois ans sous la référence RS6377',
    examDetails: {
      format: [
        'Mise en situation orale (45 min préparation + 7 min intervention)',
        'Gestion des objections (2 min)',
        'QCM d\'évaluation des acquis (10 min)'
      ],
      successRate: '95%'
    }
  },
  
  // Objectifs pédagogiques
  objectives: [
    'Concevoir la structure d\'une communication',
    'Énoncer un message de manière audible et impactante',
    'Mobiliser son corps et adapter sa posture selon l\'environnement et les interlocuteurs',
    'Illustrer son discours pour captiver et convaincre',
    'Gérer les interactions et répondre aux objections',
    'Adapter sa communication aux outils et contextes distanciels'
  ],
  
  // Programme détaillé
  program: [
    {
      title: 'Module 1 : Structurer sa pensée et le contenu de sa présentation',
      items: [
        'Adapter son intervention à son public et au contexte',
        'Définir le sujet, l\'objectif et structurer son discours',
        'Construire une progression logique et captivante',
        'Concevoir un support visuel épuré et impactant'
      ]
    },
    // Autres modules...
  ],
  
  // Arguments pour suivre la formation
  reasons: [
    {
      title: 'Crédibilité renforcée',
      description: 'Affirmez votre expertise et gagnez en légitimité en captivant votre audience à l\'oral.',
      icon: 'Users'
    },
    {
      title: 'Impact optimisé',
      description: 'Structurez clairement vos interventions pour capter et maintenir l\'attention de votre auditoire.',
      icon: 'Target'
    },
    {
      title: 'Interaction maîtrisée',
      description: 'Gérez les objections avec assurance et favorisez des échanges fluides et constructifs.',
      icon: 'MessageSquare'
    },
    {
      title: 'Présence affirmée',
      description: 'Adoptez posture, gestuelle et ton adaptés pour renforcer charisme et aisance orale.',
      icon: 'Star'
    }
  ],
  
  // Public visé
  publicVise: [
    'Commerciaux ou personnel de la relation client',
    'Managers en situation d\'entretien',
    'Responsables de services en réunion d\'équipe',
    'Chefs ou contributeurs de projet',
    'Dirigeants en situation de discours',
    'Demandeurs d\'emploi en entretien de recrutement'
  ],
  
  // Prérequis
  prerequis: [
    'Justifier d\'au moins 1 an d\'expérience professionnelle',
    'Pratiquer régulièrement des prises de parole en présentiel ou à distance'
  ],
  
  // Méthodes pédagogiques
  teachingMethods: [
    'Approche théorique',
    'Exemples concrets et partages d\'expériences',
    'Cas pédagogiques en groupe',
    'Mises en situation, jeux de rôles et co-développement'
  ],
  
  // Modalités d'évaluation
  evaluationMethods: [
    'Évaluation des compétences en entrée et sortie',
    'Feuilles de présence et certificat de réalisation',
    'Épreuve de certification (mise en situation et QCM)'
  ],
  
  // Informations d'accessibilité
  accessibility: [
    'Formation accessible sous 15 jours après inscription',
    'Adaptations possibles sur demande pour les personnes en situation de handicap',
    'Assistance à la connexion en cas de visioconférence via Microsoft Teams'
  ]
}
```

### Structure de la page de formation

Chaque formation configurée avec ces champs génère automatiquement une page de formation complète avec les sections suivantes:

1. **En-tête** - Titre, description et boutons d'action
2. **Détails de la formation** - Image, modalités, prix et options
3. **Pourquoi suivre cette formation** - Avantages et bénéfices (si `reasons` est défini)
4. **Objectifs pédagogiques** - Liste des compétences à acquérir
5. **Programme détaillé** - Modules et contenu de la formation
6. **Public visé et prérequis** - Qui peut suivre la formation et conditions (si `publicVise` et `prerequis` sont définis)
7. **Méthodes pédagogiques et évaluation** - Comment la formation est dispensée et évaluée (si `teachingMethods` et `evaluationMethods` sont définis)
8. **Certification** - Détails sur la certification préparée (si `certificationDetails` est défini)
9. **Accessibilité et inclusion** - Informations pratiques (si `accessibility` est défini)
10. **Call to action** - Boutons de contact et demande d'information

Tous ces champs sont optionnels (à l'exception des informations de base comme le titre, la description et le prix). Les sections correspondantes ne s'afficheront que si les données sont présentes dans la configuration.

## Icônes disponibles

Le site prend en charge deux types d'icônes :

1. **Icônes Lucide React** (spécifiées par leur nom) :
   - MessageSquare
   - Brain
   - Users
   - Globe
   - Hand
   - Laptop
   - Star
   - Target

2. **Drapeaux et autres caractères** (spécifiés directement) :
   - 🇩🇪 (Allemagne)
   - 🇬🇧 (Royaume-Uni)
   - 🇫🇷 (France)
   - 🇪🇸 (Espagne)
   - 🇮🇹 (Italie)
   - etc.

## Navigation

Pour modifier les liens de navigation, éditez l'objet `navigation` dans `theme.ts` :

```typescript
navigation: {
  mainMenu: [
    { name: "Accueil", path: "/" },
    { name: "Formations", path: "/formations" },
    // Ajoutez d'autres liens ici
  ],
  ctaButton: {
    text: "Nous contacter",
    url: "/contact",
    isExternal: false
  }
},
```

## Pied de page

Pour modifier les liens du pied de page, éditez l'objet `footer` dans `theme.ts` :

```typescript
footer: {
  columns: [
    {
      title: "À propos",
      links: [
        { name: "Notre équipe", path: "/equipe" },
        { name: "Qui sommes-nous", path: "/a-propos" },
        // Ajoutez d'autres liens ici
      ]
    },
    // Ajoutez d'autres colonnes ici
  ],
  copyright: "© 2025 Votre Entreprise. Tous droits réservés."
}
```

## Informations de contact

Pour modifier les informations de contact, éditez l'objet `company.contact` dans `theme.ts` :

```typescript
contact: {
  phone: "01 23 45 67 89",
  email: "contact@votreentreprise.com",
  supportEmail: "support@votreentreprise.com"
}
```
