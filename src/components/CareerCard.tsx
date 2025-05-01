import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, Code, MapPin, MessageSquare, Star } from 'lucide-react';
import { CareerStage } from '../types';
import CompanyLogo from './CompanyLogo';
import useSound from 'use-sound';
import ReactConfetti from 'react-confetti';
import { useInView } from 'react-intersection-observer';

interface CareerCardProps {
  career: CareerStage;
  index: number;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const isEven = index % 2 === 0;
  
  const [playExpand] = useSound('/sounds/expand.mp3', { volume: 0.8 });
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.5 });
  const [playPop] = useSound('/sounds/boing.mp3', { volume: 0.5 });
  const [playApplause] = useSound('/sounds/applause.mp3', { volume: 0.5 });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      setShowConfetti(true);
      playApplause();
      const timer = setTimeout(() => setShowConfetti(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView, playApplause]);
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: isEven ? -50 : 50,
      rotate: isEven ? -5 : 5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      rotate: 0,
      transition: { 
        duration: 0.7,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        onComplete: () => playPop()
      } 
    },
    hover: {
      scale: 1.02,
      rotate: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: 'auto', 
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleExpand = () => {
    setExpanded(!expanded);
    playExpand();
  };

  const getBgColor = () => {
    switch (career.color) {
      case 'purple': return 'bg-purple-100 border-purple-300';
      case 'blue': return 'bg-blue-100 border-blue-300';
      case 'green': return 'bg-green-100 border-green-300';
      case 'red': return 'bg-red-100 border-red-300';
      case 'cyan': return 'bg-cyan-100 border-cyan-300';
      case 'yellow': return 'bg-amber-100 border-amber-300';
      default: return 'bg-gray-100 border-gray-300';
    }
  };
  
  const getTextColor = () => {
    switch (career.color) {
      case 'purple': return 'text-purple-800';
      case 'blue': return 'text-blue-800';
      case 'green': return 'text-green-800';
      case 'red': return 'text-red-800';
      case 'cyan': return 'text-cyan-800';
      case 'yellow': return 'text-amber-800';
      default: return 'text-gray-800';
    }
  };

  return (
    <motion.div 
      ref={ref}
      className={`relative ${isEven ? 'md:ml-auto' : 'md:mr-auto'} md:w-[85%] w-full mb-8`}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      onHoverStart={() => playHover()}
    >
      {showConfetti && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <ReactConfetti
            width={400}
            height={400}
            recycle={false}
            numberOfPieces={100}
            gravity={0.3}
            initialVelocityY={20}
            confettiSource={{
              x: 200,
              y: 200,
              w: 0,
              h: 0
            }}
          />
        </div>
      )}
      <div 
        className={`rounded-xl ${getBgColor()} border-2 p-5 shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <motion.h3 
              className={`text-xl font-bold ${getTextColor()}`}
              whileHover={{ scale: 1.05 }}
            >
              {career.title}
            </motion.h3>
            <div className="flex items-center mt-1">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase size={16} className={getTextColor()} />
              </motion.div>
              <p className="ml-2 font-semibold">{career.company}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CompanyLogo company={career.logo} />
            </motion.div>
            <p className="text-gray-700 font-bold mt-2">{career.years}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <MapPin size={16} className="text-gray-600" />
          </motion.div>
          <p className="ml-2 text-gray-600">{career.location}</p>
        </div>
        
        <p className="mb-4 text-gray-700">{career.description}</p>
        
        <motion.button 
          onClick={handleExpand}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full ${getTextColor()} font-semibold text-sm hover:opacity-90 transition-opacity`}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </motion.button>
        
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              variants={expandVariants}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-bold flex items-center">
                    <Award size={18} className={getTextColor()} />
                    <span className="ml-2">Achievements:</span>
                  </h4>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    {career.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        onAnimationComplete={() => setTimeout(() => playPop(), 100)}
                        className="text-gray-700"
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-bold flex items-center">
                    <MessageSquare size={18} className={getTextColor()} />
                    <span className="ml-2">Funny Moment:</span>
                  </h4>
                  <p className="ml-5 mt-1 text-gray-700 italic">{career.funnyMoment}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-bold flex items-center">
                    <Code size={18} className={getTextColor()} />
                    <span className="ml-2">Tech Stack:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 ml-5 mt-2">
                    {career.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => playHover()}
                        className={`px-3 py-1 text-xs rounded-full ${getTextColor()} bg-white border border-current`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="font-bold flex items-center">
                    <Star size={18} className={getTextColor()} />
                    <span className="ml-2">Era:</span>
                  </h4>
                  <p className="ml-5 mt-1 text-gray-700">{career.era}</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CareerCard;