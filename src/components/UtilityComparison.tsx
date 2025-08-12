import React, { useState } from 'react';
import { Zap, Droplets, Thermometer, Wifi } from 'lucide-react';

export const UtilityComparison = () => {
  const [selectedProvince, setSelectedProvince] = useState('ON');
  
  const provinces = [
    { code: 'BC', name: 'British Columbia', electricity: 0.1284, gas: 0.086, water: 45, internet: 65 },
    { code: 'AB', name: 'Alberta', electricity: 0.1650, gas: 0.078, water: 38, internet: 70 },
    { code: 'SK', name: 'Saskatchewan', electricity: 0.1580, gas: 0.082, water: 42, internet: 68 },
    { code: 'MB', name: 'Manitoba', electricity: 0.0987, gas: 0.085, water: 48, internet: 72 },
    { code: 'ON', name: 'Ontario', electricity: 0.1340, gas: 0.088, water: 52, internet: 75 },
    { code: 'QC', name: 'Quebec', electricity: 0.0735, gas: 0.092, water: 35, internet: 58 },
    { code: 'NB', name: 'New Brunswick', electricity: 0.1280, gas: 0.095, water: 46, internet: 69 },
    { code: 'NS', name: 'Nova Scotia', electricity: 0.1654, gas: 0.098, water: 49, internet: 71 },
    { code: 'PE', name: 'Prince Edward Island', electricity: 0.1453, gas: 0.101, water: 44, internet: 66 },
    { code: 'NL', name: 'Newfoundland and Labrador', electricity: 0.1185, gas: 0.088, water: 41, internet: 73 }
  ];

  const currentProvince = provinces.find(p => p.code === selectedProvince);
  const calculateMonthly = () => {
    if (!currentProvince) return { electricity: 0, gas: 0, water: 0, internet: 0, total: 0 };
    
    const electricity = currentProvince.electricity * 1000; // 1000 kWh average
    const gas = currentProvince.gas * 100; // 100 GJ average
    const water = currentProvince.water;
    const internet = currentProvince.internet;
    const total = electricity + gas + water + internet;
    
    return { electricity, gas, water, internet, total };
  };

  const monthly = calculateMonthly();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Zap className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Utility Cost Optimizer</h3>
          <p className="text-gray-600">Compare provincial rates & save money</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Province/Territory
        </label>
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          {provinces.map(province => (
            <option key={province.code} value={province.code}>
              {province.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            <span className="font-medium text-yellow-800">Electricity</span>
          </div>
          <p className="text-2xl font-bold text-yellow-600">${monthly.electricity.toFixed(0)}</p>
          <p className="text-xs text-yellow-700">per month (1000 kWh)</p>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Thermometer className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-blue-800">Natural Gas</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">${monthly.gas.toFixed(0)}</p>
          <p className="text-xs text-blue-700">per month (100 GJ)</p>
        </div>

        <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
          <div className="flex items-center space-x-2 mb-2">
            <Droplets className="w-5 h-5 text-cyan-600" />
            <span className="font-medium text-cyan-800">Water & Sewer</span>
          </div>
          <p className="text-2xl font-bold text-cyan-600">${monthly.water}</p>
          <p className="text-xs text-cyan-700">per month (average)</p>
        </div>

        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <Wifi className="w-5 h-5 text-purple-600" />
            <span className="font-medium text-purple-800">Internet</span>
          </div>
          <p className="text-2xl font-bold text-purple-600">${monthly.internet}</p>
          <p className="text-xs text-purple-700">per month (avg plan)</p>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-green-800">Total Monthly Utilities</h4>
            <p className="text-sm text-green-700">{currentProvince?.name}</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-green-600">${monthly.total.toFixed(0)}</p>
            <p className="text-sm text-green-700">per month</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>💡 Optimization Tip:</strong> Quebec has the lowest electricity rates in Canada, while Nova Scotia has the highest. Consider energy-efficient appliances to reduce consumption.
        </p>
      </div>
    </div>
  );
};