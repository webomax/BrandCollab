import React, { useState } from 'react';
import { Search, Filter, DollarSign, Users, Briefcase } from 'lucide-react';

const collaborations = [
  {
    id: 1,
    brand: 'TechGadget',
    title: 'Product Review Campaign',
    description: 'Looking for tech influencers to review our latest smartphone.',
    budget: '$500 - $1000',
    followers: '10k+',
    category: 'Technology',
  },
  {
    id: 2,
    brand: 'FitLife',
    title: 'Fitness Challenge Sponsorship',
    description: 'Seeking fitness enthusiasts to promote our 30-day workout program.',
    budget: '$300 - $800',
    followers: '5k+',
    category: 'Health & Fitness',
  },
  {
    id: 3,
    brand: 'GlamBeauty',
    title: 'Makeup Tutorial Collaboration',
    description: 'Beauty influencers needed for a series of makeup tutorials featuring our new cosmetic line.',
    budget: '$400 - $1200',
    followers: '20k+',
    category: 'Beauty',
  },
  // Add more collaboration opportunities as needed
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCollaborations = collaborations.filter(collab =>
    collab.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collab.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collab.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Collaboration Marketplace</h1>
      
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search collaborations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
          <Filter className="mr-2 h-5 w-5" />
          Filter Options
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCollaborations.map(collab => (
          <div key={collab.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <h3 className="text-xl font-semibold mb-2">{collab.title}</h3>
            <p className="text-gray-600 mb-4">{collab.brand}</p>
            <p className="text-sm text-gray-500 mb-4">{collab.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                {collab.budget}
              </span>
              <span className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {collab.followers}
              </span>
              <span className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                {collab.category}
              </span>
            </div>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;