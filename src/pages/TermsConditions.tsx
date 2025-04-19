import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Terms and Conditions</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Reevertiq's website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                The materials on Reevertiq's website are provided on an 'as is' basis. Reevertiq makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Reevertiq or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Reevertiq's website.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;