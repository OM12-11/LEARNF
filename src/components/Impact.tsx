import React from 'react';
import { TrendingUp, Shield, Globe2, Heart } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Shield,
      value: '2M+',
      label: 'Tests Completed',
      description: 'Ensuring food safety across the supply chain'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Export Increase',
      description: 'Average improvement in export volumes'
    },
    {
      icon: Globe2,
      value: '45',
      label: 'Countries Served',
      description: 'Global reach and trusted partnerships'
    },
    {
      icon: Heart,
      value: '99.9%',
      label: 'Consumer Satisfaction',
      description: 'Trust and confidence in certified produce'
    }
  ];

  return (
    <section id="impact" className="py-16 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Impact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Transforming Food Safety Globally
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our technology is making a real difference in food safety, consumer trust, and global trade.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 border border-cyan-500/30 text-cyan-400 mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-extrabold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-cyan-400 mb-2">{stat.label}</div>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-900 border border-cyan-500/20 rounded-lg shadow-lg overflow-hidden">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-white mb-4">
                  Success Stories
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-semibold text-white">AgriCorp Export Ltd.</h4>
                    <p className="text-gray-300 mt-1">
                      "FreshGuard helped us increase our export revenue by 200% within the first year. The certification opened doors to European markets we couldn't access before."
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-white">Green Valley Farms</h4>
                    <p className="text-gray-300 mt-1">
                      "Consumer trust in our brand has never been higher. The transparent testing results give our customers confidence in every purchase."
                    </p>
                  </div>
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-semibold text-white">FreshMart Chain</h4>
                    <p className="text-gray-300 mt-1">
                      "Our customers actively seek out FreshGuard certified products. It's become a key differentiator in our competitive market."
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-64 lg:h-auto">
                <img
                  className="w-full h-full object-cover opacity-80"
                  src="https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Successful farmers and processors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;