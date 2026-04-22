import React from "react";
import { Coffee, Laptop, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Coffee size={32} className="text-[#4CAF50]" />,
      title: "1. Conosciamo il tuo locale",
      description: "Ci racconti la tua storia, chi sono i tuoi clienti e cosa vuoi comunicare. Capiamo insieme le tue esigenze per creare qualcosa di unico.",
    },
    {
      icon: <Laptop size={32} className="text-[#4CAF50]" />,
      title: "2. Creiamo il sito su misura",
      description: "Sviluppiamo il sito web con un design accattivante, veloce da caricare e perfetto sia per smartphone che per computer.",
    },
    {
      icon: <ShieldCheck size={32} className="text-[#4CAF50]" />,
      title: "3. Gestiamo tutto noi",
      description: "Una volta online, ci occupiamo noi della manutenzione, degli aggiornamenti e della sicurezza. Tu pensa solo al tuo locale.",
    },
  ];

  return (
    <section id="chi-siamo" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Come funziona?
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">
            Tre semplici passi per portare la tua attività online, senza stress e con il massimo risultato.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gray-200 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(76,175,80,0.1)] mb-6 border-4 border-white group-hover:border-[#E8F5E9] group-hover:-translate-y-2 transition-all duration-300 relative">
                {step.icon}
                <div className="absolute -inset-2 bg-[#4CAF50] opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300 blur-xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-[#4A4A4A] leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
