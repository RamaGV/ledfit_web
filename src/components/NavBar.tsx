import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLink from './NavbBar/NavbarLink';

interface NavbarProps {
  darkMode?: boolean;
  toggleDarkMode?: () => void;
}

// Definición de enlaces de navegación para reutilización
const navigationLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#led', label: 'Tablero' },
  { href: '#funciones', label: 'Vistas' },
  { href: '#entrenamientos', label: 'Entrenamientos' },
];

export default function Navbar({ darkMode = false, toggleDarkMode }: NavbarProps) {
  // Estado para controlar el menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para cerrar el menú móvil (útil después de hacer clic en un enlace)
  const closeMobileMenu = () => setMobileMenuOpen(false);
  
  // Botón de QR Code para descargar
  const DownloadButton = () => (
    <div className="relative group">
      <Link to="/download" className="download-btn rounded-full px-4 py-2 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span className="hidden sm:inline">Descargar App</span>
      </Link>
      
      {/* QR Code tooltip on hover */}
      <div className="absolute right-0 top-full mt-6 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-darkgray rounded-xl p-3 shadow-lg border border-gray-700 z-50">
        <div className="w-full aspect-square bg-white p-2 rounded-lg mb-2">
          {/* Representación simplificada de un QR Code */}
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xODAgMGgyMHYyMGgtMjBWMHoiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTAgMTgwaDIwdjIwSDBWMTgweiIgZmlsbD0iYmxhY2siLz48cGF0aCBkPSJNMjAwIDBoLTIwdjYwaDQwVjIwaDIwdjIwaDIwVjBoLTYweiIgZmlsbD0iYmxhY2siLz48cGF0aCBkPSJNMCA0MGgyMHY4MEgwVjQweiIgZmlsbD0iYmxhY2siLz48cGF0aCBkPSJNMCAxMDBoMjB2NjBIMFYxMjB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgMTAwaDIwdjIwSDEyMFYxMDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgMjAwaDIwdjIwSDEyMFYyMDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgMzAwaDIwdjIwSDEyMFYzMDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgNDAwaDIwdjIwSDEyMFY0MDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgNTAwaDIwdjIwSDEyMFY1MDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgNjAwaDIwdjIwSDEyMFY2MDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgNzAwaDIwdjIwSDEyMFY3MDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgODAwaDIwdjIwSDEyMFY4MDB6IiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMjAgOTAwLjAwMDAwMDE5MjggMjAwaDIwdjIwSDEyMFY5MDB6IiBmaWxsPSJibGFjayIvPjwvc3ZnPg==')]"></div>
        </div>
        <p className="text-xs text-center text-gray-300">Escanea para descargar</p>
      </div>
    </div>
  );

  // Botón de tema (dark/light mode)
  const ThemeToggleButton = () => (
    <button 
      onClick={toggleDarkMode} 
      aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
    >
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-primary-800/50 py-3 px-4 fixed top-0 left-0 right-0 z-50 shadow-lg shadow-black/20">
      <div className="container-custom">
        {/* Contenedor principal - estructura Flexbox para el navbar */}
        <div className="flex items-center justify-between">
          {/* Logo a la izquierda */}
          <div className="flex items-center gap-3">
            <div className="bg-primary-600 w-8 h-8 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.24 12.24a6 6 0 0 0-8.49-8.49L12 3.75l-.75-.75a6 6 0 0 0-8.49 8.49L12 20.25l9.75-9.75z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold">Ledfit</h1>
          </div>
          
          {/* Menú de navegación en pantallas medianas y grandes */}
          <div className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <NavbarLink 
                key={link.href} 
                href={link.href} 
                label={link.label} 
              />
            ))}
            
            <div className="flex items-center">
              <NavbarLink href="#contact" label="Contacto" />
            </div>
          </div>
          
          {/* Botones de acciones a la derecha */}
          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggleButton />
            <DownloadButton />
            
            {/* Botón de hamburguesa para menú móvil */}
            <button 
              className="md:hidden p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Menú móvil - se muestra/oculta según el estado */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-900 rounded-lg border border-gray-800 overflow-hidden animate-fadeIn">
            {navigationLinks.map((link) => (
              <NavbarLink 
                key={link.href} 
                href={link.href} 
                label={link.label} 
                isMobile={true}
                onClick={closeMobileMenu}
              />
            ))}
            
            <div className="flex items-center">
              <NavbarLink href="#contact" label="Contacto" isMobile={true} onClick={closeMobileMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
