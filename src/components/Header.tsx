import React, { useEffect, useState } from 'react';
import { Briefcase, Code, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-indigo-700 text-white shadow-lg py-2' 
        : 'bg-transparent text-indigo-900 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              onHoverStart={() => playHover()}
              onClick={() => speak("Hello! I'm Abinash Das, and this is my epic tech journey!")}
            >
              <img
                src="/abinash.jpg"
                alt="Abinash Das"
                className="w-12 h-12 rounded-full border-2 border-yellow-300 cursor-pointer"
              />
            </motion.div>
            <div className="flex items-center gap-2">
              <Briefcase className={`${scrolled ? 'text-yellow-300' : 'text-indigo-600'} transition-colors duration-300`} />
              <motion.h1 
                className="text-2xl md:text-3xl font-bold"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => playHover()}
              >
                Abinash's Epic Career
              </motion.h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => playHover()}
            >
              <Code size={18} className={scrolled ? 'text-yellow-300' : 'text-indigo-600'} />
              <span className="font-medium">1991 - 2025</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => playHover()}
            >
              <Coffee size={18} className={scrolled ? 'text-yellow-300' : 'text-indigo-600'} />
              <span className="font-medium">34 Years of Tech Adventures</span>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;