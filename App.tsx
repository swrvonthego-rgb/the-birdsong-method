import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Destinations from './components/Destinations';
import VocalAnalysis from './components/VocalAnalysis';
import TrialOffer from './components/TrialOffer';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [recommendedTier, setRecommendedTier] = useState<string | null>(null);

  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Navbar />
      <Hero />
      <Itinerary />
      <Destinations />
      <TrialOffer isUnlocked={isUnlocked} onPurchase={() => setIsUnlocked(true)} />
      <VocalAnalysis isUnlocked={isUnlocked} onAnalysisComplete={(tier) => setRecommendedTier(tier)} />
      <Booking recommendedTier={recommendedTier} />
      <Footer />
    </div>
  );
}

export default App;