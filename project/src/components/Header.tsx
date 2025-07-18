import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, Phone, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';
import UserMenu from './UserMenu';
import { categories } from '../data/categories';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useCart();
  const { wishlist } = useWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-600" />
                <span>1800 1219 115</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-600" />
                <span>support@kanhaacreations.in</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/franchise" className="text-gray-600 hover:text-sky-600">Franchise Enquiry</Link>
              <Link to="/warranty" className="text-gray-600 hover:text-sky-600">Warranty Registration</Link>
              <Link to="/track-order" className="text-gray-600 hover:text-sky-600">Track Your Order</Link>
              <Link to="/stores" className="text-gray-600 hover:text-sky-600">Our Store</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-sky-600 text-white px-3 py-2 rounded-md font-bold text-xl">
              KC
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Kanha Creation</div>
              <div className="text-xs text-gray-600">Premium Furniture</div>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for furniture..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-sky-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <UserMenu />
            ) : (
              <button onClick={() => openAuthModal('login')} className="text-gray-600 hover:text-sky-600">
                <User className="h-6 w-6" />
              </button>
            )}
            <Link to="/wishlist" className="relative text-gray-600 hover:text-sky-600">
              <Heart className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-sky-600">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white border-t ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="text-gray-700 hover:text-sky-600 py-2 md:py-0 font-medium"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                Best Deal
              </span>
              {user ? (
                <span className="text-gray-700">Welcome, {user.name}!</span>
              ) : (
                <div className="flex space-x-4">
                  <button onClick={() => openAuthModal('login')} className="text-sky-600 hover:text-sky-700 font-medium">Login</button>
                  <span className="text-gray-400">/</span>
                  <button onClick={() => openAuthModal('register')} className="text-sky-600 hover:text-sky-700 font-medium">Register</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>

    <AuthModal 
      isOpen={isAuthModalOpen}
      onClose={closeAuthModal}
      initialMode={authMode}
    />
    </>
  );
};

export default Header;