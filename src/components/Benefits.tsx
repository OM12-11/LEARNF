import React from 'react';
import { Users, Building2, Globe, Award } from 'lucide-react';

const Benefits = () => {
  const stakeholders = [
    {
      icon: Users,
      title: 'For Consumers',
      benefits: [
        'Guaranteed food safety and quality',
        'Transparent information about produce',
        'Protection from health risks',
        'Value for money assurance'
      ],
      color: 'bg-gray-800 text-cyan-400 border-cyan-500/30'
    },
    {
      icon: Building2,
      title: 'For Growers & Processors',
      benefits: [
        'Build consumer trust and brand reputation',
        'Premium pricing for certified produce',
        'Reduced liability and compliance costs',
        'Quality control optimization'
      ],
      color: 'bg-gray-800 text-purple-400 border-purple-500/30'
    },
    {
      icon: Globe,
      title: 'For Exporters',
      benefits: [
        'Meet international quality standards',
        'Access to premium export markets',
        'Reduced rejection rates at borders',
        'Competitive advantage globally'
      ],
      color: 'bg-gray-800 text-pink-400 border-pink-500/30'
    },
    {
      icon: Award,
      title: 'For Regulators',
      benefits: [
        'Enhanced food safety monitoring',
        'Standardized testing protocols',
        'Improved public health outcomes',
        'Evidence-based policy making'
      ],
      color: 'bg-gray-800 text-yellow-400 border-yellow-500/30'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Benefits</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Value for Every Stakeholder
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our technology creates value across the entire food supply chain, from farm to table.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-md border ${stakeholder.color} mb-4`}>
                  <stakeholder.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-white mb-4">{stakeholder.title}</h3>
                <ul className="space-y-2">
                  {stakeholder.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <div className="h-1.5 w-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-8 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold">
                Unlock Export Opportunities
              </h3>
              <p className="mt-3 text-lg opacity-90">
                Countries with stringent food safety standards are willing to pay premium prices for certified, high-quality produce. Our testing technology opens doors to these lucrative markets.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold">150%</div>
                  <div className="text-sm opacity-90">Average price premium</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Acceptance rate</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Export markets</div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-lg border border-cyan-500/20"
                src="https://images.pexels.com/photos/5966636/pexels-photo-5966636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Global export shipping"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;