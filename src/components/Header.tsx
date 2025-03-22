
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 border-b border-border animate-fade-in">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">BETA</span>
            <h1 className="text-xl font-display font-semibold tracking-tight">Calculadora de Costos Finales</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#calculadora" className="text-sm font-medium hover:text-primary transition-colors">
              Calculadora
            </a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
              Cómo funciona
            </a>
            <a href="#sobre-nosotros" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre nosotros
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
