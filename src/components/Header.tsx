
import React from 'react';
import { Calculator } from 'lucide-react';

const Header: React.FC = () => {
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
            <a href="#calculadora" className="text-sm font-medium hover:text-primary transition-colors">
              Calculadora
            </a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
              Cómo funciona
            </a>
            <a href="#sobre-nosotros" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre nosotros
            </a>
            <a href="#" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-4 py-2 rounded-full text-sm font-medium">
              Contacto
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button className="block md:hidden p-2 text-foreground hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
