import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import useSound from 'use-sound';

const WelcomeEffect: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);
  const [playCaps] = useSound('/sounds/welcome.mp3', { volume: 0.8 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    playCaps();

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [playCaps]);

  if (!showConfetti) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <ReactConfetti
        width={dimensions.width}
        height={dimensions.height}
        numberOfPieces={300}
        recycle={false}
        gravity={0.2}
        initialVelocityY={20}
        colors={['#818CF8', '#6366F1', '#4F46E5', '#4338CA', '#3730A3', '#FFD700', '#FFA500']}
      />
    </div>
  );
};

export default WelcomeEffect;