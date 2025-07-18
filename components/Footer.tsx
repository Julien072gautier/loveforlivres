import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import themeConfig from '../lib/config/theme';
import { NavigationLink } from '../lib/config/types';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const copyrightText = themeConfig.footer.copyright.replace('{year}', currentYear.toString());

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={themeConfig.logos.footer.url} 
                alt={themeConfig.logos.footer.alt} 
                className="h-24 w-auto mb-2"
                onError={(e) => {
                  // Fallback au texte si l'image n'est pas disponible
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling;
                  if (nextElement) {
                    (nextElement as HTMLElement).style.display = 'block';
                  }
                }}
              />
              <span className="text-2xl font-bold" style={{ display: 'none' }}>
                <span className="text-white">{themeConfig.company.name.split('PRO')[0]}</span>
                <span className={`text-${themeConfig.brand.primaryColorName}-400`}>PRO</span>
                <span className="text-gray-400 text-sm ml-1">{themeConfig.company.tagline}</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              {themeConfig.company.description}
            </p>
            <div className="flex items-center text-gray-300 mb-2">
              <MapPin size={18} className="mr-2" />
              <span>
                {`${themeConfig.company.address.street}, ${themeConfig.company.address.postalCode} ${themeConfig.company.address.city}, ${themeConfig.company.address.country}`}
              </span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Phone size={18} className="mr-2" />
              <span>{themeConfig.company.contact.phone}</span>
            </div>
            <div className="flex items-center text-gray-300 mb-2">
              <Mail size={18} className="mr-2" />
              <span>{themeConfig.company.contact.email}</span>
            </div>
            <div className="flex flex-row space-x-4 text-gray-300 mt-4">
              {themeConfig.company.socialMedia.linkedin && (
                <a 
                  href={themeConfig.company.socialMedia.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {themeConfig.company.socialMedia.facebook && (
                <a 
                  href={themeConfig.company.socialMedia.facebook}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-400"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
              {themeConfig.company.socialMedia.twitter && (
                <a 
                  href={themeConfig.company.socialMedia.twitter}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-400"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              )}
              {themeConfig.company.socialMedia.instagram && (
                <a 
                  href={themeConfig.company.socialMedia.instagram}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-400"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Footer Columns from theme config */}
          {themeConfig.footer.columns.slice(0, 2).map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-xl font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link: NavigationLink, linkIndex: number) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.path as any} 
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xl font-semibold mb-4">Certification</h3>
            <div className="bg-white p-3 rounded-lg inline-block mb-4">
              <a 
                href="https://irp.cdn-website.com/e0ab763a/files/uploaded/Certificat_Qualiopi_Sign%C3%A9_HD.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://irp.cdn-website.com/e0ab763a/dms3rep/multi/qualiopi.png" 
                  alt="Certification Qualiopi" 
                  className="h-16 w-auto cursor-pointer"
                  onError={(e) => {
                    // Fallback à l'image externe si l'image locale n'est pas disponible
                    e.currentTarget.src = "https://irp.cdn-website.com/e0ab763a/dms3rep/multi/Logo+qualiopi.png";
                  }}
                />
              </a>
            </div>
            <p className="text-gray-300">
              Certifié Qualiopi - Éligible au CPF et autres dispositifs de financement de la formation professionnelle.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
