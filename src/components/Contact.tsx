import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Get Started Today
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Ready to transform your food safety practices? Contact our team to learn more about our testing solutions.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 border border-cyan-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  >
                    <option>Testing Services</option>
                    <option>Equipment Purchase</option>
                    <option>Partnership Opportunities</option>
                    <option>Training & Certification</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your specific requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-md hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 border border-cyan-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">info@freshguard.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">123 Innovation Drive, Tech City, TC 12345</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-8 text-white border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Schedule a free consultation with our food safety experts to discuss your specific needs and learn how FreshGuard can help you achieve your goals.
                </p>
                <button className="bg-white text-gray-900 py-2 px-6 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium hover:shadow-lg">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;