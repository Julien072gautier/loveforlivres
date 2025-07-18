'use client'

import { useEffect } from 'react'
import { gtmEvent, GTM_EVENTS, GTM_CONFIG } from '../lib/config/gtm'

export const useGTM = () => {
  // Hook pour envoyer des événements GTM
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    gtmEvent(eventName, parameters)
  }

  // Événements prédéfinis
  const trackFormationView = (formationSlug: string, formationTitle: string) => {
    trackEvent(GTM_EVENTS.FORMATION_VIEW, {
      formation_slug: formationSlug,
      formation_title: formationTitle,
    })
  }

  const trackFormationContact = (formationSlug: string) => {
    trackEvent(GTM_EVENTS.FORMATION_CONTACT, {
      formation_slug: formationSlug,
    })
  }

  const trackFormStart = (formType: string) => {
    trackEvent(GTM_EVENTS.FORM_START, {
      form_type: formType,
    })
  }

  const trackFormSubmit = (formType: string) => {
    trackEvent(GTM_EVENTS.FORM_SUBMIT, {
      form_type: formType,
    })
  }

  const trackFormSuccess = (formType: string) => {
    trackEvent(GTM_EVENTS.FORM_SUCCESS, {
      form_type: formType,
    })
  }

  const trackFormError = (formType: string, error: string) => {
    trackEvent(GTM_EVENTS.FORM_ERROR, {
      form_type: formType,
      error_message: error,
    })
  }

  const trackExternalLink = (url: string, linkText?: string) => {
    trackEvent(GTM_EVENTS.EXTERNAL_LINK_CLICK, {
      external_url: url,
      link_text: linkText,
    })
  }

  const trackFileDownload = (fileName: string, fileType: string) => {
    trackEvent(GTM_EVENTS.FILE_DOWNLOAD, {
      file_name: fileName,
      file_type: fileType,
    })
  }

  return {
    trackEvent,
    trackFormationView,
    trackFormationContact,
    trackFormStart,
    trackFormSubmit,
    trackFormSuccess,
    trackFormError,
    trackExternalLink,
    trackFileDownload,
    isEnabled: GTM_CONFIG.ENABLED,
  }
}

// Hook pour tracker automatiquement les vues de page
export const usePageView = (pageName: string, additionalData?: Record<string, any>) => {
  useEffect(() => {
    if (GTM_CONFIG.ENABLED) {
      gtmEvent(GTM_EVENTS.PAGE_VIEW, {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname,
        ...additionalData,
      })
    }
  }, [pageName, additionalData])
}
