import React, { useState, useRef } from 'react';
import { Mic, Square, Activity, CheckCircle2 } from 'lucide-react';

interface RadarProps { isUnlocked: boolean; onAnalysisComplete?: (tier: string) => void; }

const VocalAnalysis: React.FC<RadarProps> = ({ isUnlocked, onAnalysisComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const stopRec = () => {
    setIsRecording(false);
    setIsAnalyzing(true);
    // This simulates the AI analysis you requested
    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        tier: "The Eagle Course",
        vocalSource: "Chest-heavy (Needs more Diaphragm/Stomach support)",
        signalStrength: "Weak (Suggest increasing breath compression)",
        fixes: ["Practice 'belly breathing' to engage the stomach", "Increase volume without shouting", "Notice the tension in your throat and release it"]
      });
    }, 3000);
  };

  return (
    <section id="vocal-radar" className="py-32 bg-brand-dark px-6 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-brand-navy/20 border border-brand-gold/10 p-12 text-center">
          {!isUnlocked ? <p className="opacity-20 uppercase tracking-widest text-xs py-20">Awaiting Clearance...</p> : (
            <div className="space-y-8">
              <Activity className={`w-12 h-12 mx-auto ${isRecording ? 'text-red-500 animate-pulse' : 'text-brand-gold'}`} />
              {!isRecording ? (
                <button onClick={() => setIsRecording(true)} className="w-20 h-20 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center mx-auto shadow-2xl"><Mic /></button>
              ) : (
                <button onClick={stopRec} className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto"><Square /></button>
              )}
            </div>
          )}
        </div>
        <div className="bg-brand-navy/10 border border-brand-gold/5 p-12">
          {isAnalyzing ? <p className="text-brand-gold animate-pulse uppercase tracking-widest text-xs text-center py-20">AI ANALYZING BIOMETRICS...</p> : 
           result ? (
            <div className="space-y-6">
              <h4 className="text-brand-gold font-bold uppercase text-xs tracking-widest">Analysis Results</h4>
              <p className="text-sm border-l-2 border-brand-gold pl-4 italic">Source: {result.vocalSource}</p>
              <p className="text-sm border-l-2 border-brand-gold pl-4 italic">Signal: {result.signalStrength}</p>
              <div className="space-y-2 mt-4">
                {result.fixes.map((t: string, i: number) => <p key={i} className="text-[10px] text-brand-silver/70 uppercase">• {t}</p>)}
              </div>
              <button onClick={() => onAnalysisComplete?.(result.tier)} className="w-full mt-6 py-4 bg-brand-gold text-brand-dark text-[10px] font-black uppercase tracking-widest">Select {result.tier}</button>
            </div>
           ) : <p className="text-white/20 uppercase tracking-widest text-[10px] text-center py-20">Awaiting Vocal Capture</p>}
        </div>
      </div>
    </section>
  );
};

export default VocalAnalysis;