import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Link, useLocation } from "react-router";
import logoImg from "figma:asset/cd273d0bb67ba7c7599e39daf6d3877ed218dec7.png";
import { LoadingLink } from "./LoadingLink";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "Chi siamo", href: isHome ? "#chi-siamo" : "/#chi-siamo" },
    { label: "Servizi", href: isHome ? "#servizi" : "/#servizi" },
    { label: "Demo", href: "/demo" },
    { label: "Contatti", href: isHome ? "#contatti" : "/#contatti" },
  ];

  return (
    <>
      
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100/50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 flex items-center h-full py-3"
            >
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="relative"
                  >
                    <img 
                      src={logoImg} 
                      alt="Webrise Logo" 
                      className="h-12 w-12 sm:h-14 sm:w-14 object-contain drop-shadow-sm mix-blend-multiply" 
                    />
                  </motion.div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]">
                    Webrise
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Web Agency</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1">
              {navLinks.map((link, i) => (
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="relative px-4 py-2 text-[#4A4A4A] hover:text-[#4CAF50] font-medium transition-colors group overflow-hidden rounded-full"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 bg-[#E8F5E9] transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out origin-center"></span>
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-4 py-2 text-[#4A4A4A] hover:text-[#4CAF50] font-medium transition-colors group overflow-hidden rounded-full"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 bg-[#E8F5E9] transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out origin-center"></span>
                  </a>
                )
              ))}
            </nav>

            {/* CTA Desktop */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden md:flex items-center"
            >
              <LoadingLink
                to="/consulenza"
                className="relative overflow-hidden group bg-[#4CAF50] text-white px-6 py-2.5 rounded-xl font-semibold shadow-[0_4px_14px_rgba(76,175,80,0.3)] hover:shadow-[0_6px_20px_rgba(139,195,74,0.4)] transition-all duration-300"
              >
                <span className="relative z-10">Richiedi Consulenza</span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </LoadingLink>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#4A4A4A] hover:text-[#4CAF50] focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-[#4A4A4A] hover:text-[#4CAF50] hover:bg-[#F5F7FA] rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-[#4A4A4A] hover:text-[#4CAF50] hover:bg-[#F5F7FA] rounded-xl transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <div className="pt-4">
                  <Link
                    to="/consulenza"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center bg-[#4CAF50] text-white px-6 py-3 rounded-xl font-semibold shadow-md"
                  >
                    Richiedi Consulenza
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}