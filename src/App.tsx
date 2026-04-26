/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight,
  Scissors,
  User,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "./constants";

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center md:text-left">
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-gold font-serif italic text-lg mb-2"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
  </div>
);

export default function App() {
  const whatsappUrl = COMPANY_INFO.whatsappUrl;

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-ultra opacity-40 leading-none mb-1">Rio Manso</span>
            <span className="text-xl font-serif font-bold tracking-tight text-white leading-none">
              BARBEARIA <span className="text-gold">BLACK</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold tracking-ultra text-zinc-500">
            <a href="#inicio" className="hover:text-gold transition-colors">Início</a>
            <a href="#perfil" className="hover:text-gold transition-colors">Perfil</a>
            <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
          </div>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-black px-6 py-2 rounded-sm text-[11px] font-black tracking-ultra transition-all shadow-[0_4px_20px_-8px_rgba(197,160,89,0.5)]"
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/80 to-zinc-950 z-10" />
          <img 
            src="/barbearia-bg.jpg" 
            alt="Barbearia Black Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-xs tracking-ultra text-gold mb-6 font-medium">The Art of Barbering</span>
             <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-[0.9]">
              Barbearia<br/>
              <span className="text-gradient italic">Black</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl mx-auto mb-12 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-black px-10 py-5 rounded-sm text-sm font-black tracking-ultra transition-all flex items-center justify-center gap-3 shadow-2xl"
              >
                <MessageCircle className="h-5 w-5" />
                Agendamento Rápido
              </a>
              <a 
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-sm text-sm font-black tracking-ultra transition-all border border-white/10 flex items-center justify-center gap-3"
              >
                <Instagram className="h-5 w-5 opacity-60" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500/30">
          <div className="w-px h-12 bg-gold" />
        </div>
      </section>

      {/* Perfil Section */}
      <section id="perfil" className="py-32 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-l border-t border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1740" 
                alt="Barbearia Black Concept" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 border border-gold/30 p-10 hidden lg:block">
              <p className="text-gold tracking-ultra text-xs mb-2">Established</p>
              <p className="text-white font-serif text-4xl font-bold tracking-tight">2024</p>
            </div>
          </motion.div>
          
          <div className="relative">
            <SectionTitle subtitle="A Nossa História">Perfil da Empresa</SectionTitle>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed text-justify">
              <p>{COMPANY_INFO.profile}</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-10 border-t border-white/5 pt-12">
              <div>
                <h4 className="text-white font-serif text-xl italic mb-3">Qualidade</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">Produtos selecionados de alta linha para o seu tratamento.</p>
              </div>
              <div>
                <h4 className="text-white font-serif text-xl italic mb-3">Conforto</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">Ambiente climatizado e acolhedor à altura do seu estilo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-32 bg-zinc-900 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle subtitle="Nossos Talentos">O que fazemos</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-950 p-8 border-l-2 border-gold flex flex-col justify-between h-full group hover:bg-zinc-900/50 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="serif text-xl font-bold text-white tracking-tight group-hover:text-gold transition-colors">{service.title}</h3>
                    <span className="font-serif text-4xl opacity-5 leading-none transition-opacity group-hover:opacity-10 text-gold italic">
                      {service.id}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* stats section */}
      <section className="py-32 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
             <div className="lg:w-1/2">
                <SectionTitle subtitle="The Vibe">Nosso Espaço</SectionTitle>
                <p className="text-zinc-400 text-lg leading-relaxed mb-12 italic border-l border-gold/50 pl-6">"Proporcionamos mais do que um corte — oferecemos autoestima e uma experiência de luxo autêntica."</p>
                <div className="space-y-4">
                  {[
                    "Café premium e ambiente climatizado",
                    "Atendimento exclusivo e personalizado",
                    "Produtos de barbearia de elite"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-[10px] font-bold tracking-ultra text-zinc-500 uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="pt-12">
                   <p className="text-gold font-serif italic text-2xl mb-2">"É no detalhe que o respeito se impõe."</p>
                   <p className="text-zinc-500 font-bold text-xs tracking-ultra">— LEANDRO MORAIS - CEO</p>
                </div>
             </div>

             <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1621605815841-28d644d36db4?auto=format&fit=crop&q=80&w=800" alt="Work" className="grayscale hover:grayscale-0 transition-all duration-700" />
                  <img src="https://images.unsplash.com/photo-1593702295094-172cda8b1ef3?auto=format&fit=crop&q=80&w=800" alt="Tool" className="hidden md:block" />
               </div>
               <div className="pt-12 space-y-4">
                  <img src="https://images.unsplash.com/photo-1512690118235-08e75e5332fc?auto=format&fit=crop&q=80&w=800" alt="Detail" />
                  <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&q=80&w=800" alt="Vibe" className="grayscale hover:grayscale-0 transition-all duration-700" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-sm overflow-hidden p-16 md:p-24 text-center border border-white/5 bg-zinc-900 group">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">Onde a tradição<br/>encontra a <span className="text-gold italic">modernidade.</span></h2>
              <p className="text-zinc-500 tracking-ultra text-xs font-bold mb-12">RESERVE O SEU MOMENTO AGORA MESMO</p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-gold hover:bg-gold-dark text-black px-12 py-6 rounded-sm text-sm font-black tracking-ultra transition-all shadow-2xl"
              >
                <MessageCircle className="h-5 w-5" />
                Agendar Horário
              </a>
            </div>
             <div className="absolute top-0 right-0 p-12 opacity-5 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000">
                <Scissors className="h-64 w-64 rotate-45 text-gold" />
              </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contato" className="bg-zinc-950 pt-32 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="text-[10px] tracking-ultra opacity-40 leading-none mb-1">Rio Manso</span>
              <span className="text-2xl font-serif font-bold tracking-tight text-white leading-none">
                BARBEARIA <span className="text-gold">BLACK</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-xs">
              Proporcionando estilo, autoestima e uma experiência única para cada cliente desde Julho de 2024.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-ultra text-zinc-500 font-bold mb-8">Location</h4>
            <div className="text-white text-sm leading-relaxed">
              <p>Barbearia Black</p>
              <p className="opacity-60">{COMPANY_INFO.address}</p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-xs font-black tracking-ultra mt-6 inline-block hover:underline"
              >
                Directions
              </a>
            </div>
          </div>

          <div>
             <h4 className="text-[10px] tracking-ultra text-zinc-500 font-bold mb-8">Contacts</h4>
             <p className="text-white text-lg font-serif mb-2">{COMPANY_INFO.phone}</p>
             <p className="text-gold text-sm tracking-ultra font-bold mb-8">{COMPANY_INFO.instagram}</p>
             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-ultra text-white font-black bg-white/5 py-4 px-8 block text-center border border-white/5 hover:bg-white/10 transition-colors">Agendamento</a>
          </div>

            <div>
              <h4 className="text-[10px] tracking-ultra text-zinc-500 font-bold mb-8">Schedule</h4>
              <div className="text-white text-sm space-y-3 font-medium">
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Ter - Sex:</span> <span className="opacity-60">17h às 20h</span></p>
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Sábado:</span> <span className="opacity-60">08h às 20h</span></p>
                <p className="flex justify-between text-zinc-700 italic"><span>Dom e Seg:</span> <span>Fechado</span></p>
              </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-ultra text-zinc-700 font-bold">
            &copy; {new Date().getFullYear()} Barbearia Black. All Rights Reserved.
          </p>
          <div className="flex items-center gap-10 text-[10px] tracking-ultra text-zinc-700 font-bold">
            <span>Rio Manso - MG</span>
            <span>(31) 99659-9824</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

