import React, { useState } from 'react';
import { Target, TrendingUp, MapPin, DollarSign } from 'lucide-react';

export const SalaryCalculator = () => {
  const [targetCity, setTargetCity] = useState('Toronto');
  const [currentSalary, setCurrentSalary] = useState(70000);
  const [familySize, setFamilySize] = useState(2);
  const [savings, setSavings] = useState(10);

  const cities = [
    { name: 'Vancouver', costIndex: 1.15, avgSalary: 72000 },
    { name: 'Toronto', costIndex: 1.0, avgSalary: 68000 },
    { name: 'Calgary', costIndex: 0.88, avgSalary: 74000 },
    { name: 'Montreal', costIndex: 0.82, avgSalary: 58000 },
    { name: 'Ottawa', costIndex: 0.92, avgSalary: 71000 },
    { name: 'Edmonton', costIndex: 0.85, avgSalary: 69000 },
    { name: 'Halifax', costIndex: 0.79, avgSalary: 54000 }
  ];

  const calculateRequirements = () => {
    const city = cities.find(c => c.name === targetCity);
    if (!city) return { comfortable: 0, adequate: 0, comparison: 0, gap: 0 };

    // Base comfortable living calculation
    const baseComfortable = 55000 * Math.sqrt(familySize) * city.costIndex;
    const comfortable = Math.round(baseComfortable * (1 + savings / 100));
    
    const adequate = Math.round(baseComfortable * 0.75);
    const comparison = ((comfortable - currentSalary) / currentSalary) * 100;
    const gap = comfortable - currentSalary;

    return { comfortable, adequate, comparison, gap, avgSalary: city.avgSalary };
  };

  const results = calculateRequirements();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
          <Target className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Salary Requirements</h3>
          <p className="text-gray-600">Calculate income needs for your lifestyle</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target City
          </label>
          <div className="relative">
            <select
              value={targetCity}
              onChange={(e) => setTargetCity(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              {cities.map(city => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
            </select>
            <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Salary
          </label>
          <div className="relative">
            <input
              type="number"
              value={currentSalary}
              onChange={(e) => setCurrentSalary(parseInt(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Household Size
          </label>
          <select
            value={familySize}
            onChange={(e) => setFamilySize(parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            {[1,2,3,4,5,6].map(size => (
              <option key={size} value={size}>{size} person{size > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Savings Rate (%)
          </label>
          <input
            type="number"
            value={savings}
            onChange={(e) => setSavings(parseInt(e.target.value))}
            min="0"
            max="30"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-50 rounded-lg text-center border border-green-200">
          <h4 className="font-semibold text-green-800 mb-1">Comfortable Living</h4>
          <p className="text-2xl font-bold text-green-600">${results.comfortable?.toLocaleString()}</p>
          <p className="text-sm text-green-700">Includes {savings}% savings</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg text-center border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-1">Adequate Living</h4>
          <p className="text-2xl font-bold text-blue-600">${results.adequate?.toLocaleString()}</p>
          <p className="text-sm text-blue-700">Basic needs covered</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg text-center border border-purple-200">
          <h4 className="font-semibold text-purple-800 mb-1">City Average</h4>
          <p className="text-2xl font-bold text-purple-600">${results.avgSalary?.toLocaleString()}</p>
          <p className="text-sm text-purple-700">Regional median</p>
        </div>
      </div>

      <div className={`p-4 rounded-lg border ${
        results.gap > 0 
          ? 'bg-yellow-50 border-yellow-200' 
          : 'bg-green-50 border-green-200'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className={`font-semibold mb-1 ${
              results.gap > 0 ? 'text-yellow-800' : 'text-green-800'
            }`}>
              {results.gap > 0 ? 'Income Gap Analysis' : 'You\'re on Track!'}
            </h4>
            {results.gap > 0 ? (
              <p className="text-yellow-700">
                You need ${Math.abs(results.gap).toLocaleString()} more annually for comfortable living in {targetCity}
              </p>
            ) : (
              <p className="text-green-700">
                Your current salary exceeds the comfortable living threshold by ${Math.abs(results.gap).toLocaleString()}
              </p>
            )}
          </div>
          <div className="text-right">
            <div className={`flex items-center space-x-1 ${
              results.comparison > 0 ? 'text-yellow-600' : 'text-green-600'
            }`}>
              <TrendingUp className="w-5 h-5" />
              <span className="font-bold">
                {results.comparison > 0 ? '+' : ''}{results.comparison.toFixed(1)}%
              </span>
            </div>
            <p className="text-sm text-gray-600">vs. current salary</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>💡 Career Tip:</strong> Consider skills training, certifications, or role changes to bridge the income gap. 
          Remote work from lower-cost regions can also help optimize your cost of living.
        </p>
      </div>
    </div>
  );
};