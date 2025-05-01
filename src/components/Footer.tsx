import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold">Abinash Das</h3>
            <p className="text-indigo-200">A Hilarious Journey Through Tech</p>
          </div>
          
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com/in/abinashd/" className="text-white hover:text-yellow-300 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-indigo-700 pt-6 text-center text-indigo-300">
          <p>© 2025 Abinash Das • From floppy disks to quantum computing</p>
          <p className="mt-2 text-sm">This site was made with 34 years of experience and a lot of coffee</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;