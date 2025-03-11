import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFileDownload, 
  FaWhatsapp 
} from 'react-icons/fa';
import { 
  MdEmail, 
  MdWork, 
  MdImportantDevices, 
  MdPhoneAndroid, 
  MdCloud, 
  MdDeveloperBoard 
} from 'react-icons/md';

// Interfaces para los datos
export interface ContactItemData {
  id: string;
  gradient: string;
  icon: React.ReactNode;
  text: string;
}

export interface SocialLinkData {
  id: string;
  href: string;
  gradient: string;
  hoverGradient: string;
  icon: React.ReactNode;
}

export interface TechCardData {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  gradientColors: string;
  iconComponent: React.ReactNode;
}

// Datos de contacto
export const contactItems: ContactItemData[] = [
  {
    id: 'email',
    gradient: 'bg-gradient-to-r from-yellow-700 to-yellow-500',
    icon: <MdEmail className="h-5 w-5 text-white" />,
    text: 'contacto@ledfit.com'
  },
  {
    id: 'whatsapp',
    gradient: 'bg-gradient-to-r from-green-600 to-green-400',
    icon: <FaWhatsapp className="h-5 w-5 text-white" />,
    text: 'WhatsApp: +54 9 123 456 7890'
  },
  {
    id: 'portfolio',
    gradient: 'bg-gradient-to-r from-blue-700 to-blue-500',
    icon: <MdWork className="h-5 w-5 text-white" />,
    text: 'portfolio.ledfit.com'
  }
];

// Enlaces sociales
export const socialLinks: SocialLinkData[] = [
  {
    id: 'github',
    href: 'https://github.com/RamaGV',
    gradient: 'from-gray-800 to-gray-700',
    hoverGradient: 'from-gray-700 to-gray-600',
    icon: <FaGithub className="w-5 h-5" />
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/username',
    gradient: 'from-blue-800 to-blue-700',
    hoverGradient: 'from-blue-700 to-blue-600',
    icon: <FaLinkedin className="w-5 h-5" />
  },
  {
    id: 'portfolio',
    href: '#',
    gradient: 'from-purple-800 to-purple-700',
    hoverGradient: 'from-purple-700 to-purple-600',
    icon: <FaFileDownload className="w-5 h-5" />
  }
];

// Tarjetas de tecnología
export const techCards: TechCardData[] = [
  {
    id: 'iot',
    title: 'Sistema IoT',
    description: 'Conectividad entre el hardware LED y la aplicación',
    repoUrl: 'https://github.com/RamaGV/ledfit-iot',
    gradientColors: 'bg-gradient-to-r from-purple-600 to-blue-600',
    iconComponent: <MdImportantDevices className="h-12 w-12" />
  },
  {
    id: 'mobile',
    title: 'App Móvil',
    description: 'Aplicación del cliente para iOS y Android',
    repoUrl: 'https://github.com/RamaGV/ledfit-app',
    gradientColors: 'bg-gradient-to-r from-green-600 to-teal-600',
    iconComponent: <MdPhoneAndroid className="h-12 w-12" />
  },
  {
    id: 'backend',
    title: 'Backend API',
    description: 'Servidor y API con Node.js y MongoDB',
    repoUrl: 'https://github.com/RamaGV/ledfit-backend',
    gradientColors: 'bg-gradient-to-r from-indigo-600 to-pink-600',
    iconComponent: <MdCloud className="h-12 w-12" />
  },
  {
    id: 'prototype',
    title: 'Diseño de Prototipo',
    description: 'Archivos de fabricación para el tablero LED',
    repoUrl: 'https://github.com/RamaGV/ledfit-prototype',
    gradientColors: 'bg-gradient-to-r from-blue-600 to-cyan-600',
    iconComponent: <MdDeveloperBoard className="h-12 w-12" />
  }
];
