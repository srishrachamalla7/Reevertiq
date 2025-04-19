import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Cpu, LineChart, Users, Code, Database, Lightbulb, Zap, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Custom Chatbot Development',
    icon: Bot,
    description: 'Build intelligent conversational interfaces tailored to your business needs.',
  },
  {
    title: 'Voice Assistant Integration',
    icon: HeadphonesIcon,
    description: 'Seamless voice-enabled solutions for enhanced user interaction.',
  },
  {
    title: 'Natural Language Processing',
    icon: Brain,
    description: 'Advanced text analysis and understanding capabilities.',
  },
  {
    title: 'AI-Powered Data Analytics',
    icon: LineChart,
    description: 'Transform raw data into actionable business insights.',
  },
  {
    title: 'Machine Learning Development',
    icon: Cpu,
    description: 'Custom ML solutions for complex business challenges.',
  },
  {
    title: 'Computer Vision Services',
    icon: Code,
    description: 'Intelligent image and video analysis applications.',
  },
  {
    title: 'Predictive Analytics',
    icon: Database,
    description: 'Forecast trends and outcomes with precision.',
  },
  {
    title: 'AI Consulting',
    icon: Lightbulb,
    description: 'Expert guidance on AI adoption and strategy.',
  },
  {
    title: 'AI Automation',
    icon: Zap,
    description: 'Streamline operations with intelligent automation.',
  },
  {
    title: 'AI Customer Support',
    icon: Users,
    description: '24/7 intelligent customer service solutions.',
  },
];

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#0B0F1A] to-transparent z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transform Your Business with{' '}
            <span className="gradient-text">Advanced AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Innovative AI solutions tailored to drive your success in the digital age
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Get Started
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 px-4 bg-[#0B0F1A]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive range of AI solutions designed to transform your business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="h-full"
              >
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="card group h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 flex-grow">{service.description}</p>
                  <div className="mt-6 flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our AI solutions can help you achieve your goals.
          </p>
          <Link to="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;