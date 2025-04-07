"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, BarChart3, Calculator, Mail, Phone, MapPin } from "lucide-react"

const About = () => {
  const [activeTab, setActiveTab] = useState("servicios")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative">
        {/* Back button */}
        <div className="mb-8">
          <a href="/" className="flex items-center gap-2 text-blue-600 hover:underline transition-colors">
            <ArrowLeft className="w-4 h-4" /> Regresar al inicio
          </a>
        </div>

        {/* About Us Section - Enhanced */}
        <motion.div
          className="text-center mb-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>

          {/* Section header */}
          <div className="relative">
            <motion.span
              className="inline-block bg-blue-100 text-blue-600 px-5 py-2 rounded-full mb-5 font-medium shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Nuestra Empresa
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black drop-shadow-lg">
  Sobre nosotros
</h2>


            <div className="w-20 h-1 bg-blue-500 mx-auto mb-10 rounded-full"></div>
          </div>

          {/* Cards grid */}
          <motion.div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto" variants={staggerChildren}>
            {/* Card izquierda */}
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group h-full flex flex-col"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </span>
                  Nuestra Misión
                </h3>

                <div className="space-y-4 flex-grow">
                  <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-100 pl-4 py-1">
                    Somos un grupo de emprendedores de distintos rubros que sabemos lo difícil y complicado que es
                    desarrollar un negocio en este país y todo lo que eso implica.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-100 pl-4 py-1">
                    Como muchas personas, sabemos lo difícil que es ponerle un precio a un producto o servicio, pese a
                    que tengamos claro el costo, siempre hay algo más que termina afectando nuestra ganancia final.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card derecha */}
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group h-full flex flex-col"
              variants={fadeIn}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-blue-50 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  Nuestra Solución
                </h3>

                <div className="space-y-4 flex-grow">
                  <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-100 pl-4 py-1">
                    Por eso creamos Calculadora de precios, un nombre fácil de recordar y que hace referencia a algo que
                    casi todos los emprendedores buscamos alguna vez, cómo calcular el precio de nuestro producto o
                    servicio.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-100 pl-4 py-1">
                    Con calculadora de precios, vas a saber tu ganancia neta descontando todos los impuestos y servicios
                    que podes tener solamente poniendo tu costo del producto o servicio y seleccionando algunos puntos
                    claves como provincia, servicio, pagos, etc.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <section className="py-16 bg-secondary/50 relative overflow-hidden rounded-2xl mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20"></div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 border border-border shadow-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="font-medium">Consultoría financiera</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Análisis de costos, precios y rentabilidad para tu negocio.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="font-medium">Asesoría impositiva</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Optimización de la estructura impositiva de tu empresa.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <span className="font-medium">Estrategia de precios</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Desarrollo de estrategias de precios competitivos y rentables.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="visible" variants={fadeIn}>
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setActiveTab("servicios")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "servicios"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => setActiveTab("equipo")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "equipo" ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Nuestro Equipo
            </button>
            <button
              onClick={() => setActiveTab("contacto")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "contacto"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Contacto
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {activeTab === "servicios" && (
              <motion.div variants={fadeIn} initial="hidden" animate="visible" key="servicios">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Nuestros servicios</h3>
                <ul className="grid gap-6 md:grid-cols-2">
                  <li className="p-6 border bg-gray-50 shadow-sm rounded-lg flex gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-3 rounded-full h-fit">
                      <BarChart3 className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Consultoría financiera</h4>
                      <p className="text-gray-600">Análisis detallado de costos, precios y rentabilidad.</p>
                    </div>
                  </li>
                  <li className="p-6 border bg-gray-50 shadow-sm rounded-lg flex gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-3 rounded-full h-fit">
                      <Calculator className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-2">Asesoría impositiva</h4>
                      <p className="text-gray-600">Optimización fiscal para empresas.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === "equipo" && (
              <motion.div variants={fadeIn} initial="hidden" animate="visible" key="equipo">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Nuestro equipo</h3>
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      name: "Julian Pogonza",
                      role: "Director Financiero",
                      image: "https://media.licdn.com/dms/image/v2/C4D03AQFfBN-6wPnEdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1601868570891?e=1749686400&v=beta&t=xln7zEl-yswErB4NUP4ntBsTLBCcb2h5qk6ts1xe4hI",
                    },
                    {
                      name: "Francisco Passarelli",
                      role: "Software Developer",
                      image: "/fran.jpg",
                    },
                    {
                      name: "Jero",
                      role: "Estratega de Precios",
                      image: "/placeholder.svg?height=300&width=300",
                    },
                  ].map((member, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 border shadow-md rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="relative mb-5 overflow-hidden rounded-lg aspect-square">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={`Foto de ${member.name}`}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full text-white">
                            <div className="flex gap-3 justify-center">
                              <a
                                href="#"
                                className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                  <rect x="2" y="9" width="4" height="12"></rect>
                                  <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                              </a>
                              <a
                                href="#"
                                className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm">
                          Experto con más de 10 años de experiencia en el sector financiero y empresarial.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "contacto" && (
              <motion.div variants={fadeIn} initial="hidden" animate="visible" key="contacto">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Contáctanos</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-6">
                      <li className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="text-blue-600 w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Email</p>
                          <p className="font-medium">contacto@tuempresa.com</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Phone className="text-blue-600 w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                          <p className="font-medium">+54 11 1234-5678</p>
                        </div>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <MapPin className="text-blue-600 w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Dirección</p>
                          <p className="font-medium">Av. Corrientes 1234, CABA</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h4 className="font-medium mb-4">Envíanos un mensaje</h4>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Nombre"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Mensaje"
                          rows={4}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Enviar mensaje
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

