
import { Book } from "lucide-react";

const OurStory = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative bg-coffee-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Book className="w-12 h-12 text-coffee-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair text-center mb-6">Our Story</h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-gray-300">
            A journey of passion, dedication, and the perfect cup of coffee
          </p>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-playfair text-coffee-dark">Our Beginnings</h2>
            <p className="text-gray-600">
              Founded in 2010, Artisan Coffee began as a small coffee cart in downtown. 
              Our founder's passion for exceptional coffee and dedication to craft sparked 
              what would become a beloved destination for coffee enthusiasts.
            </p>
            <p className="text-gray-600">
              We started with a simple mission: to serve the perfect cup of coffee, 
              sourced ethically and roasted with care. Today, that mission continues 
              to drive everything we do.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="/coffee-shop.jpg" 
              alt="Our coffee shop" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-coffee-secondary p-8 rounded-lg">
            <h3 className="text-xl font-playfair text-coffee-dark mb-4">Our Values</h3>
            <p className="text-gray-600">
              Quality, sustainability, and community are at the heart of everything we do.
            </p>
          </div>
          <div className="bg-coffee-secondary p-8 rounded-lg">
            <h3 className="text-xl font-playfair text-coffee-dark mb-4">Our Process</h3>
            <p className="text-gray-600">
              Each bean is carefully selected, roasted to perfection, and brewed with precision.
            </p>
          </div>
          <div className="bg-coffee-secondary p-8 rounded-lg">
            <h3 className="text-xl font-playfair text-coffee-dark mb-4">Our Community</h3>
            <p className="text-gray-600">
              We're proud to be part of a growing community of coffee lovers and artisans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
