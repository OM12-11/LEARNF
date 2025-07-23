import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">FreshGuard</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#technology" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:glow-cyan">Technology</a>
              <a href="#benefits" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:glow-cyan">Benefits</a>
              <a href="#process" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:glow-cyan">How It Works</a>
              <a href="#impact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:glow-cyan">Impact</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 p-2 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-cyan-500/20">
              <a href="#technology" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors">Technology</a>
              <a href="#benefits" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors">Benefits</a>
              <a href="#process" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors">How It Works</a>
              <a href="#impact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors">Impact</a>
              <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;