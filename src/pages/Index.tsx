import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const TopProducts = [
  {
    name: "Ethiopian Yirgacheffe",
    description: "Light roasted, floral and citrus notes",
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    name: "Colombian Supremo",
    description: "Medium roasted, caramel sweetness",
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    name: "Sumatra Mandheling",
    description: "Dark roasted, full-bodied, earthy",
    image: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6"
  }
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/nk110792@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-coffee-secondary/10">
      {/* Hero Section with new background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521017432531-fbd92d768814')] bg-cover bg-center" />
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

      {/* Top Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-coffee-dark text-center mb-12">
            Our Top Selling Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {TopProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-coffee-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-coffee-primary text-white px-8 py-3 rounded-full hover:bg-coffee-dark transition-colors duration-300"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
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
                to="/OurStory"
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

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-coffee-secondary/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-coffee-dark text-center mb-8">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions about our products or services? We'd love to hear from you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-coffee-primary hover:bg-coffee-dark"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
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
