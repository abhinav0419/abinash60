import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Confetti from './components/Confetti';
import BouncingProfile from './components/BouncingProfile';
import BackgroundMusic from './components/BackgroundMusic';
import WelcomeEffect from './components/WelcomeEffect';

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
      <WelcomeEffect />
      <Confetti />
      <BouncingProfile />
      <BackgroundMusic />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;