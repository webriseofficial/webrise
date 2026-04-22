import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { 
  Monitor, Smartphone, Zap, Search, Shield, ArrowRight, 
  Menu, Star, Clock, MapPin, Phone, Scissors, Hammer, Utensils, CheckCircle2
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// --- COMPONENTE MOCK WEBSITE: "LUMINA" (Ristorante) ---
function LuminaMockSite({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`bg-white font-sans text-gray-900 w-full overflow-x-hidden ${isMobile ? 'text-sm' : ''}`}>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className={`flex items-center justify-between mx-auto ${isMobile ? 'px-4 py-3' : 'px-8 py-5 max-w-6xl'}`}>
          <div className={`font-serif font-bold tracking-widest ${isMobile ? 'text-lg' : 'text-2xl'}`}>LUMINA</div>
          {isMobile ? (
            <Menu className="w-5 h-5 text-gray-600" />
          ) : (
            <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#menu" className="hover:text-black transition-colors">Menu</a>
              <a href="#about" className="hover:text-black transition-colors">Filosofia</a>
              <a href="#contact" className="hover:text-black transition-colors">Contatti</a>
              <button className="bg-black text-white px-5 py-2.5 hover:bg-gray-800 transition-colors">Prenota Tavolo</button>
            </div>
          )}
        </div>
      </nav>
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3NTY1MTM1OXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Ristorante" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className={`relative z-10 text-center text-white ${isMobile ? 'px-6' : 'px-12 max-w-4xl'}`}>
          <span className="uppercase tracking-[0.3em] text-xs font-semibold mb-4 block text-white/80">Ristorante Contemporaneo</span>
          <h1 className={`font-serif mb-6 leading-tight ${isMobile ? 'text-4xl' : 'text-6xl md:text-7xl'}`}>Un'esperienza dei sensi.</h1>
          <p className={`text-white/90 mb-10 mx-auto ${isMobile ? 'text-base' : 'text-lg max-w-lg'}`}>La tradizione culinaria italiana incontra l'innovazione in un ambiente dal design inconfondibile.</p>
          <button className={`bg-white text-black font-medium hover:bg-gray-100 transition-colors ${isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4'}`}>Scopri il Menu</button>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className={`mx-auto grid ${isMobile ? 'grid-cols-1 gap-8 px-6 text-center' : 'grid-cols-3 gap-12 px-8 max-w-6xl'}`}>
          <div className="flex flex-col items-center justify-center">
            <Star className="w-6 h-6 mb-3 text-gray-400" />
            <h3 className="font-serif text-xl mb-2">Qualità Prima</h3>
            <p className="text-gray-500 text-sm">Ingredienti freschi e selezionati quotidianamente a km zero.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Clock className="w-6 h-6 mb-3 text-gray-400" />
            <h3 className="font-serif text-xl mb-2">Atmosfera</h3>
            <p className="text-gray-500 text-sm">Un ambiente curato nei minimi dettagli per farti rilassare.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Star className="w-6 h-6 mb-3 text-gray-400" />
            <h3 className="font-serif text-xl mb-2">Alta Cucina</h3>
            <p className="text-gray-500 text-sm">Chef premiati che reinterpretano i classici con maestria.</p>
          </div>
        </div>
      </section>
      <section className={`py-20 mx-auto ${isMobile ? 'px-6' : 'px-8 max-w-6xl'}`}>
        <div className={`flex ${isMobile ? 'flex-col gap-10' : 'flex-row items-center gap-16'}`}>
          <div className={`flex-1 ${isMobile ? 'order-2' : ''}`}>
            <ImageWithFallback src="https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZGlzaCUyMHBsYXRpbmd8ZW58MXx8fHwxNzc1NzI5NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Piatto Gourmet" className="w-full aspect-square object-cover" />
          </div>
          <div className="flex-1">
            <span className="uppercase tracking-[0.2em] text-xs font-semibold mb-3 block text-gray-500">Il Nostro Menu</span>
            <h2 className={`font-serif mb-6 ${isMobile ? 'text-3xl' : 'text-4xl'}`}>Arte nel piatto, gioia al palato.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Ogni creazione è un viaggio. I nostri chef uniscono tecniche moderne a sapori antichi per offrirti un'esperienza di degustazione che non dimenticherai facilmente.</p>
            <a href="#" className="inline-flex items-center gap-2 font-medium border-b border-black pb-1">Vedi i piatti <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-16">
        <div className={`mx-auto grid ${isMobile ? 'grid-cols-1 gap-10 px-6' : 'grid-cols-3 gap-8 px-8 max-w-6xl'}`}>
          <div><div className="font-serif font-bold tracking-widest text-xl mb-4">LUMINA</div></div>
          <div><h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contatti</h4><p className="text-white/60 text-sm">Via Roma 123, Milano<br/>+39 02 1234567</p></div>
        </div>
      </footer>
    </div>
  );
}

