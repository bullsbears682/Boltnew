import React from 'react';
import { MapPin, Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Canada Cost Analyzer</h3>
                <p className="text-gray-400">Smart Living Decisions for Every Province</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Canadians to make informed financial decisions through comprehensive 
              cost analysis and government benefit optimization.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🍁</span>
              <span>Proudly Canadian • Data from Statistics Canada & Provincial Sources</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#housing" className="hover:text-red-400 transition-colors flex items-center">
                  Housing Calculator <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#utilities" className="hover:text-red-400 transition-colors flex items-center">
                  Utility Comparison <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-red-400 transition-colors flex items-center">
                  Benefits Finder <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#salary" className="hover:text-red-400 transition-colors flex items-center">
                  Salary Calculator <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="https://www.statcan.gc.ca/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  Statistics Canada <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.canada.ca/en/revenue-agency.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  Canada Revenue Agency <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.cmhc-schl.gc.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  CMHC Housing Data <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.bankofcanada.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center"
                >
                  Bank of Canada <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2025 Canada Cost Analyzer. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
              <a href="mailto:hello@canadacostanalyzer.ca" className="hover:text-red-400 transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                Contact Us
              </a>
              <span>•</span>
              <a href="#privacy" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-red-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};