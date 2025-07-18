import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Truck, Shield, Phone, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 8);
  const bestDeals = products.filter(p => p.discount && p.discount > 20);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Transform Your Home with 
                <span className="text-sky-600"> Premium Furniture</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our exclusive collection of high-quality furniture designed to elevate your living space. 
                From comfortable sofas to elegant dining sets, we have everything you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/category/living-room"
                  className="bg-sky-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors text-center"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="border border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-medium hover:bg-sky-50 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern Living Room"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.8/5</span>
                </div>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600">Explore our wide range of furniture categories</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group text-center p-6 bg-gray-50 rounded-lg hover:bg-sky-50 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                  <span className="text-2xl font-bold text-sky-600">{category.name.charAt(0)}</span>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-sky-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600">Handpicked products for your home</p>
            </div>
            <Link
              to="/products"
              className="flex items-center text-sky-600 hover:text-sky-700 font-medium"
            >
              View All <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Deals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Deals</h2>
            <p className="text-gray-600">Don't miss out on these amazing offers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestDeals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kanha Creation?</h2>
            <p className="text-gray-600">Experience the best in furniture shopping</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <Truck className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free installation and delivery across India</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Premium quality furniture with warranty</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted Brand</h3>
              <p className="text-gray-600">India's favorite furniture brand</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;