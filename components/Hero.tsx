import React from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-16 pb-12">
      {/* 1. Background Layer: Dramatic Sky */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <img 
          src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2832&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-80"
          alt="Sunset Sky"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-navy/20 to-transparent mix-blend-multiply"></div>
      </div>

      {/* 2. Cliff Composite Layer */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden">
        {/* The Cliff Edge */}
        <div className="absolute bottom-[-5%] left-[-10%] w-[120%] h-[50vh] z-10">
           <img 
             src="https://images.unsplash.com/photo-1508614999368-9260051292e5?q=80&w=2070&auto=format&fit=crop"
             className="w-full h-full object-cover object-top [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] contrast-125 brightness-[0.2]"
             alt="Cliff Edge"
           />
        </div>
      </div>

      {/* 3. Main Content Layer */}
      <div className="relative z-30 w-full max-w-5xl px-6 flex flex-col items-center flex-1">
        
        {/* Top Branding Block */}
        <Reveal className="flex flex-col items-center space-y-4 text-center mt-4">
          <div className="w-40 md:w-48 drop-shadow-[0_0_40px_rgba(182,145,70,0.5)]">
            <img src="logo.png" alt="Birdsong Method Logo" className="w-full" onError={(e) => e.currentTarget.style.display = 'none'} />
          </div>
          
          <h2 className="cursive-logo text-4xl md:text-6xl text-brand-gold drop-shadow-md">Birdsong Method</h2>
          
          <p className="text-[10px] md:text-xs font-black tracking-[0.6em] uppercase text-white drop-shadow-lg mt-2">
            Your Voice Is Your Wings
          </p>
          
          <h1 className="text-5xl md:text-[5.5rem] font-black tracking-tighter text-white leading-[0.9] drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] py-4">
            VOCAL COURSE
          </h1>
          
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 shadow-lg">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
              Build Confidence | Expand Range | Master Vocal Runs
            </p>
          </div>
        </Reveal>

        {/* Spacer */}
        <div className="flex-1 min-h-[100px]"></div>

        {/* Feature List HUD Columns */}
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-x-32 gap-y-8 text-left mb-12">
          <Reveal delay={200} className="space-y-4 bg-black/40 p-6 rounded-xl backdrop-blur-md border border-white/10 md:bg-transparent md:p-0 md:backdrop-blur-none md:border-none">
            <h4 className="text-[12px] font-black tracking-[0.2em] uppercase text-brand-gold border-b border-brand-gold/20 pb-2 mb-2">Course Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-brand-silver">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" /> Strengthen Chest & Head Voice
              </li>
              <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-brand-silver">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" /> Seamless Vocal Register Transitions
              </li>
              <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-brand-silver">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" /> Advanced Techniques
              </li>
            </ul>
          </Reveal>

          <Reveal delay={400} className="space-y-4 bg-black/40 p-6 rounded-xl backdrop-blur-md border border-white/10 md:bg-transparent md:p-0 md:backdrop-blur-none md:border-none">
            <h4 className="text-[12px] font-black tracking-[0.2em] uppercase text-brand-gold border-b border-brand-gold/20 pb-2 mb-2">Powered by Affirmations</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-brand-silver">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> High-Definition Audio & Video Feedback
              </li>
              <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-brand-silver">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> 45-Minute Warm-Up Routines
              </li>
              <li className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide text-brand-silver">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> Custom Regimens for Your Voice
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Action Block */}
        <Reveal delay={600} className="flex flex-col items-center space-y-4 pb-8 w-full z-40">
          <button 
            onClick={() => document.getElementById('trial-offer')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-cream text-brand-dark px-12 md:px-20 py-5 rounded-sm font-black uppercase tracking-[0.2em] text-[12px] hover:bg-white transition-all shadow-[0_0_50px_rgba(248,234,214,0.4)] hover:scale-105 active:scale-95 w-full md:w-auto"
          >
            LEARN MORE & ENROLL
          </button>
          <p className="text-[9px] font-black tracking-[0.3em] uppercase text-white/60">
            BirdsongMethod.com
          </p>
        </Reveal>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-40">
        <ChevronDown className="text-brand-gold/50 w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;