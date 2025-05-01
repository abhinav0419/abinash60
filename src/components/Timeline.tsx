import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Star, Briefcase, FileWarning as Running } from 'lucide-react';
import { careerData } from '../data/careerData';
import CareerCard from './CareerCard';

const Timeline: React.FC = () => {
  const controls = useAnimation();
  const runnerControls = useAnimation();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector('.timeline-container');
      if (timeline) {
        const timelineRect = timeline.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const timelineStart = timelineRect.top;
        const timelineEnd = timelineRect.bottom;
        const totalDistance = timelineEnd - timelineStart;
        
        let progress = (viewportHeight - timelineStart) / totalDistance;
        progress = Math.max(0, Math.min(1, progress));
        
        setScrollProgress(progress);
        runnerControls.set({ y: `${progress * 100}%` });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [runnerControls]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      runnerControls.start({
        y: [0, -10, 0],
        transition: {
          y: {
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }
      });
    }
  }, [controls, runnerControls, inView]);

  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: '100%',
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3
      }
    }
  };

  return (
    <div className="relative py-10">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">The Career Journey</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Follow the hilarious adventures of Abinash Das as he navigates through
          the ever-changing landscape of technology from 1991 to 2025.
        </p>
      </motion.div>

      <div className="relative timeline-container" ref={ref}>
        {/* Running figure animation */}
        <motion.div
          className="absolute z-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          style={{ top: 0 }}
          animate={runnerControls}
        >
          <Running 
            size={32} 
            className="text-indigo-600 drop-shadow-lg"
            strokeWidth={2}
          />
        </motion.div>

        {/* Timeline center line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-indigo-500 origin-top"
            variants={lineVariants}
            initial="hidden"
            animate={controls}
          />
        </div>

        {/* Timeline content */}
        <div className="relative z-10">
          {careerData.map((career, index) => (
            <div key={career.id} className="md:grid md:grid-cols-2 gap-8 mb-8">
              {index % 2 === 0 ? (
                <>
                  <CareerCard career={career} index={index} />
                  <div className="hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block"></div>
                  <CareerCard career={career} index={index} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center mt-16 bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-indigo-800 mb-3">Journey Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex justify-center mb-2">
              <Briefcase size={28} className="text-indigo-600" />
            </div>
            <h4 className="font-bold text-indigo-800">6 Companies</h4>
            <p className="text-gray-600">From startups to tech giants</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex justify-center mb-2">
              <Star size={28} className="text-indigo-600" />
            </div>
            <h4 className="font-bold text-indigo-800">34 Years</h4>
            <p className="text-gray-600">Of tech evolution witnessed</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex justify-center mb-2">
              <MapPin size={28} className="text-indigo-600" />
            </div>
            <h4 className="font-bold text-indigo-800">2 Countries</h4>
            <p className="text-gray-600">Global tech adventure</p>
          </div>
        </div>
        <p className="mt-6 text-gray-700">
          From debugging COBOL with floppy disks to managing AWS deployments,
          Abinash has seen it all—and somehow managed to keep his sense of humor intact!
        </p>
      </motion.div>
    </div>
  );
};

export default Timeline;