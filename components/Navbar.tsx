import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed w-full z-50 transition-all duration-500 px-6 md:px-12 flex justify-between items-center border-b border-white/5
        ${isScrolled ? 'py-3 bg-brand-dark/95 backdrop-blur-md shadow-2xl' : 'py-6 bg-transparent'}
      `}
    >
      <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Official Logo Integration */}
          <img 
            src="logo.png" 
            alt="Birdsong Method Logo" 
            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(182,145,70,0.5)] group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="cursive-logo text-3xl font-bold tracking-normal leading-none text-brand-silver group-hover:text-brand-gold transition-colors">
            Birdsong
          </span>
          <span className="text-[9px] font-black tracking-[0.5em] uppercase text-brand-gold leading-none mt-1">
            METHOD
          </span>
        </div>
      </div>

      <div className="hidden md:flex gap-10 text-[10px] tracking-[0.3em] uppercase font-black text-brand-muted">
        <a href="#itinerary" className="hover:text-brand-silver transition-colors">Vocal Itinerary</a>
        <a href="#destinations" className="hover:text-brand-silver transition-colors">Destinations</a>
        <a href="#booking" className="hover:text-brand-silver transition-colors">Rank Selection</a>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-[10px] font-black tracking-[0.3em] uppercase border border-brand-gold/30 px-6 py-2.5 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all rounded-sm shadow-lg shadow-brand-gold/5">
          Pilot Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;