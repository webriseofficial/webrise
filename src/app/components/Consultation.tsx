import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, UserCircle2, AtSign, Smartphone, Store, MessageCircle, CheckCircle2 } from "lucide-react";
import { getSupabaseClient } from '../../utils/supabase/client';

export function Consultation() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    nome_attivita: '',
    messaggio: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const supabase = getSupabaseClient();
      
      if (!supabase) {
        throw new Error('Connessione al database non disponibile');
      }

      // Prepara i dati da inserire nella tabella "richieste"
      const dataToInsert = {
        'nome e cognome': formData.nome.trim(),
        'email': formData.email.trim(),
        'telefono': formData.telefono.trim() || null,
        'nome_attività': formData.nome_attivita.trim(),
        'descrizione': formData.messaggio.trim() || null
      };

      // Inserisci direttamente nella tabella "richieste"
      const { error } = await supabase
        .from('richieste')
        .insert([dataToInsert]);

      if (error) {
        console.error('Errore Supabase:', error);
        throw new Error(error.message || 'Errore durante il salvataggio');
      }

      setIsSuccess(true);
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        nome_attivita: '',
        messaggio: ''
      });
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error) {
      console.error('Errore durante l\'invio della richiesta:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Si è verificato un errore. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent transition-all duration-300 backdrop-blur-sm";
  const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300";

  return (
    <section className="py-24 relative overflow-hidden bg-gray-900 w-full h-full flex items-center">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#4CAF50] blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#8BC34A] blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#4CAF50] font-semibold text-sm mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4CAF50] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4CAF50]"></span>
              </span>
              Consulenza Strategica
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Pronto a far decollare il tuo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]">business?</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Richiedi una consulenza gratuita e senza impegno. Analizzeremo la tua attività e ti proporremo la strategia digitale su misura per te.
            </p>

            <div className="space-y-6">
              {[
                { title: "Analisi Gratuita", desc: "Studiamo il tuo mercato locale" },
                { title: "Strategia su Misura", desc: "Nessun pacchetto preimpostato" },
                { title: "Supporto Costante", desc: "Un team sempre a tua disposizione" }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  key={i} 
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#4CAF50]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#4CAF50] transition-colors duration-300">
                    <CheckCircle2 size={20} className="text-[#4CAF50] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02
              }}
              className="relative w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/30 to-transparent rounded-[2rem] blur-xl transform transition-transform duration-500 group-hover:scale-105 pointer-events-none"></div>
              
              <div className="relative bg-[#1A1A1A] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(76,175,80,0.3)]">
              
              {/* Browser Header */}
              <div className="bg-[#2D2D2D] px-4 py-3 border-b border-white/5 flex items-center justify-between shadow-[0_4px_10px_rgba(0,0,0,0.2)] relative z-10">
                <div className="flex gap-2 group/dots">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] flex items-center justify-center cursor-pointer transition-colors duration-200">
                    <span className="text-black/50 text-[10px] opacity-0 group-hover/dots:opacity-100">✕</span>
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] flex items-center justify-center cursor-pointer transition-colors duration-200">
                    <span className="text-black/50 text-[10px] opacity-0 group-hover/dots:opacity-100">−</span>
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] flex items-center justify-center cursor-pointer transition-colors duration-200">
                    <span className="text-black/50 text-[10px] opacity-0 group-hover/dots:opacity-100">⤢</span>
                  </div>
                </div>
                <div className="flex-1 px-4">
                  <div className="bg-[#1A1A1A] text-gray-400 text-xs py-1.5 px-4 rounded-lg text-center flex items-center justify-center gap-2 border border-white/10 max-w-[240px] mx-auto shadow-inner">
                    <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    webrise.it/iniziamo
                  </div>
                </div>
                <div className="w-[54px]"></div>
              </div>

              {/* Form Body (Website Content) */}
              <div className="bg-[#121212] flex-1 flex flex-col relative overflow-hidden">
                {/* Mini Website Hero */}
                <div className="relative pt-12 pb-8 px-8 sm:px-10 text-center z-10 border-b border-white/5 bg-gradient-to-b from-[#1A1A1A] to-[#121212]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4CAF50]/10 border border-[#4CAF50]/20 text-[#4CAF50] text-[10px] font-bold uppercase tracking-wider mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse"></span>
                    Contatto Rapido
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    Inizia la tua trasformazione
                  </h3>
                  <p className="text-gray-400 text-sm max-w-[280px] mx-auto">
                    Compila il modulo sottostante per richiedere la tua analisi gratuita.
                  </p>
                </div>
                
                {/* Mini Website Form Area */}
                <div className="p-8 sm:p-10 relative z-10 bg-[#121212]">
                
                {/* Debug info */}
              {isSuccess ? (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-[#4CAF50]/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-[#4CAF50]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Richiesta inviata!</h4>
                  <p className="text-gray-400">Ti contatteremo entro 24 ore lavorative.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group">
                    <UserCircle2 size={20} className={`${iconClasses} ${focusedField === 'name' ? 'text-[#4CAF50]' : 'text-gray-500'}`} />
                    <input
                      type="text"
                      placeholder="Nome e Cognome"
                      required
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses}
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative group">
                      <AtSign size={20} className={`${iconClasses} ${focusedField === 'email' ? 'text-[#4CAF50]' : 'text-gray-500'}`} />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="relative group">
                      <Smartphone size={20} className={`${iconClasses} ${focusedField === 'phone' ? 'text-[#4CAF50]' : 'text-gray-500'}`} />
                      <input
                        type="tel"
                        placeholder="Telefono"
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses}
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <Store size={20} className={`${iconClasses} ${focusedField === 'company' ? 'text-[#4CAF50]' : 'text-gray-500'}`} />
                    <input
                      type="text"
                      placeholder="Nome della tua attività"
                      required
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses}
                      name="nome_attivita"
                      value={formData.nome_attivita}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="relative group">
                    <MessageCircle size={20} className={`absolute left-4 top-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-[#4CAF50]' : 'text-gray-500'}`} />
                    <textarea
                      placeholder="Parlaci del tuo progetto (opzionale)"
                      rows={4}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClasses} pl-12 resize-none`}
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden group bg-[#4CAF50] hover:bg-[#8BC34A] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Richiedi Consulenza Ora
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                  {errorMessage && (
                    <p className="text-xs text-center text-red-500 mt-4">
                      {errorMessage}
                    </p>
                  )}
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Inviando il modulo accetti la nostra <a href="#" className="text-[#4CAF50] hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
