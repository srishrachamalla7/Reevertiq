import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Zap, BarChart, Shield, Database, ShoppingCart, Factory, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const MLAndPredictiveAnalytics = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Predictive Modeling',
      description: 'Build models to forecast trends, behaviors, and outcomes with precision.',
    },
    {
      icon: Brain,
      title: 'Machine Learning Expertise',
      description: 'Leverage advanced ML algorithms tailored to your business needs.',
    },
    {
      icon: Zap,
      title: 'Real-Time Predictions',
      description: 'Deliver instant predictions for dynamic decision-making.',
    },
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Uncover actionable insights from complex datasets with ML.',
    },
    {
      icon: Database,
      title: 'Scalable Data Processing',
      description: 'Handle large-scale data efficiently with optimized ML pipelines.',
    },
    {
      icon: Shield,
      title: 'Model Security',
      description: 'Protect your ML models and data with robust security measures.',
    },
  ];

  const integrations = [
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'AWS SageMaker',
    'Google Cloud ML',
    'Microsoft Azure ML',
    'Apache Spark MLlib',
    'H2O.ai',
  ];

  const useCases = [
    {
      icon: ShoppingCart,
      title: 'Retail',
      description: 'Predict demand, optimize pricing, and personalize recommendations.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Forecast maintenance needs and improve operational efficiency.',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Enhance patient outcomes with predictive diagnostics and risk analysis.',
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
            <Brain className="w-20 h-20 mx-auto mb-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              ML & Predictive Analytics
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Empower your business with machine learning and predictive insights.
            </p>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
              Anticipate the future and make smarter decisions today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary transform hover:scale-105 transition-all duration-300">
                Get Started
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
              Connect with leading ML and analytics platforms.
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
              Ready to Predict the Future with ML?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Harness machine learning to drive innovation and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
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

export default MLAndPredictiveAnalytics;