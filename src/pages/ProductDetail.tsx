
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright, floral notes with citrus undertones",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    details: "Our Ethiopian Yirgacheffe is sourced from small-scale farmers in the Gedeo Zone. This light-roasted coffee offers an elegant, tea-like body with distinctive floral notes, complemented by bright citrus undertones."
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Full-bodied with caramel sweetness",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
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

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-coffee-secondary/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/products"
          className="inline-flex items-center text-coffee-primary mb-8 hover:text-coffee-dark transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="font-playfair text-3xl text-coffee-dark mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="prose max-w-none">
                <h2 className="font-playfair text-xl text-coffee-dark mb-4">
                  About this Coffee
                </h2>
                <p className="text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
