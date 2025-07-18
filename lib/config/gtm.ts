// Configuration Google Tag Manager
export const GTM_CONFIG = {
  // Remplacez 'GTM-XXXXXXX' par votre ID Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
  
  // Activer/désactiver GTM selon l'environnement
  ENABLED: process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GTM_ID,
}

// Helper pour envoyer des événements à GTM
export const gtmEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer && GTM_CONFIG.ENABLED) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

// Événements prédéfinis pour le site
export const GTM_EVENTS = {
  // Événements de navigation
  PAGE_VIEW: 'page_view',
  
  // Événements de formation
  FORMATION_VIEW: 'formation_view',
  FORMATION_CONTACT: 'formation_contact',
  
  // Événements de formulaire
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_SUCCESS: 'form_success',
  FORM_ERROR: 'form_error',
  
  // Événements d'engagement
  SCROLL_DEPTH: 'scroll_depth',
  FILE_DOWNLOAD: 'file_download',
  EXTERNAL_LINK_CLICK: 'external_link_click',
};
