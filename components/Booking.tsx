import React from 'react';
import { Check, ArrowRight, PlaneTakeoff, Compass, Trophy, Star } from 'lucide-react';
import Reveal from './Reveal';

interface BookingProps {
  recommendedTier?: string | null;
}

const tiers = [
  {
    name: "Early Bird",
    price: "20",
    description: "A 1-hour precision check-up. We work your favorite song note-by-note until it is perfect.",
    features: [
      "60-Min Precision Coaching",
      "Note-by-Note Perfection",
      "Vocal Troubleshooting",
      "Custom Affirmations",
      "Immediate Voice Report"
    ],
    cta: "Secure Early Bird",
    highlight: false,
    icon: <PlaneTakeoff className="w-7 h-7 text-brand-silver/60" />
  },
  {
    name: "Rockin' Robin",
    price: "200",
    description: "Four 1-hour sessions. Master perfect pitch and build your own harmonies to act as your background singers.",
    features: [
      "4 One-Hour Sessions",
      "Perfect Pitch Training",
      "Harmony Layering Protocol",
      "Vocal Agility Missions",
      "Digital Progress Log"
    ],
    cta: "Start Rockin'",
    highlight: true,
    icon: <Compass className="w-7 h-7 text-brand-gold" />
  },
  {
    name: "The Eagle Course",
    price: "1,000",
    description: "Four 2-hour premium sessions. Full vocal recording of a song with custom harmonies, resulting in a commercial-ready HD music video.",
    features: [
      "4 Two-Hour Elite Sessions",
      "Professional Vocal Recording",
      "Custom Harmony Arrangement",
      "HD Music Video Production",
      "Global Takeoff Strategy"
    ],
    cta: "Soar with the Eagle",
    highlight: false,
    icon: <Trophy className="w-7 h-7 text-brand-silver/60" />
  }
];

const Booking: React.FC<BookingProps> = ({ recommendedTier }) => {
  return (
    <section id="booking" className="py-32 px-6 md:px-12 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <Reveal>
            <p className="text-brand-gold font-black uppercase tracking-[0.5em] text-[11px]">Choose Your Flight Path</p>
            <h2 className="text-5xl md:text-8xl font-serif text-brand-silver mt-6 italic">
              Vocal <span className="gold-gradient">Ascension</span> Ranks
            </h2>
            <p className="text-brand-muted max-w-2xl mx-auto mt-8 text-lg font-light leading-relaxed">
              Select the training flight tier that matches your current mission objectives. From a single technical check-up to total industry leadership.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {tiers.map((tier, idx) => {
            const isRecommended = recommendedTier === tier.name;
            return (
              <Reveal key={idx} delay={idx * 200}>
                <div className={`relative h-full p-12 rounded-sm border transition-all duration-700 group flex flex-col ${
                  tier.highlight || isRecommended
                  ? 'bg-brand-navy/40 border-brand-gold shadow-[0_0_60px_rgba(182,145,70,0.15)] scale-105 z-10' 
                  : 'bg-brand-navy/10 border-brand-silver/10 hover:border-brand-gold/30'
                }`}>
                  
                  {tier.highlight && !isRecommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-[10px] font-black px-6 py-1.5 uppercase tracking-widest rounded-sm shadow-xl">
                      Most Deployed
                    </div>
                  )}

                  {isRecommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-navy text-[10px] font-black px-6 py-1.5 uppercase tracking-widest rounded-sm shadow-xl flex items-center gap-2 border border-brand-gold">
                      <Star className="w-3 h-3 fill-brand-gold text-brand-gold" /> AI Recommended Path
                    </div>
                  )}

                  <div className="mb-10">
                    <div className="mb-6">{tier.icon}</div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter text-brand-silver mb-3">{tier.name}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-brand-muted text-sm">$</span>
                      <span className="text-6xl font-serif italic text-brand-silver">{tier.price}</span>
                      <span className="text-brand-muted text-[10px] uppercase font-black tracking-[0.3em]">/Flight</span>
                    </div>
                    <p className="text-brand-muted text-sm leading-relaxed font-light opacity-80">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-5 mb-12 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-[12px] text-brand-silver/70 uppercase tracking-widest font-bold">
                        <Check className={`w-4 h-4 ${tier.highlight || isRecommended ? 'text-brand-gold' : 'text-brand-silver/40'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-6 text-[11px] font-black uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 rounded-sm shadow-xl ${
                    tier.highlight || isRecommended
                    ? 'bg-brand-gold text-brand-dark hover:bg-white'
                    : 'bg-brand-silver text-brand-dark hover:bg-brand-gold'
                  }`}>
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={600} className="mt-24 text-center">
          <div className="inline-block p-10 border border-brand-gold/10 bg-brand-navy/20 backdrop-blur-sm rounded-sm">
            <p className="text-lg text-brand-silver/60 font-light italic max-w-xl leading-relaxed">
              "Welcome to the BIRDSONG Method. Ready for takeoff?"
            </p>
            <p className="text-[11px] uppercase tracking-[0.5em] font-black text-brand-gold mt-6">— Verified Pilot J. Sterling</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Booking;