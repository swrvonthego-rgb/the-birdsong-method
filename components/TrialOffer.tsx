import React, { useState } from 'react';
import { ShieldCheck, Loader2, X } from 'lucide-react';

interface TrialProps { isUnlocked: boolean; onPurchase: () => void; }

const TrialOffer: React.FC<TrialProps> = ({ isUnlocked, onPurchase }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onPurchase();
      setShowCheckout(false);
    }, 2000);
  };

  return (
    <section id="trial-offer" className="py-24 bg-brand-dark border-y border-white/5 text-center px-6">
      {!isUnlocked ? (
        <div className="max-w-xl mx-auto bg-white p-12 rounded-sm shadow-2xl">
          <ShieldCheck className="mx-auto text-brand-gold w-12 h-12 mb-6" />
          <h3 className="text-3xl font-serif italic mb-4 text-black">Unlock Vocal Radar</h3>
          <p className="text-slate-500 mb-8 uppercase tracking-widest text-[10px]">Initiate Acoustic Mapping Protocol for $1.00</p>
          <button onClick={() => setShowCheckout(true)} className="bg-brand-gold text-brand-dark px-12 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all">
            Secure Entry $1.00
          </button>
        </div>
      ) : (
        <p className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs">Clearance Granted • Radar Active</p>
      )}

      {showCheckout && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full relative">
            <button onClick={() => setShowCheckout(false)} className="absolute top-4 right-4 text-slate-400"><X /></button>
            <h3 className="text-xl font-bold mb-6 text-black">Secure Payment</h3>
            <button onClick={handlePay} disabled={loading} className="w-full py-4 bg-[#635bff] text-white rounded font-bold flex items-center justify-center gap-2">
              {loading ? <Loader2 className="animate-spin" /> : "Pay $1.00"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TrialOffer;