import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, Phone } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <Link to="/" className="text-sky-600 hover:text-sky-700 mt-4 inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-sky-600">Home</Link>
        <span>/</span>
        <Link to={`/category/${product.category}`} className="hover:text-sky-600">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
          {product.discount && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
              {product.discount}% OFF
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>
            {product.discount && (
              <p className="text-green-600 font-medium">You save ₹{(product.originalPrice! - product.price).toLocaleString()}</p>
            )}
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-1 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-sky-600 text-white py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleWishlistClick}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
            </button>
          </div>

          {/* Features */}
          <div className="space-y-4 pt-6 border-t">
            <div className="flex items-center space-x-3">
              <Truck className="h-5 w-5 text-sky-600" />
              <div>
                <p className="font-medium text-gray-900">Free Delivery</p>
                <p className="text-sm text-gray-600">Free installation and delivery</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-sky-600" />
              <div>
                <p className="font-medium text-gray-900">Quality Assurance</p>
                <p className="text-sm text-gray-600">Premium quality with warranty</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="h-5 w-5 text-sky-600" />
              <div>
                <p className="font-medium text-gray-900">Easy Returns</p>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-sky-600" />
              <div>
                <p className="font-medium text-gray-900">24/7 Support</p>
                <p className="text-sm text-gray-600">Round-the-clock assistance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;