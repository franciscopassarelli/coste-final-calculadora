
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-primary/10 text-primary p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-display font-semibold">CostoFinal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Herramienta gratuita para emprendedores y PyMEs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Navegación</h3>
              <ul className="space-y-1">
                <li><a href="#calculadora" className="text-muted-foreground hover:text-primary">Calculadora</a></li>
                <li><a href="#como-funciona" className="text-muted-foreground hover:text-primary">Cómo Funciona</a></li>
                <li><a href="#sobre-nosotros" className="text-muted-foreground hover:text-primary">Sobre Nosotros</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Recursos</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Guías</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
              <h3 className="font-semibold mb-2">Contacto</h3>
              <ul className="space-y-1">
                <li><a href="mailto:info@costofinal.com" className="text-muted-foreground hover:text-primary">info@costofinal.com</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Formulario de Contacto</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} CostoFinal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
