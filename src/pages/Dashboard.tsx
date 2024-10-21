import React from 'react';
import { BarChart, DollarSign, Users, TrendingUp, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Creator Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Earnings</p>
              <p className="text-2xl font-semibold">$12,345</p>
            </div>
            <DollarSign className="h-10 w-10 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Active Campaigns</p>
              <p className="text-2xl font-semibold">7</p>
            </div>
            <BarChart className="h-10 w-10 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Followers</p>
              <p className="text-2xl font-semibold">52.3K</p>
            </div>
            <Users className="h-10 w-10 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Engagement Rate</p>
              <p className="text-2xl font-semibold">4.7%</p>
            </div>
            <TrendingUp className="h-10 w-10 text-orange-500" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Collaborations</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">TechGadget Product Review</p>
                <p className="text-sm text-gray-500">Completed on May 15, 2023</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Completed</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">FitLife 30-Day Challenge</p>
                <p className="text-sm text-gray-500">Ongoing until June 10, 2023</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Active</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">GlamBeauty Makeup Tutorial</p>
                <p className="text-sm text-gray-500">Starting on June 1, 2023</p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Upcoming</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Calendar className="h-5 w-5 text-indigo-500 mr-3" />
              <div>
                <p className="font-medium">Submit FitLife Challenge Video</p>
                <p className="text-sm text-gray-500">Due on May 25, 2023</p>
              </div>
            </li>
            <li className="flex items-center">
              <Calendar className="h-5 w-5 text-indigo-500 mr-3" />
              <div>
                <p className="font-medium">GlamBeauty Contract Signing</p>
                <p className="text-sm text-gray-500">Due on May 28, 2023</p>
              </div>
            </li>
            <li className="flex items-center">
              <Calendar className="h-5 w-5 text-indigo-500 mr-3" />
              <div>
                <p className="font-medium">TechGadget Campaign Report</p>
                <p className="text-sm text-gray-500">Due on June 5, 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;