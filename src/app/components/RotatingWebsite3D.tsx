import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const websiteTemplates = [
  {
    name: 'Ristorante',
    headerColor: '#C62828',
    accentColor: '#FFEBEE',
    darkAccent: '#EF5350',
    emoji: '🍝',
    title: 'Trattoria Bella Vista',
    subtitle: 'Cucina italiana autentica dal 1985',
    menuItems: ['Menu', 'Prenota', 'Galleria', 'Contatti'],
    heroText: 'Sapori autentici della tradizione italiana',
    cards: [
      { icon: '🍕', title: 'Menu del Giorno', desc: 'Piatti freschi ogni giorno' },
      { icon: '📅', title: 'Prenota Tavolo', desc: 'Riservazione online' },
      { icon: '⭐', title: 'Recensioni', desc: '4.9 stelle su Google' }
    ]
  },
  {
    name: 'Bar',
    headerColor: '#6A4E23',
    accentColor: '#FFF8E1',
    darkAccent: '#8D6E63',
    emoji: '☕',
    title: 'Caffè Centrale',
    subtitle: 'Il tuo punto di ritrovo in centro',
    menuItems: ['Menu', 'Eventi', 'Offerte', 'Contatti'],
    heroText: 'Caffè artigianale e dolci freschi',
    cards: [
      { icon: '☕', title: 'Caffetteria', desc: 'Miscela 100% Arabica' },
      { icon: '🎵', title: 'Live Music', desc: 'Ogni venerdì sera' },
      { icon: '🥐', title: 'Pasticceria', desc: 'Dolci fatti in casa' }
    ]
  },
  {
    name: 'Negozio',
    headerColor: '#4CAF50',
    accentColor: '#E8F5E9',
    darkAccent: '#66BB6A',
    emoji: '🛍️',
    title: 'Boutique Eleganza',
    subtitle: 'Moda e stile per ogni occasione',
    menuItems: ['Shop', 'Novità', 'Saldi', 'Chi siamo'],
    heroText: 'Nuova collezione primavera/estate',
    cards: [
      { icon: '👗', title: 'Abbigliamento', desc: 'Ultima tendenza' },
      { icon: '💰', title: 'Saldi -50%', desc: 'Fino al 31 Marzo' },
      { icon: '🚚', title: 'Spedizione', desc: 'Gratis sopra 50€' }
    ]
  },
  {
    name: 'Palestra',
    headerColor: '#FF6F00',
    accentColor: '#FFF3E0',
    darkAccent: '#FB8C00',
    emoji: '💪',
    title: 'FitZone Gym',
    subtitle: 'Allena il tuo corpo, libera la mente',
    menuItems: ['Corsi', 'Orari', 'Prezzi', 'Contatti'],
    heroText: 'Prima settimana gratuita per nuovi iscritti',
    cards: [
      { icon: '🏋️', title: 'Sala Pesi', desc: 'Attrezzature moderne' },
      { icon: '🧘', title: 'Corsi Yoga', desc: 'Tutti i giorni' },
      { icon: '👥', title: 'PT Personale', desc: 'Coach certificati' }
    ]
  },
  {
    name: 'Parrucchiere',
    headerColor: '#E91E63',
    accentColor: '#FCE4EC',
    darkAccent: '#EC407A',
    emoji: '💇',
    title: 'Salone Beauty',
    subtitle: 'Stile e bellezza su misura per te',
    menuItems: ['Servizi', 'Prenota', 'Team', 'Contatti'],
    heroText: 'Sconto 20% sulla prima visita',
    cards: [
      { icon: '✂️', title: 'Taglio & Piega', desc: 'Tecniche moderne' },
      { icon: '🎨', title: 'Colorazione', desc: 'Prodotti bio' },
      { icon: '💅', title: 'Manicure', desc: 'Unghie perfette' }
    ]
  },
];

export function RotatingWebsite3D() {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % websiteTemplates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const template = websiteTemplates[currentTemplate];

  return (
    <div className="w-full h-full flex items-center justify-center perspective-[1000px] py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTemplate}
          className="relative preserve-3d"
          initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
          animate={{ rotateY: 0, opacity: 1, scale: 1 }}
          exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          style={{
            transformStyle: "preserve-3d",
            width: "min(400px, 90%)",
            height: "280px"
          }}
        >
          {/* Browser Window */}
          <div 
            className="absolute inset-0 bg-white rounded-xl shadow-2xl overflow-hidden"
            style={{
              transform: "translateZ(0px)",
              transformStyle: "preserve-3d"
            }}
          >
            {/* Browser Top Bar */}
            <div className="h-8 bg-gray-800 flex items-center px-3 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Website Content */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-3 bg-[#F5F7FA] h-[calc(100%-2rem)] overflow-hidden"
            >
              {/* Header */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="h-12 rounded-lg mb-2 flex items-center px-3 gap-2 origin-left shadow-sm"
                style={{ backgroundColor: template.headerColor }}
              >
                <div className="text-base">{template.emoji}</div>
                <div className="text-[8px] font-bold text-white truncate flex-shrink-0 max-w-[60px]">
                  {template.title.split(' ')[0]}
                </div>
                <div className="flex-1"></div>
                {template.menuItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="text-[6px] font-medium text-white/90 hidden sm:block"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>

              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="bg-white rounded-lg mb-2 p-2 shadow-sm"
              >
                <div className="text-[7px] font-bold text-gray-800 mb-1 leading-tight">
                  {template.heroText}
                </div>
                <div className="flex items-center gap-1">
                  <div 
                    className="text-[6px] font-semibold px-2 py-1 rounded text-white"
                    style={{ backgroundColor: template.darkAccent }}
                  >
                    Scopri di più
                  </div>
                  <div 
                    className="text-[6px] font-semibold px-2 py-1 rounded border"
                    style={{ 
                      borderColor: template.darkAccent,
                      color: template.darkAccent
                    }}
                  >
                    Contattaci
                  </div>
                </div>
              </motion.div>

              {/* Content Cards */}
              <div className="grid grid-cols-3 gap-1.5">
                {template.cards.map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className="bg-white rounded-lg p-1.5 shadow-sm"
                  >
                    <div 
                      className="w-full aspect-square rounded mb-1 flex items-center justify-center text-xl"
                      style={{ backgroundColor: template.accentColor }}
                    >
                      {card.icon}
                    </div>
                    <div className="text-[6px] font-bold text-gray-800 mb-0.5 leading-tight truncate">
                      {card.title}
                    </div>
                    <div className="text-[5px] text-gray-500 leading-tight truncate">
                      {card.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Side Shadow */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/10 to-gray-900/30 rounded-xl pointer-events-none"
            style={{
              transform: "translateZ(0px) rotateY(0deg)",
              transformStyle: "preserve-3d"
            }}
          ></div>

          {/* Depth layers for 3D effect */}
          {[-1, -2, -3, -4, -5].map((z) => (
            <div 
              key={z}
              className="absolute inset-0 bg-gray-800/5 rounded-xl"
              style={{
                transform: `translateZ(${z}px)`,
                transformStyle: "preserve-3d"
              }}
            ></div>
          ))}
        </motion.div>
      </AnimatePresence>

      <style>{`
        .perspective-1000px {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}