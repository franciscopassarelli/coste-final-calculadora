
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MonotributoSelect from '@/components/MonotributoSelect';


import { ArrowDown, Calculator as CalculatorIcon, Sparkles } from 'lucide-react';
import ProductPricingPage from '@/components/product-pricing-calculator-page';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* sección Hero + Home */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover opacity-5"></div>
          
          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
              {/* Logo y  Brand Badge */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <CalculatorIcon size={36} className="text-white" />
                </div>
              </div>
              
              <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-5 shadow-sm">
                Herramienta para Emprendedores y PyMEs
              </span>
              
              <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight mb-6 text-foreground">
                <span className="relative">
                  Calcula el costo
                  <span className="absolute -top-6 right-0 transform translate-x-1/4">
                    <Sparkles className="text-primary w-6 h-6" />
                  </span>
                </span>
                <br />
                final de tus productos
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Determina el precio de venta ideal para tus productos considerando todos los impuestos,
                comisiones y gastos, y haz que tu negocio sea rentable.
              </p>
              
              <a 
                href="#calculadora" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl group"
              >
                Comenzar Ahora
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        </section>
        
        {/* Calculator Section with Enhanced Design */}
        <section className="py-16 bg-gradient-to-b from-white to-background relative" id="calculadora">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                Calculadora Inteligente
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-6">
                Calcula el costo final de tus productos
              </h2>
              <p className="text-lg text-muted-foreground">
                Determina el precio de venta ideal para tus productos considerando todos los impuestos,
                comisiones y gastos, y haz que tu negocio sea rentable.
              </p>

</div>
            
            <div className="rounded-2xl bg-white border border-border shadow-xl animate-slide-up">

              <div className="p-6 md:p-8">
                <ProductPricingPage />
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16" id="como-funciona">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-display font-semibold tracking-tight mb-4">
                Cómo funciona
              </h2>
              <p className="text-muted-foreground">
                Nuestra calculadora te ayuda a determinar el costo real de tus productos
                considerando todos los factores relevantes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Ingresa el costo base</h3>
                <p className="text-muted-foreground">
                  Comienza con el precio inicial de tu producto sin impuestos ni comisiones.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Selecciona los costos adicionales</h3>
                <p className="text-muted-foreground">
                  Activa los impuestos y costos relevantes para tu caso, como IVA, impuestos provinciales, envío, etc.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Obtén el precio de venta ideal</h3>
                <p className="text-muted-foreground">
                  Establece tu margen de ganancia deseado y obtén el precio de venta recomendado para tu producto.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Us Section with Enhanced Design */}
        <section className="py-16 bg-secondary/50 relative overflow-hidden" id="sobre-nosotros">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20"></div>
          
          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-semibold tracking-tight mb-4">
                  Sobre nosotros
                </h2>
                <p className="text-muted-foreground">
                  Somos una consultora especializada en ayudar a emprendedores y PyMEs
                  a optimizar sus operaciones y maximizar su rentabilidad.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-border shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Nuestros servicios</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">✓</div>
                    <div>
                      <span className="font-medium">Consultoría financiera</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Análisis de costos, precios y rentabilidad para tu negocio.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">✓</div>
                    <div>
                      <span className="font-medium">Asesoría impositiva</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Optimización de la estructura impositiva de tu empresa.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">✓</div>
                    <div>
                      <span className="font-medium">Estrategia de precios</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Desarrollo de estrategias de precios competitivos y rentables.
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-center">
                    <span className="text-muted-foreground">¿Necesitas ayuda con tu negocio?</span>
                    <button className="ml-2 text-primary hover:underline font-medium">
                      Contáctanos
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
