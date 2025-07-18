import React from 'react';
import { 
  MessageSquare, 
  Brain, 
  Users, 
  Globe, 
  Hand, 
  Laptop, 
  Star, 
  Target, 
  Clock, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Tag, 
  BookOpen, 
  Smile
} from 'lucide-react';

interface FormationIconProps {
  icon: string;
  className?: string;
  size?: number;
}

/**
 * Composant pour afficher l'icône d'une formation
 * Gère les icônes Lucide React et les caractères spéciaux comme les drapeaux
 */
const FormationIcon: React.FC<FormationIconProps> = ({ icon, className = "mr-2", size = 20 }) => {
  // Icônes Lucide React
  if (icon === "MessageSquare") return <MessageSquare className={className} size={size} />;
  if (icon === "Brain") return <Brain className={className} size={size} />;
  if (icon === "Users") return <Users className={className} size={size} />;
  if (icon === "Globe") return <Globe className={className} size={size} />;
  if (icon === "Hand") return <Hand className={className} size={size} />;
  if (icon === "Laptop") return <Laptop className={className} size={size} />;
  if (icon === "Star") return <Star className={className} size={size} />;
  if (icon === "Target") return <Target className={className} size={size} />;
  if (icon === "Clock") return <Clock className={className} size={size} />;
  if (icon === "Award") return <Award className={className} size={size} />;
  if (icon === "CheckCircle") return <CheckCircle className={className} size={size} />;
  if (icon === "ArrowRight") return <ArrowRight className={className} size={size} />;
  if (icon === "Calendar") return <Calendar className={className} size={size} />;
  if (icon === "Tag") return <Tag className={className} size={size} />;
  if (icon === "BookOpen") return <BookOpen className={className} size={size} />;
  if (icon === "Smile") return <Smile className={className} size={size} />;
  
  // Drapeaux et autres caractères spéciaux
  const flagIcons = ["🇩🇪", "🇬🇧", "🇫🇷", "🇪🇸", "🇮🇹", "🇵🇹", "🇷🇺", "🇨🇳", "🇯🇵", "🇸🇦"];
  if (flagIcons.includes(icon)) {
    return (
      <span className={`text-xl flex items-center justify-center ${className}`} style={{ lineHeight: 1 }}>
        {icon}
      </span>
    );
  }
  
  // Icône par défaut si l'icône n'est pas reconnue
  return <MessageSquare className={className} size={size} />;
};

export default FormationIcon;
