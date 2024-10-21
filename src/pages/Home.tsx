import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Connect, Collaborate, Create</h1>
          <p className="text-xl md:text-2xl mb-8">Join the ultimate marketplace for brand-creator collaborations</p>
          <Link to="/marketplace" className="inline-flex items-center bg-white text-indigo-600 font-bold py-3 px-6 rounded-full hover:bg-indigo-100 transition-colors duration-200">
            Explore Opportunities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <Star className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Your Perfect Match</h3>
            <p className="text-indigo-200">Our advanced algorithm connects you with brands that align with your audience and style.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <Zap className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seamless Collaboration</h3>
            <p className="text-indigo-200">Manage contracts, payments, and campaign details all in one place.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <TrendingUp className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Grow Your Influence</h3>
            <p className="text-indigo-200">Access exclusive opportunities and track your performance to boost your career.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;