import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, Grid, List, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  const filteredProducts = useMemo(() => {
    let filtered = [...categoryProducts];

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'discount':
        filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default:
        // newest (default order)
        break;
    }

    return filtered;
  }, [categoryProducts, selectedSubcategory, priceRange, sortBy]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
          <Link to="/" className="text-sky-600 hover:text-sky-700 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-sky-600">Home</Link>
        <span>/</span>
        <span className="text-gray-900">{category.name}</span>
      </nav>

      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {category.name.toUpperCase()} FURNITURE
        </h1>
        <p className="text-gray-600">({filteredProducts.length} Products)</p>
      </div>

      {/* Subcategory Filter */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 overflow-x-auto">
          <button
            onClick={() => setSelectedSubcategory('all')}
            className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedSubcategory === 'all'
                ? 'bg-sky-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          {category.subcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              onClick={() => setSelectedSubcategory(subcategory.id)}
              className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedSubcategory === subcategory.id
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {subcategory.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </button>
          
          {/* Price Range Filter */}
          {showFilters && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Price:</span>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-32"
              />
              <span className="text-sm text-gray-600">₹{priceRange[1].toLocaleString()}</span>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="newest">Date: New To Old</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
            <option value="discount">Discount: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedSubcategory('all');
              setPriceRange([0, 100000]);
              setSortBy('newest');
            }}
            className="mt-4 text-sky-600 hover:text-sky-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;