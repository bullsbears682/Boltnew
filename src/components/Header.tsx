import React from 'react';
import { MapPin, DollarSign, Home, Calculator } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-red-100" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Canada Cost Analyzer</h1>
              <p className="text-red-100 text-sm">Smart Living Decisions for Every Province</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <span className="text-2xl">🍁</span>
            <span className="text-red-100 text-sm">Powered by Statistics Canada</span>
          </div>
        </div>
      </div>
    </header>
  );
};