"use client"
import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowLeft, ArrowRight, CalculatorIcon, ArrowDown } from "lucide-react"
import ProductPricingPage from "@/components/product-pricing-calculator-page"

// Define the carousel content
const carouselItems = [
  {
    title: "Bienvenidos",
    description:
      "Somos una nueva plataforma que busca ayudar a personas y empresas a ponerle un precio bruto a los productos o servicios que ofrecen, para al final saber su ganancia neta luego de todos los impuestos.",
    image:
      "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    title: "¿Cómo funciona?",
    description: "Pone tu precio bruto, tu provincia, tu servicio de pago y tu estado ante ARCA y listo. Ya podemos calcular tu ganancia bruta y neta.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
]

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Carousel */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url('${carouselItems[currentSlide].image}')` }}
          ></div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/50 transition-opacity opacity-50 hover:opacity-100"
            onClick={goToPrevSlide}
          >
            <ArrowLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 text-white p-2 rounded-full hover:bg-black/50 transition-opacity opacity-50 hover:opacity-100"
            onClick={goToNextSlide}
          >
            <ArrowRight size={24} />
          </button>

          <div className="container max-w-6xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Icon */}
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <CalculatorIcon size={36} className="text-white" />
                </div>
              </div>

              {/* Badge */}
              <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-4 py-1.5 rounded-full shadow-sm">
                Herramienta para Emprendedores y PyMEs
              </span>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight leading-tight">
                {carouselItems[currentSlide].title}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground">
                {carouselItems[currentSlide].description}
              </p>

              {/* Button */}
              <a
                href="#calculadora"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl mt-6"
              >
                Comenzar Ahora
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 bg-gradient-to-b from-white to-background relative" id="calculadora">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                Calculadora Inteligente
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-6">
                Calcula el costo final de tus productos
              </h2>
              <p className="text-lg text-muted-foreground">
                Determina el precio de venta ideal para tus productos considerando todos los impuestos, comisiones y
                gastos, y haz que tu negocio sea rentable.
              </p>
            </div>

            <div className="p-6 md:p-8">
              <ProductPricingPage />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Index
