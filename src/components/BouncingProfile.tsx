import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useSound from 'use-sound';

const BouncingProfile: React.FC = () => {
  const controls = useAnimation();
  const [showMessage, setShowMessage] = useState(true);
  const [playBoing] = useSound('/sounds/boing.mp3', { volume: 0.8 });

  useEffect(() => {
    let timeoutId: number;
    const animate = async () => {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 100);
      
      playBoing();
      await controls.start({
        x: newX,
        y: newY,
        rotate: Math.random() * 360,
        scale: [1, 1.2, 1],
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.7,
          damping: 10
        }
      });
      
      timeoutId = window.setTimeout(animate, 2000);
    };
    
    animate();
    return () => clearTimeout(timeoutId);
  }, [controls, playBoing]);

  // Message visibility cycle
  useEffect(() => {
    const cycleMessage = () => {
      setShowMessage(true);
      const hideTimeout = setTimeout(() => {
        setShowMessage(false);
        const showTimeout = setTimeout(cycleMessage, 10000); // Wait 10 seconds before showing again
        return () => clearTimeout(showTimeout);
      }, 2000); // Show for 2 seconds
      return () => clearTimeout(hideTimeout);
    };

    cycleMessage();
  }, []);

  const handleDragEnd = () => {
    playBoing();
  };

  return (
    <motion.div
      className="fixed z-50 cursor-pointer"
      animate={controls}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth - 100,
        bottom: window.innerHeight - 100
      }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileDrag={{ scale: 1.1 }}
      onDragEnd={handleDragEnd}
    >
      <div className="relative group">
        <motion.img
          src="/abinash.jpg"
          alt="Bouncing Abinash"
          className="w-16 h-16 rounded-full border-4 border-yellow-300 shadow-lg"
          animate={{
            boxShadow: [
              "0 0 0 0px rgba(250, 204, 21, 0.4)",
              "0 0 0 10px rgba(250, 204, 21, 0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-full whitespace-nowrap shadow-lg"
          >
            I am omnipresent! 🌟
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BouncingProfile;