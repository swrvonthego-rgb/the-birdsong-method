import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Loader2, Lock, Activity, Wind, Signal, CheckCircle2, ChevronRight, Zap, Timer, Cpu, BarChart, Rocket, Terminal, ShieldCheck } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import Reveal from './Reveal';

interface RadarProps {
  isUnlocked: boolean;
  onAnalysisComplete?: (tier: string) => void;
}

const VocalAnalysis: React.FC<RadarProps> = ({ isUnlocked, onAnalysisComplete }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [processingLogs, setProcessingLogs] = useState<string[]>([]);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [analysisResult, setAnalysisResult] = useState<null | {
    technicalAnalysis: string;
    vocalType: string;
    recommendedTier: string;
    improvements: string[];
    readinessScore: number;
  }>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRecording && countdown > 0) {
      timerRef.current = window.setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && isRecording) {
      stopRecording();
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isRecording, countdown]);

  useEffect(() => {
    if (isRecording && streamRef.current && canvasRef.current) {
      startEnhancedVisualizer(streamRef.current);
    }
  }, [isRecording]);

  const startRecording = async () => {
    if (!isUnlocked) {
      document.getElementById('trial-offer')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) chunksRef.current.push(e.data); };
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        analyzeVocal(audioBlob);
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
      };
      mediaRecorder.start();
      setIsRecording(true);
      setCountdown(30);
      setAnalysisResult(null);
    } catch (err) {
      alert("Microphone access is required for acoustic mapping.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const startEnhancedVisualizer = (stream: MediaStream) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      animationFrameRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgba(182, 145, 70, ${barHeight / 100})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };
    draw();
  };

  const analyzeVocal = async (blob: Blob) => {
    setIsAnalyzing(true);
    setProcessingProgress(0);
    setProcessingLogs(["INITIALIZING ACOUSTIC TRIAGE..."]);
    
    const logs = [
      "SYNCHRONIZING TELEMETRY...",
      "EXTRACTING HARMONIC RESONANCE...",
      "MAPPING VOCAL REGISTER TRANSITIONS...",
      "CALIBRATING TIMBRE DYNAMICS...",
      "ANALYZING DIAPHRAGM VS CHEST SOURCE...",
      "CHECKING SIGNAL STRENGTH & CLARITY...",
      "FINALIZING COURSE ASSIGNMENT..."
    ];

    let logIdx = 0;
    const logInterval = setInterval(() => {
      if (logIdx < logs.length) {
        setProcessingLogs(prev => [...prev.slice(-4), logs[logIdx]]);
        setProcessingProgress(prev => Math.min(prev + 12, 95));
        logIdx++;
      }
    }, 1200);

    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      const base64Data = await new Promise<string>((res) => {
        reader.onloadend = () => res((reader.result as string).split(',')[1]);
      });

      // VITE USES import.meta.env INSTEAD OF process.env
      const genAI = new GoogleGenAI(import.meta.env.VITE_GEMINI_API_KEY || "YOUR_API_KEY_HERE");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Strict Professional Vocal Analysis. 
        1. Identify if the person is singing from their stomach/diaphragm or chest. 
        2. Notice if the voice or signal is weak and suggest ways to strengthen the vocals. 
        3. Highlight specific issues for the user to fix without formal training. 
        Recommendation must be one of: "Early Bird", "Rockin' Robin", or "The Eagle Course". 
        Return ONLY valid JSON with keys: technicalAnalysis, vocalType, recommendedTier, improvements (list of 3), readinessScore (0-100).`;

      const result = await model.generateContent([
        {
          inlineData: {
            mimeType: "audio/webm",
            data: base64Data
          }
        },
        { text: prompt }
      ]);

      const response = await result.response;
      const text = response.text();
      const cleanedJson = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleanedJson);

      clearInterval(logInterval);
      setProcessingProgress(100);
      setAnalysisResult(parsed);
      if (onAnalysisComplete) onAnalysisComplete(parsed.recommendedTier);
    } catch (err) {
      console.error(err);
      setProcessingLogs(prev => [...prev, "ERROR: ENCRYPTION BREACH OR TIMEOUT"]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="vocal-radar" className="py-32 bg-brand-dark px-6">
       <div className="max-w-7xl mx-auto">
          {/* Component implementation continues here with your visual styling */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic text-brand-gold">Acoustic Radar</h2>
            <p className="text-brand-silver/60 uppercase tracking-widest text-xs mt-4">Vocal Frequency Protocol</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-brand-navy/20 border border-brand-gold/10 p-12 text-center rounded-sm">
              {!isUnlocked ? (
                <div className="py-20 flex flex-col items-center gap-6">
                  <Lock className="w-12 h-12 text-brand-gold/20" />
                  <p className="opacity-20 uppercase tracking-[0.5em] text-xs">Clearance Required</p>
                </div>
              ) : (
                <div className="space-y-8">
                  <canvas ref={canvasRef} className="w-full h-32 mb-8" width={400} height={128} />
                  <div className="flex flex-col items-center gap-4">
                    {!isRecording ? (
                      <button onClick={startRecording} className="w-24 h-24 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                        <Mic className="w-8 h-8" />
                      </button>
                    ) : (
                      <button onClick={stopRecording} className="w-24 h-24 rounded-full bg-red-600 text-white flex items-center justify-center animate-pulse">
                        <Square className="w-8 h-8" />
                      </button>
                    )}
                    <p className="text-brand-gold font-bold uppercase tracking-widest text-[10px]">
                      {isRecording ? `Capturing... ${countdown}s` : "Initiate Capture"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-brand-navy/10 border border-brand-gold/5 p-12 min-h-[400px]">
              {isAnalyzing ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Loader2 className="animate-spin text-brand-gold" />
                    <span className="text-brand-gold uppercase tracking-widest text-xs">Processing Data...</span>
                  </div>
                  <div className="space-y-2">
                    {processingLogs.map((log, i) => (
                      <p key={i} className="text-[10px] text-brand-silver/40 font-mono italic">{log}</p>
                    ))}
                  </div>
                </div>
              ) : analysisResult ? (
                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs">Recommendation</h3>
                      <p className="text-3xl font-serif italic text-white mt-2">{analysisResult.recommendedTier}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-brand-silver/40 uppercase font-black tracking-widest">Readiness</p>
                      <p className="text-2xl font-mono text-brand-gold">{analysisResult.readinessScore}%</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white/5 border-l-4 border-brand-gold">
                    <p className="text-sm text-brand-silver italic leading-relaxed">
                      {analysisResult.technicalAnalysis}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {analysisResult.improvements.map((tip, i) => (
                      <li key={i} className="flex items-center gap-3 text-[10px] uppercase font-bold text-brand-silver/70">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold" /> {tip}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full py-4 bg-brand-gold text-brand-dark font-black uppercase text-[10px] tracking-[0.4em]"
                  >
                    Select Protocol
                  </button>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-white/20 text-center gap-4">
                  <Activity className="w-12 h-12" />
                  <p className="uppercase tracking-[0.5em] text-[10px]">Awaiting Signal Input</p>
                </div>
              )}
            </div>
          </div>
       </div>
    </section>
  );
};

export default VocalAnalysis;