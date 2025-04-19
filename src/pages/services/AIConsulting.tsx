import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Compass, Cpu, BarChart, Plug, GraduationCap, Shield, ShoppingCart, Stethoscope, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIConsulting = () => {
  const features = [
    {
      icon: Compass,
      title: 'AI Strategy Development',
      description: 'Craft a comprehensive AI roadmap tailored to your business goals and industry landscape.',
    },
    {
      icon: Cpu,
      title: 'Custom AI Solutions',
      description: 'Develop bespoke AI models and algorithms to solve your unique business challenges.',
    },
    {
      icon: BarChart,
      title: 'Data Analysis and Insights',
      description: 'Harness the power of AI to uncover actionable insights from your data.',
    },
    {
      icon: Plug,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI solutions into your existing infrastructure with minimal disruption.',
    },
    {
      icon: GraduationCap,
      title: 'Training and Support',
      description: 'Empower your team with the knowledge and tools to leverage AI effectively.',
    },
    {
      icon: Shield,
      title: 'Ethical AI Consulting',
      description: 'Ensure your AI implementations are ethical, transparent, and compliant with regulations.',
    },
  ];

  const useCases = [
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Optimize inventory, personalize marketing, and enhance customer experiences with AI.',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Improve diagnostics, patient care, and operational efficiency through AI solutions.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Implement predictive maintenance, quality control, and supply chain optimization.',
    },
  ];

  const technologies = [
    'TensorFlow',
    'PyTorch',
    'AWS AI Services',
    'Google Cloud AI',
    'Microsoft Azure AI',
    'IBM Watson',
    'Salesforce Einstein',
    'SAP Leonardo',
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
            <Brain className="w-20 h-20 mx-auto mb-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              AI Consulting Services
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Unlock the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Join leading companies leveraging AI to gain a competitive edge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary transform hover:scale-105 transition-all duration-300">
                Schedule a Consultation
              </Link>
              <button className="btn-secondary transform hover:scale-105 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">Key Services</h2>
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

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Technologies We Work With</h2>
            <p className="text-xl text-gray-300">
              Leverage the power of cutting-edge AI technologies and frameworks.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group cursor-pointer text-center"
              >
                <span className="group-hover:text-primary transition-colors duration-300">{tech}</span>
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
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI consulting services can drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
              <button className="btn-secondary transform hover:scale-105 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsulting;