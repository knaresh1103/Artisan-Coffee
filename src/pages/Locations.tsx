
import React from 'react';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: "Downtown Café",
    address: "123 Main Street, Downtown",
    hours: "Mon-Fri: 7am-7pm, Sat-Sun: 8am-6pm",
    phone: "(555) 123-4567",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814"
  },
  {
    name: "Westside Coffee House",
    address: "456 West Avenue, Westside",
    hours: "Mon-Fri: 6am-8pm, Sat-Sun: 7am-7pm",
    phone: "(555) 234-5678",
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2"
  },
  {
    name: "Eastside Roastery",
    address: "789 East Boulevard, Eastside",
    hours: "Mon-Sun: 7am-6pm",
    phone: "(555) 345-6789",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
  }
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-coffee-secondary/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl text-coffee-dark text-center mb-12">
          Visit Us
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="font-playfair text-xl text-coffee-dark mb-2">
                  {location.name}
                </h2>
                <div className="flex items-start space-x-2 text-gray-600 mb-2">
                  <MapPin size={20} className="text-coffee-primary flex-shrink-0 mt-1" />
                  <p>{location.address}</p>
                </div>
                <p className="text-gray-600 mb-2">Hours: {location.hours}</p>
                <p className="text-gray-600">Phone: {location.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
