
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright, floral notes with citrus undertones",
    image: "https://images.unsplash.com/photo-1587734361993-0497ffe15f44",
    details: "Our Ethiopian Yirgacheffe is sourced from small-scale farmers in the Gedeo Zone. This light-roasted coffee offers an elegant, tea-like body with distinctive floral notes, complemented by bright citrus undertones."
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Full-bodied with caramel sweetness",
    image: "https://images.unsplash.com/photo-1587734370202-5295d152f832",
    details: "Grown in the high-altitude regions of Colombia, our Supremo beans deliver a rich, full-bodied flavor profile with notes of caramel and a subtle nutty finish."
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Dark, earthy with complex flavor",
    image: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6",
    details: "From the volcanic soils of Sumatra, this dark roast offers a full-bodied cup with complex earthy notes, subtle spice undertones, and a smooth finish."
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl text-coffee-dark text-center mb-12">
          Our Premium Coffee Selection
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="font-playfair text-xl text-coffee-dark mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center text-coffee-primary">
                  <Coffee size={20} className="mr-2" />
                  <span>Learn More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
