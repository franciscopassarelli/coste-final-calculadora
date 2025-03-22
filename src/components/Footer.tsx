
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-border mt-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Calculadora de Costos Finales</h3>
            <p className="text-sm text-muted-foreground">
              Una herramienta gratuita para ayudar a emprendedores, PyMEs y empresas a calcular el costo final
              de sus productos incluyendo impuestos y gastos.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#calculadora" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre nosotros
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-muted-foreground">
              ¿Necesitas ayuda con tu negocio? Ofrecemos servicios de consultoría
              para emprendedores y PyMEs.
            </p>
            <button className="mt-4 text-sm text-primary hover:underline transition-colors">
              Contactar
            </button>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} Calculadora de Costos Finales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
