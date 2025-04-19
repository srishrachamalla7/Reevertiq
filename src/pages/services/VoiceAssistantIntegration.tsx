import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Zap, Shield, Smartphone, Globe, BarChart, ShoppingCart, Home, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceAssistantIntegration = () => {
  const features = [
    {
      icon: Mic,
      title: 'Voice Command Recognition',
      description: 'Enable seamless voice interactions with accurate command detection.',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process voice inputs instantly for smooth user experiences.',
    },
    {
      icon: Smartphone,
      title: 'Device Integration',
      description: 'Integrate voice assistants into mobile, IoT, and custom devices.',
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Support multiple languages for global accessibility.',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Protect user voice data with advanced encryption and compliance.',
    },
    {
      icon: BarChart,
      title: 'Usage Analytics',
      description: 'Track voice interactions and optimize performance with insights.',
    },
  ];

  const integrations = [
    'Amazon Alexa',
    'Google Assistant',
    'Apple Siri',
    'Microsoft Cortana',
    'Dialogflow',
    'IBM Watson',
    'Samsung Bixby',
    'Custom APIs',
  ];

  const useCases = [
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Enable voice shopping, order tracking, and customer support.',
    },
    {
      icon: Home,
      title: 'Smart Homes',
      description: 'Control devices and automate tasks with voice commands.',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Assist patients and providers with hands-free voice solutions.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1A]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B45]/20 to-[#FF8F8B]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Mic className="w-20 h-20 mx-auto mb-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Voice Assistant Integration
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Bring voice-powered intelligence to your systems and devices.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Seamless integration for a hands-free, intuitive experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary transform hover:scale-105 transition-all duration-300">
                Integrate Now
              </Link>
              <button className="btn-secondary transform hover:scale-105 transition-all duration-300">
                See Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Key Features</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4B45]/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Industry Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card group cursor-pointer"
              >
                <useCase.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Seamless Integrations</h2>
            <p className="text-xl text-gray-300">
              Connect with leading voice platforms and custom systems.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group cursor-pointer text-center"
              >
                <span className="group-hover:text-primary transition-colors duration-300">{platform}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4B45]/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Add Voice to Your World?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Integrate voice assistants to enhance accessibility and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Link>
              <button className="btn-secondary transform hover:scale-105 transition-all duration-300">
                Request a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VoiceAssistantIntegration;