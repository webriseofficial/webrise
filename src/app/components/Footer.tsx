import React from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router";
import logoImg from "figma:asset/cd273d0bb67ba7c7599e39daf6d3877ed218dec7.png";

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <footer className="bg-[#030213] text-white pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-6 relative group">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-md group-hover:bg-white/20 transition-all duration-300"></div>
              <img 
                src={logoImg} 
                alt="Webrise Logo" 
                className="relative h-24 w-24 object-contain rounded-full p-2 bg-white shadow-lg border-2 border-transparent group-hover:border-[#4CAF50] transition-all duration-300" 
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              L'agenzia web dedicata alle piccole attività locali. Aiutiamo negozi, bar e ristoranti a crescere nel mondo digitale senza complicazioni.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-[#4CAF50] hover:text-white transition-all duration-300 shadow-sm">
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/webrisedesign?igsh=MWJ4eXZweWRnMjMwYg==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:bg-[#4CAF50] hover:text-white transition-all duration-300 shadow-sm"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:ml-12">
            <h3 className="text-lg font-bold mb-6 text-white">Link Rapidi</h3>
            <ul className="space-y-4">
              <li>
                {isHome ? (
                  <a href="#chi-siamo" className="text-gray-400 hover:text-[#4CAF50] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity"></span> Chi siamo
                  </a>
                ) : (
                  <Link to="/#chi-siamo" className="text-gray-400 hover:text-[#4CAF50] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity"></span> Chi siamo
                  </Link>
                )}
              </li>
              <li>
                {isHome ? (
                  <a href="#servizi" className="text-gray-400 hover:text-[#4CAF50] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity"></span> Servizi offerti
                  </a>
                ) : (
                  <Link to="/#servizi" className="text-gray-400 hover:text-[#4CAF50] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity"></span> Servizi offerti
                  </Link>
                )}
              </li>
              <li>
                <Link to="/demo" className="text-gray-400 hover:text-[#4CAF50] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity"></span> Demo
                </Link>
              </li>
              <li>
                <Link to="/consulenza" className="text-[#4CAF50] font-medium hover:text-[#8BC34A] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]"></span> Richiedi Consulenza
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contatti" className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white">I nostri recapiti</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-[#4CAF50]/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Phone size={20} className="text-[#4CAF50]" />
                </div>
                <a href="tel:+39061234567" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  +39 06 123 4567
                </a>
              </li>
              <li className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-[#4CAF50]/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4CAF50]/20 transition-colors">
                  <Mail size={20} className="text-[#4CAF50]" />
                </div>
                <a href="mailto:info@webrise.it" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  info@webrise.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Webrise. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}