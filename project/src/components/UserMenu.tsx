import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Settings, ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors"
      >
        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-sky-600" />
        </div>
        <span className="hidden md:block font-medium">{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
          <div className="px-4 py-2 border-b">
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          
          <Link
            to="/account"
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <Settings className="h-4 w-4" />
            <span>Account Settings</span>
          </Link>
          
          <Link
            to="/orders"
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>My Orders</span>
          </Link>
          
          <Link
            to="/wishlist"
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <Heart className="h-4 w-4" />
            <span>Wishlist</span>
          </Link>
          
          <hr className="my-2" />
          
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-left"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;