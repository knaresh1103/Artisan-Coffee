
import React from 'react';
import { Coffee, Droplet, Award } from 'lucide-react';

const ingredients = [
  {
    name: "Arabica Beans",
    description: "Premium Arabica beans sourced from high-altitude regions, known for their smooth, complex flavor profiles.",
    image: "https://images.unsplash.com/photo-1587734361993-0497ffe15f44",
    icon: Coffee,
    highlight: "Grown at 4,000-6,000 feet altitude"
  },
  {
    name: "Robusta Beans",
    description: "Selected Robusta beans that add depth and crema to our espresso blends.",
    image: "https://images.unsplash.com/photo-1587734370202-5295d152f832",
    icon: Award,
    highlight: "2x more caffeine than Arabica"
  },
  {
    name: "Spring Water",
    description: "Filtered spring water with optimal mineral content for the perfect extraction.",
    image: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6",
    icon: Droplet,
    highlight: "Perfect mineral balance"
  }
];

const Ingredients = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl text-coffee-dark text-center mb-12">
          Our Quality Ingredients
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => {
            const Icon = ingredient.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-coffee-primary rounded-full p-2">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-playfair text-xl text-coffee-dark mb-2">
                    {ingredient.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{ingredient.description}</p>
                  <div className="bg-coffee-secondary/20 rounded-full px-4 py-2 text-sm text-coffee-dark inline-block">
                    {ingredient.highlight}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
