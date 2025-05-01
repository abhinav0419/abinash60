import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Database, Server, ShoppingCart, Smartphone } from 'lucide-react';

interface CompanyLogoProps {
  company: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ company }) => {
  const logoVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  const getCompanyLogo = () => {
    switch (company) {
      case 'startup':
        return (
          <motion.div 
            className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover="hover"
            variants={logoVariants}
          >
            <Code size={24} />
          </motion.div>
        );
      case 'oitpl':
        return (
          <motion.div 
            className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover="hover"
            variants={logoVariants}
          >
            <Database size={24} />
          </motion.div>
        );
      case 'niit':
        return (
          <motion.div 
            className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover="hover"
            variants={logoVariants}
          >
            <Briefcase size={24} />
          </motion.div>
        );
      case 'xyant':
        return (
          <motion.div 
            className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover="hover"
            variants={logoVariants}
          >
            <Server size={24} />
          </motion.div>
        );
      case 'microsoft':
        return (
          <motion.div 
            className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover="hover"
            variants={logoVariants}
          >
            <Smartphone size={24} />
          </motion.div>
        );
      case 'amazon':
        return (
          <motion.div 
            className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover="hover"
            variants={logoVariants}
          >
            <ShoppingCart size={24} />
          </motion.div>
        );
      default:
        return (
          <motion.div 
            className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            whileHover="hover"
            variants={logoVariants}
          >
            <Briefcase size={24} />
          </motion.div>
        );
    }
  };

  return getCompanyLogo();
};

export default CompanyLogo;