// --- COMPONENTE MOCK WEBSITE: "MASTRO LEGNO" (Artigiano) ---
function ArtisanMockSite({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`bg-[#FDFBF7] font-serif text-[#3A2E24] w-full overflow-x-hidden ${isMobile ? 'text-sm' : ''}`}>
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EAE0D5]">
        <div className={`flex items-center justify-between mx-auto ${isMobile ? 'px-4 py-3' : 'px-8 py-5 max-w-6xl'}`}>
          <div className={`font-bold tracking-wide flex items-center gap-2 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
            <Hammer className="w-6 h-6 text-[#8B5A2B]" /> MASTRO LEGNO
          </div>
          {isMobile ? (
            <Menu className="w-5 h-5 text-[#8B5A2B]" />
          ) : (
            <div className="flex items-center gap-8 text-sm font-medium font-sans text-[#5C4A3D]">
              <a href="#" className="hover:text-[#8B5A2B]">Chi Siamo</a>
              <a href="#" className="hover:text-[#8B5A2B]">Creazioni</a>
              <a href="#" className="hover:text-[#8B5A2B]">Restauro</a>
              <button className="bg-[#8B5A2B] text-white px-5 py-2 hover:bg-[#6B4420] rounded-sm transition-colors">Richiedi Preventivo</button>
            </div>
          )}
        </div>
      </nav>
      <section className="relative h-[70vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1722411927318-ba7be472dd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NzU3MzAxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Falegnameria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#3A2E24]/60"></div>
        </div>
        <div className={`relative z-10 text-center text-white ${isMobile ? 'px-6' : 'px-12 max-w-3xl'}`}>
          <h1 className={`font-serif mb-4 ${isMobile ? 'text-4xl' : 'text-6xl'}`}>L'arte di dare forma alla natura.</h1>
          <p className={`text-white/90 mb-8 font-sans font-light ${isMobile ? 'text-base' : 'text-lg'}`}>Mobili su misura e restauri dal 1982. La passione per il legno tramandata da generazioni.</p>
          <button className="bg-white text-[#3A2E24] px-8 py-3 font-sans font-semibold text-sm tracking-wide hover:bg-[#EAE0D5]">Scopri il Laboratorio</button>
        </div>
      </section>
      <section className={`py-20 mx-auto ${isMobile ? 'px-6' : 'px-8 max-w-6xl'}`}>
        <div className="text-center mb-16">
          <span className="font-sans text-[#8B5A2B] font-bold text-sm tracking-wider uppercase mb-2 block">I Nostri Servizi</span>
          <h2 className={`text-3xl md:text-4xl font-bold`}>Maestria Artigiana</h2>
        </div>
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-10' : 'grid-cols-2 gap-16'}`}>
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-6 aspect-[4/3] rounded-sm">
              <ImageWithFallback src="https://images.unsplash.com/photo-1627417831791-0ebccf44076c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3b29kZW4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc1NzMwMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Mobili su Misura" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl mb-2">Mobili su Misura</h3>
            <p className="font-sans text-[#5C4A3D] leading-relaxed">Progettiamo e realizziamo arredi unici per la tua casa, scegliendo solo le essenze migliori.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-6 aspect-[4/3] rounded-sm">
              <ImageWithFallback src="https://images.unsplash.com/photo-1685022515804-af2e8b3b75e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjBoYW5kcyUyMHdvb2R8ZW58MXx8fHwxNzc1NzMwMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Restauro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 className="text-2xl mb-2">Restauro Antico</h3>
            <p className="font-sans text-[#5C4A3D] leading-relaxed">Riportiamo a nuova vita i tuoi mobili di pregio con tecniche tradizionali e prodotti naturali.</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#2C231B] text-[#EAE0D5] py-12 font-sans text-sm text-center">
        <p>© Mastro Legno Falegnameria. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}

