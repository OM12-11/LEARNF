import React from 'react';
import { Shield, CheckCircle, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Ensure Food</span>
                  <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Safety & Quality</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Advanced technology to detect adulteration in fresh produce, building consumer trust and enabling better export opportunities for growers and processors.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/25 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#technology" className="w-full flex items-center justify-center px-8 py-3 border border-cyan-500/50 text-base font-medium rounded-md text-cyan-400 bg-gray-800/50 hover:bg-gray-700/50 hover:border-cyan-400 md:py-4 md:text-lg md:px-10 transition-all duration-300">
                      Learn More
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
                  <div className="flex items-center">
                    <Shield className="h-6 w-6 text-cyan-400 mr-2" />
                    <span className="text-sm text-gray-300">100% Accurate Testing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-cyan-400 mr-2" />
                    <span className="text-sm text-gray-300">FDA Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-6 w-6 text-cyan-400 mr-2" />
                    <span className="text-sm text-gray-300">Export Ready</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                  <div className="relative block w-full bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/20">
                    <img
                      className="w-full h-64 object-cover"
                      src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Fresh produce testing"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hero;