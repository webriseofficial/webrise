import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { RotatingWebsite3D } from "./RotatingWebsite3D";
import { LoadingLink } from "./LoadingLink";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const benefits = [
    "Design su misura per la tua attività",
    "Ottimizzazione per smartphone",
    "Assistenza dedicata",
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-36">
      {/* Interactive Background Elements */}
      <motion.div 
        animate={{ 
          x: mousePosition.x * 0.02, 
          y: mousePosition.y * 0.02 
        }}
        className="absolute top-0 right-0 -mr-64 -mt-32 w-[600px] h-[600px] bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] rounded-full blur-3xl opacity-60 pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: mousePosition.x * -0.015, 
          y: mousePosition.y * -0.015 
        }}
        className="absolute bottom-0 left-0 -ml-64 -mb-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#E8F5E9] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Dai vita alla tua <br className="hidden lg:block" />
              <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]">attività online</span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-3 bg-[#8BC34A]/20 -z-10 origin-left rounded-full"
                ></motion.span>
              </span>
            </h1>

            <p className="text-xl text-[#4A4A4A] mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">Siti web professionali per negozi, bar e ristoranti della tua città. Non serve essere esperti di tecnologia, pensiamo a tutto noi.</p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <LoadingLink
                to="/consulenza"
                className="w-full sm:w-auto relative flex items-center justify-center gap-2 bg-[#4CAF50] hover:bg-[#8BC34A] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgba(76,175,80,0.3)] hover:shadow-[0_12px_40px_rgba(139,195,74,0.4)] transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded-xl"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Richiedi una consulenza
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </LoadingLink>
              <LoadingLink
                to="/demo"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border-2 border-gray-100 hover:border-[#4CAF50] hover:bg-[#F5F7FA] text-[#4A4A4A] hover:text-[#4CAF50] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-white flex items-center justify-center transition-colors shadow-sm">
                  <Play size={14} className="ml-0.5 text-[#4CAF50]" fill="currentColor" />
                </div>
                Guarda le Demo
              </LoadingLink>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-[#4A4A4A]">
              {benefits.map((benefit, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  key={index} 
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 size={20} className="text-[#4CAF50] flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full relative">
              <RotatingWebsite3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}