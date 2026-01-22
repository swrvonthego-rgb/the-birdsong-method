import React from 'react';
import { Mail, MapPin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark py-24 px-6 border-t border-brand-gold/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 text-brand-muted relative z-10">
        <div className="space-y-8 col-span-2">
          <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img 
               src="logo.png" 
               alt="Birdsong Logo" 
               className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(182,145,70,0.3)] transition-transform group-hover:scale-110"
               onError={(e) => (e.currentTarget.style.display = 'none')}
             />
             <div className="flex flex-col">
               <span className="cursive-logo text-3xl font-bold text-brand-silver leading-none">
                 Birdsong
               </span>
               <span className="text-[9px] font-black tracking-[0.4em] uppercase text-brand-gold leading-none mt-1">
                 METHOD
               </span>
             </div>
          </div>
          <p className="max-w-xs text-[13px] leading-relaxed uppercase tracking-widest font-bold opacity-60">
            Professional vocal performance for the next generation of global artists. Disciplining your voice for global influence.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-silver/40 hover:text-brand-gold transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-brand-silver/40 hover:text-brand-gold transition-colors"><Youtube className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">Headquarters</h4>
          <div className="flex items-start gap-4 text-[11px] uppercase tracking-widest font-bold text-brand-silver/60">
            <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
            <span>Atlanta Hub<br />Villa Rica, GA</span>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">Direct Connection</h4>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-bold text-brand-silver/60">
            <Mail className="w-4 h-4 text-brand-gold shrink-0" />
            <span>hq@birdsongmethod.com</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-black text-brand-silver/20 relative z-10">
        <p>© 2026 BIRDSONG PERFORMANCE. ALL PROTOCOLS RESERVED.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
           <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
           <p className="text-brand-gold animate-pulse">System: Secure & Operational</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;