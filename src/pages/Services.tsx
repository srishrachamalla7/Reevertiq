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
    benefits: [
      'Enhanced customer support efficiency',
      '24/7 availability',
      'Reduced operational costs',
      'Improved customer satisfaction',
    ],
    useCases: [
      'Customer Service',
      'Lead Generation',
      'Product Recommendations',
      'Appointment Scheduling',
    ],
    path: '/services/custom-chatbot-development', // Added explicit path
  },
  {
    title: 'Voice Assistant Integration',
    icon: HeadphonesIcon,
    description: 'Seamless voice-enabled solutions for enhanced user interaction.',
    benefits: [
      'Hands-free operation',
      'Natural interaction',
      'Improved accessibility',
      'Enhanced user experience',
    ],
    useCases: [
      'Smart Home Control',
      'Voice Commerce',
      'Healthcare Applications',
      'Automotive Systems',
    ],
    path: '/services/voice-assistant-integration',
  },
  {
    title: 'Natural Language Processing',
    icon: Brain,
    description: 'Advanced text analysis and understanding capabilities.',
    benefits: [
      'Automated text analysis',
      'Sentiment analysis',
      'Language translation',
      'Content categorization',
    ],
    useCases: [
      'Document Analysis',
      'Social Media Monitoring',
      'Content Moderation',
      'Market Research',
    ],
    path: '/services/natural-language-processing',
  },
  {
    title: 'AI-Powered Data Analytics',
    icon: LineChart,
    description: 'Transform raw data into actionable business insights.',
    benefits: [
      'Data-driven decisions',
      'Pattern recognition',
      'Predictive insights',
      'Performance optimization',
    ],
    useCases: [
      'Business Intelligence',
      'Market Analysis',
      'Risk Assessment',
      'Performance Tracking',
    ],
    path: '/services/ai-powered-data-analytics',
  },
  {
    title: 'Machine Learning Development',
    icon: Cpu,
    description: 'Custom ML solutions for complex business challenges.',
    benefits: [
      'Automated learning',
      'Pattern detection',
      'Predictive capabilities',
      'Process optimization',
    ],
    useCases: [
      'Fraud Detection',
      'Recommendation Systems',
      'Image Recognition',
      'Predictive Maintenance',
    ],
    path: '/services/machine-learning-development',
  },
  {
    title: 'Computer Vision Services',
    icon: Code,
    description: 'Intelligent image and video analysis applications.',
    benefits: [
      'Automated visual inspection',
      'Real-time monitoring',
      'Object detection',
      'Quality control',
    ],
    useCases: [
      'Quality Assurance',
      'Security Systems',
      'Medical Imaging',
      'Retail Analytics',
    ],
    path: '/services/computer-vision-services',
  },
  {
    title: 'Predictive Analytics',
    icon: Database,
    description: 'Forecast trends and outcomes with precision.',
    benefits: [
      'Future insights',
      'Risk mitigation',
      'Resource optimization',
      'Strategic planning',
    ],
    useCases: [
      'Demand Forecasting',
      'Risk Management',
      'Resource Planning',
      'Market Prediction',
    ],
    path: '/services/predictive-analytics',
  },
  {
    title: 'AI Consulting',
    icon: Lightbulb,
    description: 'Expert guidance on AI adoption and strategy.',
    benefits: [
      'Strategic guidance',
      'Technology assessment',
      'Implementation planning',
      'Risk management',
    ],
    useCases: [
      'Digital Transformation',
      'AI Strategy Development',
      'Technology Selection',
      'Process Optimization',
    ],
    path: '/services/ai-consulting',
  },
  {
    title: 'AI Automation',
    icon: Zap,
    description: 'Streamline operations with intelligent automation.',
    benefits: [
      'Process efficiency',
      'Error reduction',
      'Cost savings',
      'Scalability',
    ],
    useCases: [
      'Workflow Automation',
      'Document Processing',
      'Data Entry',
      'Quality Control',
    ],
    path: '/services/ai-automation',
  },
  {
    title: 'AI Customer Support',
    icon: Users,
    description: '24/7 intelligent customer service solutions.',
    benefits: [
      'Always available',
      'Quick response time',
      'Consistent service',
      'Scalable support',
    ],
    useCases: [
      'Help Desk',
      'FAQ Automation',
      'Ticket Management',
      'Customer Feedback',
    ],
    path: '/services/ai-customer-support',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">AI Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of AI solutions designed to transform your business operations and drive innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Link
                  to={service.path}
                  className="block"
                >
                  <div className="card group h-full">
                    <div className="flex items-center justify-between mb-6">
                      <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Use Cases</h4>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2" />
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
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

export default Services;