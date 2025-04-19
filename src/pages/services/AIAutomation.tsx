import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Cpu, Clock, BarChart, Shield, Code, Bot, Workflow, FileCheck, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutomation = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Intelligent Workflow Automation',
      description: 'Automate complex business processes with AI-powered decision making and adaptive workflows.',
    },
    {
      icon: Bot,
      title: 'Process Automation Bots',
      description: 'Deploy intelligent bots that handle repetitive tasks with human-like decision making capabilities.',
    },
    {
      icon: Clock,
      title: '24/7 Operation',
      description: 'Continuous operation with automated monitoring and self-healing capabilities.',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time monitoring and analytics of automated processes with actionable insights.',
    },
    {
      icon: Shield,
      title: 'Secure Operations',
      description: 'Enterprise-grade security with role-based access control and audit trails.',
    },
    {
      icon: Code,
      title: 'No-Code Integration',
      description: 'Easy integration with existing systems through our no-code interface.',
    },
  ];

  const benefits = [
    'Reduced operational costs',
    'Increased efficiency',
    'Minimized human error',
    'Faster processing times',
    'Improved accuracy',
    'Better resource allocation',
    'Enhanced compliance',
    'Scalable operations',
  ];

  const useCases = [
    {
      icon: FileCheck,
      title: 'Document Processing',
      description: 'Automated extraction and processing of data from various document formats.',
    },
    {
      icon: Settings,
      title: 'IT Operations',
      description: 'Automated system maintenance, monitoring, and incident response.',
    },
    {
      icon: Cpu,
      title: 'Manufacturing',
      description: 'Smart factory automation with predictive maintenance and quality control.',
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
            <Zap className="w-20 h-20 mx-auto mb-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              AI Automation Solutions
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Transform your business operations with intelligent automation
            </p>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Streamline processes, reduce costs, and boost efficiency with our AI-powered automation platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary transform hover:scale-105 transition-all duration-300">
                Get Started
              </Link>
              <button className="btn-secondary transform hover:scale-105 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Powerful Features
          </h2>
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF4B45]/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Key Benefits
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group cursor-pointer text-center"
              >
                <span className="text-gray-300 group-hover:text-primary transition-colors duration-300">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
            Industry Use Cases
          </h2>
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
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">{useCase.description}</p>
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies using our AI automation solutions to transform their operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Demo
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

export default AIAutomation;