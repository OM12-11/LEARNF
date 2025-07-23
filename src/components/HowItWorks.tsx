import React from 'react';
import { Upload, Zap, BarChart3, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Sample Collection',
      description: 'Collect a small sample of fresh produce using our standardized collection protocol.',
      step: '01'
    },
    {
      icon: Zap,
      title: 'Rapid Analysis',
      description: 'Our advanced sensors perform multi-spectral analysis in under 5 minutes.',
      step: '02'
    },
    {
      icon: BarChart3,
      title: 'AI Processing',
      description: 'Machine learning algorithms analyze the spectral data against our comprehensive database.',
      step: '03'
    },
    {
      icon: FileText,
      title: 'Detailed Report',
      description: 'Receive a comprehensive report with quality metrics, adulteration status, and certification.',
      step: '04'
    }
  ];

  return (
    <section id="process" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            How It Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our streamlined testing process delivers accurate results quickly and efficiently.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center lg:items-center">
                    <div className="relative">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/25">
                        {step.step}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center h-16 w-16 rounded-full bg-cyan-500/20 transform scale-125 -z-10 animate-pulse"></div>
                    </div>
                    
                    <div className="mt-6 text-center lg:text-center max-w-sm">
                      <step.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-800 border border-cyan-500/20 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Real-Time Testing Dashboard
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Monitor your testing results in real-time with our intuitive dashboard interface.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.8%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">{'< 5min'}</div>
                <div className="text-sm text-gray-400">Test Duration</div>
              </div>
              <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-6 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;