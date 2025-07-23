import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-cyan-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">FreshGuard</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the future of food safety with advanced testing technology that builds consumer trust and enables global trade opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 rounded-full p-2">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 rounded-full p-2">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 rounded-full p-2">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 rounded-full p-2">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Food Testing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Quality Certification</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Export Compliance</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Partners</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} FreshGuard. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;