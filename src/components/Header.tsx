import React, { useState } from 'react';
import { Calculator, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'pagina', path: '/pagina', icon: <Calculator className="h-5 w-5" /> },
    { name: 'Servicios', path: '/services', icon: <Calculator className="h-5 w-5" /> },
    { name: 'About', path: '/about', icon: <Calculator className="h-5 w-5" /> },
    { name: 'Contacto', path: '/contact', icon: <Calculator className="h-5 w-5" /> },
  ];

  
  return (
    <header className="py-4 border-b border-border bg-white shadow-sm sticky top-0 z-50 animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-primary text-white p-1.5 rounded flex items-center justify-center">
              <Calculator size={18} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-display font-semibold tracking-tight leading-none">CostoFinal</h1>
              <span className="bg-primary/10 text-primary text-xs px-1.5 py-0.5 rounded text-center">BETA</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/calculadora" className="text-sm font-medium hover:text-primary transition-colors">
              Calculadora </Link>
            
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              Cómo funciona </Link>
            <Link to="/contacto" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-2 rounded-full text-sm font-medium">
              Contacto
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="block md:hidden p-2 text-foreground hover:text-primary transition-colors" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border border-border rounded-lg shadow-lg animate-slide-down">
            <nav className="flex flex-col p-4">
              <a 
                href="#calculadora" 
                className="py-3 px-4 text-sm font-medium hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculadora
              </a>
              <a 
                href="/about"
                className="py-3 px-4 text-sm font-medium hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <a 
                href="#sobre-nosotros" 
                className="py-3 px-4 text-sm font-medium hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre nosotros
              </a>
              <a 
                href="#" 
                className="mt-2 py-3 px-4 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;