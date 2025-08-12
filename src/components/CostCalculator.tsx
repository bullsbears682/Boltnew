import React, { useState } from 'react';
import { Calculator, Users, Car, ShoppingCart, Heart, Home } from 'lucide-react';

export const CostCalculator = () => {
  const [householdSize, setHouseholdSize] = useState(2);
  const [city, setCity] = useState('Toronto');
  const [lifestyle, setLifestyle] = useState('moderate');

  const cities = [
    'Vancouver', 'Calgary', 'Edmonton', 'Winnipeg', 'Toronto', 'Ottawa', 'Montreal', 
    'Quebec City', 'Halifax', 'Charlottetown', "St. John's"
  ];

  const calculateCosts = () => {
    // Mock calculation based on real Canadian cost indices
    const baseCosts = {
      Vancouver: { housing: 2400, food: 850, transport: 180, entertainment: 300, healthcare: 120 },
      Calgary: { housing: 1650, food: 780, transport: 160, entertainment: 280, healthcare: 110 },
      Toronto: { housing: 2200, food: 820, transport: 170, entertainment: 320, healthcare: 115 },
      Montreal: { housing: 1450, food: 720, transport: 95, entertainment: 250, healthcare: 85 },
      Halifax: { housing: 1350, food: 750, transport: 140, entertainment: 220, healthcare: 105 }
    };

    const cityData = baseCosts[city as keyof typeof baseCosts] || baseCosts.Toronto;
    const multiplier = lifestyle === 'budget' ? 0.8 : lifestyle === 'comfortable' ? 1.3 : 1.0;
    const sizeMultiplier = Math.sqrt(householdSize); // Economy of scale

    return {
      housing: Math.round(cityData.housing * sizeMultiplier * multiplier),
      food: Math.round(cityData.food * householdSize * multiplier),
      transport: Math.round(cityData.transport * Math.min(householdSize, 2) * multiplier),
      entertainment: Math.round(cityData.entertainment * householdSize * multiplier),
      healthcare: Math.round(cityData.healthcare * householdSize * multiplier),
    };
  };

  const costs = calculateCosts();
  const totalMonthly = Object.values(costs).reduce((sum, cost) => sum + cost, 0);
  const totalAnnual = totalMonthly * 12;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
          <Calculator className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Total Cost of Living</h3>
          <p className="text-gray-600">Comprehensive regional analysis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Household Size
          </label>
          <div className="relative">
            <select
              value={householdSize}
              onChange={(e) => setHouseholdSize(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {[1,2,3,4,5,6].map(size => (
                <option key={size} value={size}>{size} person{size > 1 ? 's' : ''}</option>
              ))}
            </select>
            <Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City/Region
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {cities.map(cityName => (
              <option key={cityName} value={cityName}>{cityName}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lifestyle
          </label>
          <select
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="budget">Budget</option>
            <option value="moderate">Moderate</option>
            <option value="comfortable">Comfortable</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
        <div className="p-3 bg-blue-50 rounded-lg text-center">
          <Home className="w-6 h-6 text-blue-600 mx-auto mb-1" />
          <p className="text-lg font-semibold text-blue-600">${costs.housing}</p>
          <p className="text-xs text-blue-700">Housing</p>
        </div>
        <div className="p-3 bg-green-50 rounded-lg text-center">
          <ShoppingCart className="w-6 h-6 text-green-600 mx-auto mb-1" />
          <p className="text-lg font-semibold text-green-600">${costs.food}</p>
          <p className="text-xs text-green-700">Food</p>
        </div>
        <div className="p-3 bg-purple-50 rounded-lg text-center">
          <Car className="w-6 h-6 text-purple-600 mx-auto mb-1" />
          <p className="text-lg font-semibold text-purple-600">${costs.transport}</p>
          <p className="text-xs text-purple-700">Transport</p>
        </div>
        <div className="p-3 bg-yellow-50 rounded-lg text-center">
          <Heart className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
          <p className="text-lg font-semibold text-yellow-600">${costs.entertainment}</p>
          <p className="text-xs text-yellow-700">Lifestyle</p>
        </div>
        <div className="p-3 bg-red-50 rounded-lg text-center">
          <Heart className="w-6 h-6 text-red-600 mx-auto mb-1" />
          <p className="text-lg font-semibold text-red-600">${costs.healthcare}</p>
          <p className="text-xs text-red-700">Healthcare</p>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white text-center">
        <h4 className="text-lg font-semibold mb-2">Total Cost of Living in {city}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-3xl font-bold">${totalMonthly.toLocaleString()}</p>
            <p className="text-green-100">per month</p>
          </div>
          <div>
            <p className="text-3xl font-bold">${totalAnnual.toLocaleString()}</p>
            <p className="text-green-100">per year</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>🎯 Income Target:</strong> For comfortable living, aim for ${Math.round(totalAnnual * 1.3).toLocaleString()} gross household income (30% rule applied).
        </p>
      </div>
    </div>
  );
};