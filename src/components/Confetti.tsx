import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useInView } from 'react-intersection-observer';

const Confetti: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div ref={ref}>
      {inView && (
        <ReactConfetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={200}
          recycle={false}
          gravity={0.2}
          initialVelocityY={20}
          colors={['#818CF8', '#6366F1', '#4F46E5', '#4338CA', '#3730A3']}
        />
      )}
    </div>
  );
};

export default Confetti;