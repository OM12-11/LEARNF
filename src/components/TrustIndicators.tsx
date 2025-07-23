import React from 'react';
import { Award, CheckCircle, Star, Users } from 'lucide-react';

const TrustIndicators = () => {
  const certifications = [
    'ISO 17025 Accredited',
    'FDA Recognized',
    'EU Certified',
    'HACCP Compliant',
    'GMP Certified',
    'FSSAI Approved'
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Trust & Certifications</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Globally Recognized Standards
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our technology and processes meet the highest international standards for food safety testing.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <Award className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm font-medium text-white">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gray-800 border border-cyan-500/20 rounded-lg p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-900 border border-cyan-500/30 text-cyan-400 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-400">Every test undergoes rigorous quality control with multiple validation steps.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-900 border border-purple-500/30 text-purple-400 mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Excellence Rating</h3>
              <p className="text-gray-400">Consistently rated as the top choice by food safety professionals worldwide.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-900 border border-pink-500/30 text-pink-400 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Expert Team</h3>
              <p className="text-gray-400">Led by PhD-level food scientists and supported by international experts.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-6">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-500">UN FAO</div>
            <div className="text-2xl font-bold text-gray-500">WHO</div>
            <div className="text-2xl font-bold text-gray-500">FDA</div>
            <div className="text-2xl font-bold text-gray-500">EU Commission</div>
            <div className="text-2xl font-bold text-gray-500">CODEX</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;