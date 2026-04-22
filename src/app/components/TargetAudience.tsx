import React from "react";
import { Utensils, Coffee, ShoppingBag, Wrench, Scissors } from "lucide-react";
import { motion } from "motion/react";

export function TargetAudience() {
  const industries = [
    { icon: <Utensils size={48} />, name: "Ristoranti & Pizzerie" },
    { icon: <Coffee size={48} />, name: "Bar & Caffetterie" },
    { icon: <ShoppingBag size={48} />, name: "Negozi al Dettaglio" },
    { icon: <Wrench size={48} />, name: "Officine & Artigiani" },
    { icon: <Scissors size={48} />, name: "Parrucchieri & Estetica" },
    // Duplicate for infinite effect
    { icon: <Utensils size={48} />, name: "Ristoranti & Pizzerie" },
    { icon: <Coffee size={48} />, name: "Bar & Caffetterie" },
    { icon: <ShoppingBag size={48} />, name: "Negozi al Dettaglio" },
    { icon: <Wrench size={48} />, name: "Officine & Artigiani" },
    { icon: <Scissors size={48} />, name: "Parrucchieri & Estetica" },
  ];

  return (
    <section className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Per chi lavoriamo?
        </h2>
        <p className="text-xl text-[#4A4A4A] max-w-2xl mx-auto">
          Dalla bottega all'angolo all'officina storica. Aiutiamo tutte le attività locali a crescere grazie al web.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap group pb-8">
        {/* Left fade gradient */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F5F7FA] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-8 px-4"
        >
          {industries.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center w-64 h-64 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-[0_8px_30px_rgba(76,175,80,0.15)] hover:border-[#4CAF50] transition-all duration-300 group/item cursor-default"
            >
              <div className="w-24 h-24 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-[#4CAF50] mb-6 group-hover/item:bg-[#4CAF50] group-hover/item:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {item.name}
              </h3>
            </div>
          ))}
        </motion.div>

        {/* Right fade gradient */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F5F7FA] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
