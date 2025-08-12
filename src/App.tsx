import React from 'react';
import { Header } from './components/Header';
import { HousingAnalyzer } from './components/HousingAnalyzer';
import { UtilityComparison } from './components/UtilityComparison';
import { CostCalculator } from './components/CostCalculator';
import { SalaryCalculator } from './components/SalaryCalculator';
import { BenefitsFinder } from './components/BenefitsFinder';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Navigate Canada's Cost of Living with
            <span className="text-red-600 block">Confidence & Precision</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From housing affordability to government benefits, make informed financial decisions 
            across all provinces and territories with real-time data and expert analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-green-600">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-medium">Live Data Integration</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <span className="text-xl">🏠</span>
              <span className="font-medium">Housing Crisis Solutions</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600">
              <span className="text-xl">🍁</span>
              <span className="font-medium">Canada-Wide Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Row 1: Housing & Utilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div id="housing">
              <HousingAnalyzer />
            </div>
            <div id="utilities">
              <UtilityComparison />
            </div>
          </div>

          {/* Row 2: Cost Calculator (Full Width) */}
          <div id="calculator">
            <CostCalculator />
          </div>

          {/* Row 3: Salary & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div id="salary">
              <SalaryCalculator />
            </div>
            <div id="benefits">
              <BenefitsFinder />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Canadian Living Costs?
          </h3>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Canadians making smarter financial decisions with our comprehensive analysis tools.
            Get personalized insights for your province and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 transform hover:scale-105">
              Start Your Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200">
              View Sample Report
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-red-100 text-sm">
            <span className="flex items-center">✓ Free to use</span>
            <span className="flex items-center">✓ Real-time data</span>
            <span className="flex items-center">✓ All provinces covered</span>
            <span className="flex items-center">✓ Government verified</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;