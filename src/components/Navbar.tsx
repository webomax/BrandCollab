import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ShoppingBag, LayoutDashboard, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Users className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">BrandCollab</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/marketplace" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors duration-200">
                <ShoppingBag className="inline-block mr-1 h-5 w-5" />
                Marketplace
              </Link>
              <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors duration-200">
                <LayoutDashboard className="inline-block mr-1 h-5 w-5" />
                Dashboard
              </Link>
              <Link to="/profile" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition-colors duration-200">
                <User className="inline-block mr-1 h-5 w-5" />
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;