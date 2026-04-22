import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { LoadingLink } from "./LoadingLink";

export function DemoBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] py-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-2xl backdrop-blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm mb-6"
          >
            <Sparkles size={16} className="animate-pulse" />
            Novità
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Scopri i nostri siti demo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Esplora esempi reali di siti web creati per officine, ristoranti, parrucchieri, bar e negozi. 
            Visualizza come potrebbe essere il tuo sito!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <LoadingLink
              to="/demo"
              className="group relative overflow-hidden bg-white text-[#4CAF50] px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 flex items-center gap-2"
            >
              <Eye size={20} />
              <span>Esplora le Demo</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#4CAF50]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </LoadingLink>

            <a
              href="#contatti"
              className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4CAF50] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              Richiedi il tuo sito
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