// --- COMPONENTE MOCK WEBSITE: "AURA SALON" (Parrucchiere) ---
function HairdresserMockSite({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`bg-white font-sans text-[#111] w-full overflow-x-hidden ${isMobile ? 'text-sm' : ''}`}>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4">
        <div className={`flex items-center justify-between mx-auto ${isMobile ? 'px-4' : 'px-8 max-w-6xl'}`}>
          <div className={`font-light tracking-[0.2em] uppercase ${isMobile ? 'text-sm' : 'text-lg'}`}>A U R A <span className="font-semibold">S A L O N</span></div>
          {isMobile ? (
            <Menu className="w-5 h-5" />
          ) : (
            <div className="flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-gray-500">
              <a href="#" className="hover:text-black">Servizi</a>
              <a href="#" className="hover:text-black">Il Salone</a>
              <a href="#" className="hover:text-black">Team</a>
              <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors">Prenota Ora</button>
            </div>
          )}
        </div>
      </nav>
      <header className="flex flex-col md:flex-row min-h-[60vh]">
        <div className="flex-1 flex flex-col justify-center p-8 lg:p-16 bg-[#FAFAFA]">
          <span className="text-[#A68A64] text-xs font-bold tracking-widest uppercase mb-4">Hair Studio & Spa</span>
          <h1 className={`font-light leading-tight mb-6 ${isMobile ? 'text-4xl' : 'text-5xl lg:text-6xl'}`}>
            Esprimi la tua <br/><span className="font-semibold">vera bellezza.</span>
          </h1>
          <p className="text-gray-500 mb-8 max-w-md leading-relaxed">
            Nel nostro salone offriamo trattamenti personalizzati per la cura dei tuoi capelli, utilizzando solo prodotti premium e tecniche all'avanguardia.
          </p>
          <div>
            <button className="bg-black text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-[#A68A64] transition-colors">Il Listino</button>
          </div>
        </div>
        <div className={`flex-1 ${isMobile ? 'h-[300px]' : ''}`}>
          <ImageWithFallback src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU3MjAxODB8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Salon" className="w-full h-full object-cover" />
        </div>
      </header>
      <section className={`py-20 mx-auto ${isMobile ? 'px-6' : 'px-8 max-w-6xl'}`}>
        <div className={`flex items-center gap-12 ${isMobile ? 'flex-col' : 'flex-row'}`}>
          <div className="flex-1">
            <ImageWithFallback src="https://images.unsplash.com/photo-1664664475146-79f47a705859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyY3V0JTIwZmFzaGlvbiUyMG1vZGVsfGVufDF8fHx8MTc3NTczMDEzMHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Haircut Model" className="w-full aspect-[3/4] object-cover" />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl font-light">Servizi <span className="font-semibold">Esclusivi</span></h2>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold mb-1">Taglio & Piega</h3><p className="text-xs text-gray-500">Consulenza, shampoo relax, taglio su misura.</p></div>
                <span className="font-semibold text-[#A68A64]">da 45€</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold mb-1">Colorazione Balayage</h3><p className="text-xs text-gray-500">Schiariture naturali e tonalizzazione.</p></div>
                <span className="font-semibold text-[#A68A64]">da 90€</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-4">
                <div><h3 className="font-semibold mb-1">Trattamento Keratina</h3><p className="text-xs text-gray-500">Ricostruzione profonda del capello.</p></div>
                <span className="font-semibold text-[#A68A64]">da 60€</span>
              </div>
            </div>
            <a href="#" className="inline-block mt-4 text-xs font-bold tracking-widest uppercase border-b-2 border-black pb-1 hover:text-[#A68A64] hover:border-[#A68A64] transition-colors">Vedi tutti i servizi</a>
          </div>
        </div>
      </section>
      <footer className="bg-[#111] text-white py-12 text-center text-xs uppercase tracking-widest">
        <p className="text-gray-400">Aura Salon © 2026</p>
      </footer>
    </div>
  );
}


