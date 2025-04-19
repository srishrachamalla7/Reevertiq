import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Zap, BarChart, Globe, Shield, Mic, ShoppingCart, Heart, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatbotDevelopment = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP with sentiment analysis, entity recognition, and intent classification for human-like conversations.',
    },
    {
      icon: Zap,
      title: 'Real-time Responses',
      description: 'Lightning-fast responses (under 200ms) with intelligent context handling for seamless interactions.',
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to track performance, user interactions, and conversation trends in real-time.',
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Support for 100+ languages with automatic translation and cultural nuance adaptation.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, GDPR compliance, and robust data protection measures.',
    },
    {
      icon: Bot,
      title: 'Personality Customization',
      description: "Tailor your chatbot's tone, style, and personality to align with your brand identity.",
    },
  ];

  const integrations = [
    'Slack',
    'Microsoft Teams',
    'WhatsApp',
    'Facebook Messenger',
    'Telegram',
    'Discord',
    'Custom Websites',
    'Salesforce',
  ];

  const useCases = [
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Automate customer support, recommend products, and boost sales with personalized assistance.',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Provide 24/7 patient support, appointment scheduling, and symptom checking.',
    },
    {
      icon: Heart,
      title: 'Nonprofits',
      description: 'Engage donors, answer FAQs, and streamline donation processes.',
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
            <Bot className="w-20 h-20 mx-auto mb-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Custom Chatbot Development
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Enhance customer engagement and streamline support with our AI-powered chatbot solutions.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Join over 500 businesses transforming their customer experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary transform hover:scale-105 transition-all duration-300">
                Start Building
              </Link>
              <button className="btn-secondary transform hover:scale-105 transition-all duration-300">
                View Demo
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
              Connect your chatbot with popular platforms in minutes.
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
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies using our chatbot solutions to drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
              <button className="btn-secondary transform hover:scale-105 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChatbotDevelopment;