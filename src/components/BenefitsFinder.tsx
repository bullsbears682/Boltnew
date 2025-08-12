import React, { useState } from 'react';
import { Gift, Users, Baby, GraduationCap, Heart, Check } from 'lucide-react';

export const BenefitsFinder = () => {
  const [profile, setProfile] = useState({
    age: 30,
    income: 50000,
    hasChildren: false,
    isStudent: false,
    province: 'ON'
  });

  const [eligibleBenefits, setEligibleBenefits] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const findBenefits = () => {
    // Mock benefit eligibility logic
    const allBenefits = [
      {
        name: 'Canada Child Benefit (CCB)',
        amount: '$6,833/year per child',
        icon: Baby,
        eligible: profile.hasChildren && profile.income < 75000,
        description: 'Tax-free monthly payments for families with children under 18',
        link: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html'
      },
      {
        name: 'GST/HST Credit',
        amount: '$467/year',
        icon: Gift,
        eligible: profile.income < 60000,
        description: 'Tax-free quarterly payments to offset GST/HST paid',
        link: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/gsthst-credit.html'
      },
      {
        name: 'Canada Student Grant',
        amount: 'Up to $4,200/year',
        icon: GraduationCap,
        eligible: profile.isStudent && profile.income < 40000,
        description: 'Non-repayable financial aid for post-secondary education',
        link: 'https://www.canada.ca/en/services/benefits/education/student-aid/grants-loans/full-time.html'
      },
      {
        name: 'Ontario Trillium Benefit',
        amount: '$1,127/year',
        icon: Heart,
        eligible: profile.province === 'ON' && profile.income < 50000,
        description: 'Combines energy and property tax credits for Ontario residents',
        link: 'https://www.ontario.ca/page/ontario-trillium-benefit'
      },
      {
        name: 'Old Age Security (OAS)',
        amount: '$691/month',
        icon: Users,
        eligible: profile.age >= 65,
        description: 'Monthly payment for Canadian residents 65 and older',
        link: 'https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html'
      }
    ];

    const eligible = allBenefits.filter(benefit => benefit.eligible);
    setEligibleBenefits(eligible);
    setShowResults(true);
  };

  const totalValue = eligibleBenefits.reduce((sum, benefit) => {
    const amount = benefit.amount.match(/\$(\d{1,3}(?:,\d{3})*)/);
    return sum + (amount ? parseInt(amount[1].replace(',', '')) : 0);
  }, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
          <Gift className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Government Benefits Finder</h3>
          <p className="text-gray-600">Discover programs you qualify for</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <input
            type="number"
            value={profile.age}
            onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
          <input
            type="number"
            value={profile.income}
            onChange={(e) => setProfile({...profile, income: parseInt(e.target.value)})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
          <select
            value={profile.province}
            onChange={(e) => setProfile({...profile, province: e.target.value})}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="ON">Ontario</option>
            <option value="BC">British Columbia</option>
            <option value="AB">Alberta</option>
            <option value="QC">Quebec</option>
            <option value="NS">Nova Scotia</option>
            <option value="NB">New Brunswick</option>
            <option value="MB">Manitoba</option>
            <option value="SK">Saskatchewan</option>
            <option value="PE">Prince Edward Island</option>
            <option value="NL">Newfoundland and Labrador</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="hasChildren"
            checked={profile.hasChildren}
            onChange={(e) => setProfile({...profile, hasChildren: e.target.checked})}
            className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label htmlFor="hasChildren" className="text-sm font-medium text-gray-700">
            I have children under 18
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="isStudent"
            checked={profile.isStudent}
            onChange={(e) => setProfile({...profile, isStudent: e.target.checked})}
            className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label htmlFor="isStudent" className="text-sm font-medium text-gray-700">
            I'm a full-time student
          </label>
        </div>
      </div>

      <button
        onClick={findBenefits}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
      >
        <Gift className="w-5 h-5" />
        <span>Find My Benefits</span>
      </button>

      {showResults && (
        <div className="mt-6">
          {eligibleBenefits.length > 0 ? (
            <>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 mb-1">Great news!</h4>
                <p className="text-green-700">
                  You're eligible for {eligibleBenefits.length} government programs worth approximately ${totalValue.toLocaleString()}/year
                </p>
              </div>

              <div className="space-y-4">
                {eligibleBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <IconComponent className="w-5 h-5 text-gray-600" />
                            <h5 className="font-semibold text-gray-900">{benefit.name}</h5>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{benefit.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-green-600">{benefit.amount}</span>
                            <a
                              href={benefit.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-purple-600 hover:text-purple-800 underline"
                            >
                              Learn more →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-gray-600">
                Based on your current profile, there are no major federal benefits available. 
                Try adjusting your criteria or check provincial programs directly.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};