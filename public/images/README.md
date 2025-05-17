# Guide d'optimisation des images pour ZUMA

## Liste de vérification pour chaque image

Avant d'ajouter une image au site, vérifiez les points suivants :

1. **Format optimal**
   - PNG pour les logos et images avec transparence
   - JPG/JPEG pour les photos et images sans besoin de transparence
   - SVG pour les icônes et graphiques vectoriels (si disponible)

2. **Dimensions appropriées**
   - Logo : 200-300px de large
   - Bannières : 1920px x 600-800px
   - Images de formations : 800px x 600px
   - Photos d'équipe : 400px x 400px (carrées)
   - Icônes : 64px x 64px ou 128px x 128px

3. **Taille de fichier**
   - Idéalement moins de 200KB pour les grandes images
   - Moins de 100KB pour les images moyennes
   - Moins de 50KB pour les petites images et icônes

4. **Nommage des fichiers**
   - Utiliser des noms descriptifs
   - Éviter les espaces et caractères spéciaux
   - Utiliser des tirets pour séparer les mots (ex: logo-zuma.png)

5. **Optimisation**
   - Compresser les images avec TinyPNG (https://tinypng.com)
   - Vérifier que la qualité visuelle reste acceptable

6. **Accessibilité**
   - Toujours inclure un attribut alt descriptif
   - Utiliser des textes alternatifs pertinents

7. **Responsive**
   - Vérifier que l'image s'affiche correctement sur mobile
   - Utiliser des classes appropriées pour le redimensionnement

## Structure des dossiers

- `/public/images/logos/` - Pour les logos de l'entreprise et partenaires
- `/public/images/formations/` - Pour les images liées aux formations
- `/public/images/team/` - Pour les photos de l'équipe
- `/public/images/certifications/` - Pour les logos de certification
- `/public/images/icons/` - Pour les icônes personnalisées

## Fallback pour les images

Toujours inclure une gestion d'erreur pour les images importantes :

```jsx
<img 
  src="/images/logos/logo.png" 
  alt="Zuma" 
  onError={(e) => {
    // Fallback à une image par défaut ou texte
    e.currentTarget.src = "/images/logos/logo-fallback.png";
    // Ou masquer l'image et afficher un texte
  }}
/>
```