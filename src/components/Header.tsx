import React, { useState } from 'react';
import { Link, To } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import themeConfig from '../config/theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center no-bg">
          {/* Logo configurable depuis theme.ts */}
          <img 
            src={themeConfig.logos.header.url} 
            alt={themeConfig.logos.header.alt} 
            className="h-16 w-auto mr-2"
            onClick={(e) => {
              // Redirection vers la page d'accueil
              window.location.href = themeConfig.logos.header.link ?? "/";
            }}
            onError={(e) => {
              // Fallback au texte si l'image n'est pas encore disponible
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling;
              if (nextElement) {
                (nextElement as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <span className="text-2xl font-bold" style={{display: 'none'}}>
            <span className="text-black">{themeConfig.company.name.split('PRO')[0]}</span>
            <span className={`text-${themeConfig.brand.primaryColorName}`}>PRO</span>
            <span className="text-gray-500 text-sm ml-1">{themeConfig.company.tagline}</span>
          </span>
        </Link>

        {/* Desktop Navigation - hidden as per request */}
        <nav className="hidden">
          {themeConfig.navigation.mainMenu.map((item: { path: To; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <Link 
              key={index} 
              to={item.path} 
              className="text-gray-800 hover:text-brand font-medium"
            >
              {item.name}
            </Link>
          ))}
          <a 
            href={themeConfig.externalLinks.skillupPlatform} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary btn-md btn-with-icon inline-flex items-center"
          >
            {themeConfig.externalLinks.skillupLabel} <ExternalLink size={16} className="ml-1" />
          </a>
        </nav>

        {/* Mobile Menu Button - hidden as per request */}
        <button 
          className="hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - hidden as per request */}
      {false && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner">
          <nav className="flex flex-col space-y-4">
            {themeConfig.navigation.mainMenu.map((item: { path: To; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
              <Link 
                key={index}
                to={item.path} 
                className="text-gray-800 hover:text-brand font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a 
              href={themeConfig.externalLinks.skillupPlatform}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary btn-md btn-with-icon inline-flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {themeConfig.externalLinks.skillupLabel}
              <ExternalLink size={16} className="ml-2" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;