
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/nk110792@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          subject: 'New Newsletter Subscription',
          message: `New subscription request from: ${email}`
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for subscribing to our newsletter!",
        });
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-coffee-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-playfair text-xl mb-4">Artisan Coffee</h3>
            <p className="text-gray-300">
              Crafting perfect moments, one cup at a time.
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
              <li><Link to="/ingredients" className="text-gray-300 hover:text-white">Ingredients</Link></li>
              <li><Link to="/locations" className="text-gray-300 hover:text-white">Locations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                <a href="mailto:nk110792@gmail.com" className="text-gray-300 hover:text-white">
                  nk110792@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-playfair text-xl mb-4">Stay Connected</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="w-full bg-coffee-primary hover:bg-coffee-accent"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Artisan Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
