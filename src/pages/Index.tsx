
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fadeIn">
            Crafting Perfect Moments,
            <br />
            One Cup at a Time
          </h1>
          <p className="font-inter text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slideUp">
            Experience the art of coffee making with our carefully selected beans
            and artisanal brewing methods.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-coffee-primary text-white px-8 py-3 rounded-full hover:bg-coffee-dark transition-colors duration-300"
          >
            Explore Our Coffee
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-inter text-coffee-primary uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl text-coffee-dark mt-2 mb-6">
                A Journey of Flavor and Passion
              </h2>
              <p className="font-inter text-gray-600 leading-relaxed mb-6">
                We believe that every cup of coffee tells a story. Our journey began with
                a simple love for exceptional coffee and has grown into a commitment to
                bringing you the finest beans from around the world.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-coffee-primary hover:text-coffee-dark transition-colors duration-200"
              >
                Learn More <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Coffee brewing process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-coffee-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            Stay Connected
          </h2>
          <p className="font-inter text-white/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, brewing tips, and
            the latest news from our coffee community.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-coffee-primary"
            />
            <button
              type="submit"
              className="bg-coffee-primary text-white px-6 py-3 rounded-lg hover:bg-coffee-accent transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
