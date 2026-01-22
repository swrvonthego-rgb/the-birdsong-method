import React from 'react';
import { Microscope, Music, Radio, HeartPulse } from 'lucide-react';
import Reveal from './Reveal';

const protocols = [
  {
    title: "The Studio Microscope",
    desc: "Using high-end gear to analyze pitch and breathing at a cellular level.",
    icon: <Microscope className="w-6 h-6" />
  },
  {
    title: "Acoustic Discipline",
    desc: "Singing without equipment to build raw muscle memory and power.",
    icon: <Radio className="w-6 h-6" />
  },
  {
    title: "Vocal Affirmations",
    desc: "Customized words that train your mind to be your first support system.",
    icon: <HeartPulse className="w-6 h-6" />
  },
  {
    title: "Performance Ready",
    desc: "Transitioning from the booth to the global stage with total confidence.",
    icon: <Music className="w-6 h-6" />
  }
];

const Itinerary: React.FC = () => {
  return (
    <section id="itinerary" className="py-32 bg-black relative overflow-hidden">
      {/* Subtle Background Watermark for this section */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <img 
          src="logo.png" 
          alt="" 
          className="w-1/2" 
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">Tactical Methodology</p>
              <h2 className="text-5xl font-serif text-white italic">The Songbird Instinct</h2>
              <p className="mt-6 text-brand-muted font-light leading-relaxed text-lg">
                Real vocal growth is driven by the mind. Our philosophy centers on the <span className="text-brand-gold font-bold italic">Songbird Instinct</span>—the deep-seated belief that your voice is already capable of wonders, it just needs the right discipline to be unleashed.
              </p>
              <p className="mt-4 text-brand-muted font-light leading-relaxed">
                Every tier includes customized affirmations. You must hear yourself be your own first support system. We combine the cold precision of studio technology with the instinctual power of the soul.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {protocols.map((p, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 border border-white/5 rounded-sm hover:border-brand-gold/50 transition-colors group">
                  <div className="text-brand-gold mb-4 group-hover:scale-110 transition-transform">{p.icon}</div>
                  <h4 className="text-white font-bold uppercase tracking-tighter text-sm mb-2">{p.title}</h4>
                  <p className="text-brand-muted text-[11px] leading-relaxed uppercase">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Itinerary;