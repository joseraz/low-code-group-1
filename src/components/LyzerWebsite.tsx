import React, { useState, useEffect } from 'react';
import { fetchLyzerInstructions, LyzerResponse } from '../services/lyzerAgent';
import { Loader2, Bot, UserPlus, Shield, Smartphone, Play, CheckCircle, HelpCircle, MessageCircle, Phone, Globe, ArrowRight, User, CreditCard, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const LyzerWebsite = () => {
  const [instructions, setInstructions] = useState<LyzerResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    const getInstructions = async () => {
      try {
        setLoading(true);
        const response = await fetchLyzerInstructions();
        setInstructions(response);
        console.log('Lyzer Agent Response:', response);
      } catch (err) {
        console.error('Lyzer connection error:', err);
      } finally {
        setLoading(false);
      }
    };
    getInstructions();
  }, []);
  const onboardingSteps = [{
    id: 1,
    title: "Account Creation",
    description: "Create your account with helpful tooltips and progress indicators",
    icon: UserPlus,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }, {
    id: 2,
    title: "KYC Verification",
    description: "Complete Know Your Customer verification with document guidance",
    icon: Shield,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }, {
    id: 3,
    title: "SIM Activation",
    description: "Activate your SIM card with clear step-by-step instructions",
    icon: Smartphone,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }, {
    id: 4,
    title: "First Use",
    description: "Get started with your service through interactive tutorials",
    icon: Play,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }];
  const faqs = [{
    question: "What documents do I need for KYC verification?",
    answer: "You'll need a valid government-issued ID and proof of address dated within the last 3 months."
  }, {
    question: "How long does SIM activation take?",
    answer: "SIM activation typically takes 2-4 hours. You'll receive a confirmation SMS once activated."
  }, {
    question: "What if my KYC verification fails?",
    answer: "Don't worry! Check that your documents are clear and current. Our support team is here to help."
  }];
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-purple-50">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-orange-600" />
          <p className="text-lg text-gray-700">Setting up your onboarding experience...</p>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-purple-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white space-y-6">
            <div className="flex justify-center mb-6">
              <Smartphone className="h-16 w-16" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to Your
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
              SIM Activation Journey
            </h2>
            
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Get your new SIM card activated in minutes with our streamlined onboarding process. 
              We'll guide you through every step with clear instructions and instant support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg">
                <Zap className="mr-2 h-5 w-5" />
                Activate Now
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl text-lg font-semibold">
                <Globe className="mr-2 h-5 w-5" />
                Track My Progress
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Your Progress</h3>
            <span className="text-sm text-gray-600">Step {currentStep} of 4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-orange-500 to-purple-500 h-3 rounded-full transition-all duration-500" style={{
            width: `${currentStep / 4 * 100}%`
          }}></div>
          </div>
        </div>
      </div>

      {/* Onboarding Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600">
            Follow these easy steps to get your SIM card activated and ready to use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {onboardingSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          return <Card key={step.id} className={`relative cursor-pointer transition-all duration-300 hover:shadow-xl ${isActive ? 'ring-2 ring-orange-500 shadow-lg' : ''}`} onClick={() => setCurrentStep(step.id)}>
                <CardContent className="pt-8 text-center">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                    <Icon className={`h-8 w-8 ${step.color}`} />
                    {isCompleted && <CheckCircle className="absolute -top-2 -right-2 h-6 w-6 text-green-500 bg-white rounded-full" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  {isActive && <Button className="mt-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                      Start Step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>}
                </CardContent>
              </Card>;
        })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get quick answers to common questions about the activation process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-gradient-to-r from-orange-600 to-purple-600 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl text-orange-100">
              Our support team is here to assist you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-8 text-center">
                <MessageCircle className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-orange-100 mb-4">Get instant help from our support team</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-8 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Support</h3>
                <p className="text-orange-100 mb-4">Speak directly with our experts</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-8 text-center">
                <HelpCircle className="h-8 w-8 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Help Center</h3>
                <p className="text-orange-100 mb-4">Browse our comprehensive guides</p>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  Visit Center
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Agent Instructions Debug (Hidden in production) */}
      {instructions && process.env.NODE_ENV === 'development'}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <Smartphone className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">TelecomCorp</span>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Powering connections, simplifying activation
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Support</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default LyzerWebsite;