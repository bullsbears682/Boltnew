import React, { useState } from 'react';
import { Home, TrendingUp, MapPin, Calculator } from 'lucide-react';

export const HousingAnalyzer = () => {
  const [postalCode, setPostalCode] = useState('');
  const [housingType, setHousingType] = useState('rent');
  const [results, setResults] = useState<any>(null);

  const analyzeHousing = () => {
    // Mock analysis - in real app would call Statistics Canada & CMHC APIs
    const mockResults = {
      averageRent: housingType === 'rent' ? 1850 : null,
      averagePrice: housingType === 'buy' ? 485000 : null,
      priceChange: 12.5,
      affordabilityRating: 'Challenging',
      recommendedIncome: housingType === 'rent' ? 74000 : 145500,
      neighborhood: 'Downtown Toronto',
      province: 'Ontario'
    };
    setResults(mockResults);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          <Home className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Housing Affordability</h3>
          <p className="text-gray-600">Real-time analysis by postal code</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Postal Code
          </label>
          <div className="relative">
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
              placeholder="M5V 3A8"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Housing Type
          </label>
          <select
            value={housingType}
            onChange={(e) => setHousingType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
          >
            <option value="rent">Rental Market</option>
            <option value="buy">Purchase Market</option>
          </select>
        </div>
      </div>

      <button
        onClick={analyzeHousing}
        className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
      >
        <Calculator className="w-5 h-5" />
        <span>Analyze Housing Market</span>
      </button>

      {results && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-red-600">
                ${results.averageRent || results.averagePrice?.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                Average {housingType === 'rent' ? 'Monthly Rent' : 'Purchase Price'}
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-green-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 mr-1" />
                +{results.priceChange}%
              </p>
              <p className="text-sm text-gray-600">Year-over-year change</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <p className="text-2xl font-bold text-blue-600">
                ${results.recommendedIncome?.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Recommended income</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Affordability Rating:</strong> {results.affordabilityRating} in {results.neighborhood}, {results.province}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};