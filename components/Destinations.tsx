import React from 'react';
import Reveal from './Reveal';

interface DestinationProps {
  img: string;
  title: string;
  subtitle: string;
  delay: number;
}

const DestinationCard: React.FC<DestinationProps> = ({ img, title, subtitle, delay }) => (
  <Reveal delay={delay} className="group cursor-pointer h-full">
    <div className={`relative h-[500px] overflow-hidden rounded-sm ${delay === 200 ? 'md:translate-y-12' : ''}`}>
      <img 
        src={img} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-8 left-8 text-white">
        <p className="text-[10px] uppercase tracking-widest font-black mb-2 text-brand-gold">{subtitle}</p>
        <h3 className="text-3xl font-serif italic">{title}</h3>
      </div>
    </div>
  </Reveal>
);

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-32 px-6 md:px-12 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <Reveal className="max-w-xl">
            <p className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Travel Log</p>
            <h2 className="text-5xl md:text-7xl font-serif leading-none italic text-brand-dark">Capture the World <br />In Every Breath</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-brand-muted max-w-sm text-sm leading-loose font-medium">
              From the humidity of Taipei to the dynamic energy of Atlanta—we train your voice to be resilient in every climate on the map.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <DestinationCard 
            img="https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=2070&auto=format&fit=crop"
            title="Taipei Nights"
            subtitle="Departure 01"
            delay={0}
          />
          <DestinationCard 
            img="https://images.unsplash.com/photo-1523293836414-f04e712e1f3b?q=80&w=2124&auto=format&fit=crop"
            title="Atlanta Soul"
            subtitle="Departure 02"
            delay={200}
          />
          <DestinationCard 
            img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop"
            title="Global Resonance"
            subtitle="Departure 03"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;