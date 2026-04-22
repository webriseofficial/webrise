import React from "react";
import { Store, MapPin, CalendarCheck } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      icon: <Store size={40} className="text-[#4CAF50]" />,
      title: "Siti Vetrina",
      description: "Il tuo biglietto da visita online. Mostra i tuoi prodotti, il tuo menu o i tuoi servizi in modo chiaro e professionale.",
      color: "bg-[#E8F5E9]",
    },
    {
      icon: <MapPin size={40} className="text-[#4CAF50]" />,
      title: "SEO Locale",
      description: "Fatti trovare dai clienti della tua città quando cercano su Google. Ottimizziamo la tua presenza online per farti spiccare.",
      color: "bg-[#F3E5F5]",
    },
    {
      icon: <CalendarCheck size={40} className="text-[#4CAF50]" />,
      title: "Prenotazioni Online",
      description: "Ricevi appuntamenti o ordini direttamente dal sito. Riduci le telefonate e gestisci tutto con un click.",
      color: "bg-[#E3F2FD]",
    },
  ];

  return (
    <section id="servizi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            I nostri servizi
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">
            Soluzioni complete pensate per le piccole attività che vogliono crescere e farsi notare online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-[0_8px_30px_rgba(76,175,80,0.1)] border border-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} transition-colors duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
