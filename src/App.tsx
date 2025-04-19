import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";

// Import individual service pages
import ChatbotDevelopment from "./pages/services/ChatbotDevelopment";
import VoiceAssistantIntegration from "./pages/services/VoiceAssistantIntegration";
import NaturalLanguageProcessing from "./pages/services/NaturalLanguageProcessing";
import AIPoweredDataAnalytics from "./pages/services/AIPoweredDataAnalytics";
import MachineLearningDevelopment from "./pages/services/MachineLearningDevelopment";
import ComputerVisionServices from "./pages/services/ComputerVisionServices";
import PredictiveAnalytics from "./pages/services/PredictiveAnalytics";
import AIConsulting from "./pages/services/AIConsulting";
import AIAutomation from "./pages/services/AIAutomation";
import AICustomerSupport from "./pages/services/AICustomerSupport";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F1A] flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />

            {/* Individual service pages */}
            <Route path="/services/custom-chatbot-development" element={<ChatbotDevelopment />} />
            <Route path="/services/voice-assistant-integration" element={<VoiceAssistantIntegration />} />
            <Route path="/services/natural-language-processing" element={<NaturalLanguageProcessing />} />
            <Route path="/services/ai-powered-data-analytics" element={<AIPoweredDataAnalytics />} />
            <Route path="/services/machine-learning-development" element={<MachineLearningDevelopment />} />
            <Route path="/services/computer-vision-services" element={<ComputerVisionServices />} />
            <Route path="/services/predictive-analytics" element={<PredictiveAnalytics />} />
            <Route path="/services/ai-consulting" element={<AIConsulting />} />
            <Route path="/services/ai-automation" element={<AIAutomation />} />
            <Route path="/services/ai-customer-support" element={<AICustomerSupport />} />

            {/* Catch-all dynamic service page (optional) */}
            <Route path="/services/:serviceId" element={<ServicePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App