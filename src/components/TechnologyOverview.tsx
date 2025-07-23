import React from 'react';
import { Microscope, Cpu, Database, Clock } from 'lucide-react';

const TechnologyOverview = () => {
  const features = [
    {
      icon: Microscope,
      title: 'Advanced Spectroscopy',
      description: 'Near-infrared and Raman spectroscopy for molecular-level analysis of produce quality and composition.'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms trained on thousands of samples to detect even trace amounts of adulterants.'
    },
    {
      icon: Database,
      title: 'Comprehensive Database',
      description: 'Extensive database of adulterant signatures and quality markers for accurate identification.'
    },
    {
      icon: Clock,
      title: 'Rapid Results',
      description: 'Get complete analysis results in under 5 minutes with detailed quality reports.'
    }
  ];

  return (
    <section id="technology" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Technology</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Cutting-Edge Food Safety Testing
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our advanced testing platform combines multiple technologies to ensure the highest accuracy in detecting adulteration and assessing food quality.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gray-800 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-800 border border-cyan-500/20 rounded-lg p-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Detect Multiple Types of Adulteration
              </h3>
              <p className="mt-3 text-lg text-gray-300">
                Our technology can identify various forms of food adulteration including chemical additives, artificial colors, preservatives, and foreign substances.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Pesticide residue detection</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Artificial color identification</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Foreign substance detection</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Nutritional content verification</span>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-lg border border-cyan-500/20"
                src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laboratory testing equipment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;