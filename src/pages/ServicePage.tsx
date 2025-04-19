import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, HeadphonesIcon, Brain, LineChart, Cpu, Code, Database, Lightbulb, Zap, Users } from 'lucide-react';

const services = {
  'custom-chatbot-development': {
    title: 'Custom Chatbot Development',
    icon: Bot,
    description: 'Build intelligent conversational interfaces that transform how you interact with customers.',
    benefits: [
      'Enhance customer support efficiency',
      'Available 24/7 to handle inquiries',
      'Reduce operational costs',
      'Improve customer satisfaction',
    ],
    useCases: [
      'Customer Service Automation',
      'Lead Generation',
      'Product Recommendations',
      'Appointment Scheduling',
    ],
    features: [
      'Natural Language Understanding',
      'Multi-language Support',
      'Analytics Dashboard',
      'Seamless Integration',
    ],
  },
  'voice-assistant-integration': {
    title: 'Voice Assistant Integration',
    icon: HeadphonesIcon,
    description: 'Implement cutting-edge voice technology to create hands-free, intuitive user experiences.',
    benefits: [
      'Enhanced User Experience',
      'Improved Accessibility',
      'Increased Efficiency',
      'Modern Interface',
    ],
    useCases: [
      'Smart Home Control',
      'Voice Commerce',
      'Healthcare Applications',
      'Automotive Integration',
    ],
    features: [
      'Natural Voice Recognition',
      'Custom Wake Words',
      'Multi-platform Support',
      'Voice Authentication',
    ],
  },
  // Add other services here...
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return (
      <div className="pt-24 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-400">Service Not Found</h1>
        <p className="mt-4 text-gray-300">The requested service does not exist.</p>
        <Link to="/" className="btn-primary inline-block mt-8">
          Return to Home
        </Link>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <ServiceIcon className="w-16 h-16 text-neon-blue mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card"
          >
            <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card"
          >
            <h2 className="text-2xl font-semibold mb-6">Use Cases</h2>
            <ul className="space-y-4">
              {service.useCases.map((useCase, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3" />
                  {useCase}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="card"
          >
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how {service.title} can benefit your business.
          </p>
          <Link to="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;