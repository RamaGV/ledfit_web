import React from 'react';
import { 
  FaLinkedin, 
  FaFileDownload, 
  FaWhatsapp,
  FaInstagram 
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
  href: string;
  gradient: string;
  hoverGradient?: string;
  icon: React.ReactNode;
  text?: string;
  isExternal?: boolean;
}

export interface TechCardData {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  gradientColors: string;
  iconComponent: React.ReactNode;
}

// Datos de contacto (columna izquierda)
export const contactItems: ContactItemData[] = [
  {
    id: 'email',
    gradient: 'bg-gradient-to-r from-yellow-700 to-yellow-600',
    hoverGradient: 'bg-gradient-to-r from-yellow-600 to-yellow-400',
    icon: <MdEmail className="h-5 w-5 text-white" />,
    text: 'contacto@ledfit.com',
    href: 'mailto:contacto@ledfit.com',
    isExternal: false
  },
  {
    id: 'whatsapp',
    gradient: 'bg-gradient-to-r from-green-700 to-green-500',
    hoverGradient: 'bg-gradient-to-r from-green-600 to-green-300',
    icon: <FaWhatsapp className="h-5 w-5 text-white" />,
    text: '+598 98 858 353',
    href: 'https://wa.me/59898858353',
    isExternal: true
  },
  {
    id: 'instagram',
    gradient: 'bg-gradient-to-r from-purple-700 to-pink-500',
    hoverGradient: 'bg-gradient-to-r from-pink-500 to-orange-400',
    icon: <FaInstagram className="h-5 w-5 text-white" />,
    text: '@ledfit',
    href: 'https://instagram.com/ledfit',
    isExternal: true
  }
];

// Enlaces sociales (columna derecha)
export const socialLinks: ContactItemData[] = [
  {
    id: 'portfolio',
    gradient: 'bg-gradient-to-r from-purple-800 to-purple-700',
    hoverGradient: 'bg-gradient-to-r from-purple-700 to-purple-600',
    icon: <MdWork className="h-5 w-5 text-white" />,
    text: 'portfolio.ledfit.com',
    href: 'https://portfolio.ledfit.com',
    isExternal: true
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com/in/username',
    gradient: 'bg-gradient-to-r from-blue-800 to-blue-700',
    hoverGradient: 'bg-gradient-to-r from-blue-700 to-blue-600',
    icon: <FaLinkedin className="w-5 h-5 text-white" />,
    text: 'LinkedIn',
    isExternal: true
  },
  {
    id: 'cv',
    href: '#',
    gradient: 'bg-gradient-to-r from-red-800 to-red-600',
    hoverGradient: 'bg-gradient-to-r from-red-700 to-red-600',
    icon: <FaFileDownload className="w-5 h-5 text-white" />,
    text: 'Curriculum Vitae',
    isExternal: true
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
