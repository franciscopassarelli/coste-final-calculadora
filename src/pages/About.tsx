"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Calculator, CreditCard, Users, Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("servicios");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="mb-8">
          <a href="/" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Regresar al inicio
          </a>
        </div>
     

        <motion.div className="max-w-4xl mx-auto" initial="hidden" animate="visible" variants={fadeIn}>
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full mb-4">Nuestra Empresa</span>
            <h2 className="text-4xl font-semibold mb-6">Sobre nosotros</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos una consultora especializada en ayudar a emprendedores y PyMEs a optimizar sus operaciones y maximizar su rentabilidad a través de soluciones personalizadas.
            </p>
          </div>
             <section className="py-16 bg-secondary/50 relative overflow-hidden">
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

          <div className="flex space-x-4 mb-8">
            <button onClick={() => setActiveTab("servicios")} className={`px-4 py-2 ${activeTab === "servicios" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>Servicios</button>
            <button onClick={() => setActiveTab("equipo")} className={`px-4 py-2 ${activeTab === "equipo" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>Nuestro Equipo</button>
            <button onClick={() => setActiveTab("contacto")} className={`px-4 py-2 ${activeTab === "contacto" ? "bg-blue-600 text-white" : "bg-gray-200"}`}>Contacto</button>
          </div>

          {activeTab === "servicios" && (
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-6">Nuestros servicios</h3>
              <ul className="grid gap-6 md:grid-cols-2">
                <li className="p-4 border bg-white shadow rounded-lg flex gap-4">
                  <BarChart3 className="text-blue-600" />
                  <div>
                    <h4 className="font-medium">Consultoría financiera</h4>
                    <p className="text-gray-600">Análisis detallado de costos, precios y rentabilidad.</p>
                  </div>
                </li>
                <li className="p-4 border bg-white shadow rounded-lg flex gap-4">
                  <Calculator className="text-blue-600" />
                  <div>
                    <h4 className="font-medium">Asesoría impositiva</h4>
                    <p className="text-gray-600">Optimización fiscal para empresas.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}

          {activeTab === "equipo" && (
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-6">Nuestro equipo</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { name: "Julian Pogonza", role: "Director Financiero" },
                  { name: "Cris-Ba", role: "Asesor Impositivo" },
                  { name: "Jero", role: "Estratega de Precios" },
                ].map((member, index) => (
                  <div key={index} className="p-4 border bg-white shadow rounded-lg text-center">
                    <Users className="text-blue-600 w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-blue-600 text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "contacto" && (
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-6">Contáctanos</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><Mail className="text-blue-600" /> contacto@tuempresa.com</li>
                <li className="flex items-center gap-3"><Phone className="text-blue-600" /> +54 11 1234-5678</li>
                <li className="flex items-center gap-3"><MapPin className="text-blue-600" /> Av. Corrientes 1234, CABA</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;