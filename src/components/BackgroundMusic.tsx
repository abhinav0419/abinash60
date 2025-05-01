import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { Howl } from 'howler';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    const backgroundMusic = new Howl({
      src: ['https://assets.mixkit.co/music/preview/mixkit-tech-life-170.mp3'],
      loop: true,
      volume: 0.3,
      html5: true,
      onload: () => {
        setSound(backgroundMusic);
      },
    });

    return () => {
      backgroundMusic.unload();
    };
  }, []);

  const togglePlay = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isPlaying ? (
        <Volume2 size={24} className="animate-pulse" />
      ) : (
        <VolumeX size={24} />
      )}
    </motion.button>
  );
};

export default BackgroundMusic;