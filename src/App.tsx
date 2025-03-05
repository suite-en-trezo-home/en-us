import React from 'react';
import { Shield, Cpu, Lock, Wallet, Globe, Zap, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Trêzor Suite</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</a>
              <a href="#security" className="text-slate-600 hover:text-blue-600 transition-colors">Security</a>
              <a href="#ecosystem" className="text-slate-600 hover:text-blue-600 transition-colors">Ecosystem</a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Trêzor Suite</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 animate-slide-up">
              The next generation of cryptocurrency management, designed for the future of digital assets.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 animate-bounce-subtle">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Trêzor Suite?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Cpu className="w-8 h-8 text-blue-600" />}
              title="Advanced Technology"
              description="Built with cutting-edge technology for maximum performance and reliability."
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8 text-blue-600" />}
              title="Enhanced Security"
              description="Military-grade encryption protecting your digital assets 24/7."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-blue-600" />}
              title="Global Accessibility"
              description="Access your portfolio from anywhere in the world, anytime."
            />
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Uncompromising Security</h2>
            <p className="text-lg text-slate-600 mb-12">
              Trêzor Suite implements industry-leading security measures to ensure your assets remain protected:
            </p>
            <ul className="text-left space-y-4">
              <SecurityFeature title="Multi-Factor Authentication" />
              <SecurityFeature title="Hardware Security Module Integration" />
              <SecurityFeature title="Regular Security Audits" />
              <SecurityFeature title="Cold Storage Support" />
            </ul>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">The Trêzor Ecosystem</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Desktop Application</h3>
              <p className="text-slate-600">
                The Trêzor Suite desktop application provides a comprehensive suite of tools for managing your cryptocurrency portfolio. With support for multiple wallets, real-time market data, and advanced trading features, you have everything you need at your fingertips.
              </p>
              <a href="https://example.com/desktop" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Web Platform</h3>
              <p className="text-slate-600">
                Access your Trêzor Suite account from any browser with our secure web platform. Perfect for managing your portfolio on the go, the web version offers the same powerful features as our desktop application.
              </p>
              <a href="https://example.com/web" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">Trêzor Suite</span>
              </div>
              <p className="text-slate-400">
                The future of cryptocurrency management.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

function SecurityFeature({ title }) {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
      <Zap className="w-6 h-6 text-blue-600" />
      <span className="font-medium">{title}</span>
    </div>
  );
}

export default App;