// --- PAGINA PRINCIPALE WEBRISE ---
export default function DemoPage() {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeDemo, setActiveDemo] = useState<'restaurant' | 'artisan' | 'hairdresser'>('restaurant');

  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#4CAF50]" />,
      title: "Prestazioni Eccellenti",
      desc: "Caricamento fulmineo e navigazione fluida per non perdere clienti."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#4CAF50]" />,
      title: "Design 100% Responsive",
      desc: "Perfetto su smartphone, tablet e PC, adattandosi automaticamente."
    },
    {
      icon: <Search className="w-5 h-5 text-[#4CAF50]" />,
      title: "Ottimizzato per Google",
      desc: "Struttura SEO integrata per farti trovare facilmente da chi ti cerca."
    },
    {
      icon: <Shield className="w-5 h-5 text-[#4CAF50]" />,
      title: "Design Premium",
      desc: "Interfacce curate, moderne e progettate per convertire i visitatori."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/20 text-[#4CAF50] font-semibold text-sm mb-6">
            <Star className="w-4 h-4 fill-current" />
            La Qualità Webrise
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ecco cosa siamo in grado di realizzare.
          </h1>
          <p className="text-lg text-gray-600">
            Non usiamo template predefiniti. Creiamo siti web premium, veloci ed eleganti, 
            progettati su misura per far percepire il vero valore della tua attività.
          </p>
        </div>

        {/* Demo Switcher */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveDemo('restaurant')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeDemo === 'restaurant' 
                ? 'bg-[#4CAF50] text-white shadow-lg shadow-[#4CAF50]/30' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Utensils className="w-4 h-4" /> Ristorante
          </button>
          <button 
            onClick={() => setActiveDemo('artisan')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeDemo === 'artisan' 
                ? 'bg-[#4CAF50] text-white shadow-lg shadow-[#4CAF50]/30' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Hammer className="w-4 h-4" /> Artigiano
          </button>
          <button 
            onClick={() => setActiveDemo('hairdresser')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
              activeDemo === 'hairdresser' 
                ? 'bg-[#4CAF50] text-white shadow-lg shadow-[#4CAF50]/30' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Scissors className="w-4 h-4" /> Parrucchiere
          </button>
        </div>

        {/* Main Showcase Area */}
        <div className="flex flex-col xl:flex-row gap-12 items-start justify-center">
          
          {/* Left/Top: Feature List */}
          <div className="w-full xl:w-80 shrink-0 space-y-8 order-2 xl:order-1">
            <div className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">
                Gli standard dei nostri siti
              </h3>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-white shadow-xl text-center">
              <h3 className="text-xl font-bold mb-3">Vuoi un sito così?</h3>
              <p className="text-gray-400 text-sm mb-6">
                Richiedi un'analisi gratuita. Studieremo il tuo caso e ti proporremo la soluzione ideale.
              </p>
              <Link 
                to="/consulenza" 
                className="inline-flex items-center justify-center w-full bg-[#4CAF50] hover:bg-[#8BC34A] text-white py-3 px-6 rounded-xl font-bold transition-colors gap-2"
              >
                Iniziamo Ora <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right/Bottom: The Mock Showcase Container */}
          <div className="flex-1 w-full flex flex-col items-center order-1 xl:order-2 overflow-hidden">
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-full shadow-sm border border-gray-200 mb-8 z-10">
              <button
                onClick={() => setViewMode('desktop')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  viewMode === 'desktop' 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Monitor className="w-4 h-4" /> Desktop
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  viewMode === 'mobile' 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Smartphone className="w-4 h-4" /> Mobile
              </button>
            </div>

            {/* Browser/Device Frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={viewMode}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative bg-white shadow-2xl overflow-hidden flex flex-col ${
                  viewMode === 'desktop' 
                    ? 'w-full max-w-5xl rounded-2xl border border-gray-200' 
                    : 'w-[375px] h-[812px] rounded-[3rem] border-[12px] border-gray-900 shadow-[0_20px_60px_rgba(0,0,0,0.15)] shrink-0'
                }`}
              >
                {/* Header (macOS window or Mobile Notch area) */}
                {viewMode === 'desktop' ? (
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center shrink-0">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white flex items-center gap-2 text-xs text-gray-500 py-1.5 px-32 rounded-md shadow-sm border border-gray-200">
                        <Shield className="w-3 h-3" />
                        {activeDemo === 'restaurant' && 'lumina-ristorante.it'}
                        {activeDemo === 'artisan' && 'mastrolegno-artigiano.it'}
                        {activeDemo === 'hairdresser' && 'aura-salon.it'}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-[60] shrink-0 pointer-events-none">
                    <div className="w-40 h-6 bg-gray-900 rounded-b-3xl"></div>
                  </div>
                )}

                {/* Website Content Area - Scrollable */}
                <div 
                  className={`relative flex-1 bg-white overflow-y-auto overflow-x-hidden ${
                    viewMode === 'desktop' ? 'max-h-[700px]' : 'h-full'
                  } scrollbar-hide`}
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeDemo}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeDemo === 'restaurant' && <LuminaMockSite isMobile={viewMode === 'mobile'} />}
                      {activeDemo === 'artisan' && <ArtisanMockSite isMobile={viewMode === 'mobile'} />}
                      {activeDemo === 'hairdresser' && <HairdresserMockSite isMobile={viewMode === 'mobile'} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>
        </div>
      </div>
    </div>
  );
}