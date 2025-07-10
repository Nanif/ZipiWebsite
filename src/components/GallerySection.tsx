import React from 'react';
import { Gift } from 'lucide-react';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-red-50 via-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">הצצה מהשטח</h2>
          <p className="text-xl text-gray-600">כי תמונה שווה אלף חיוכים!</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="aspect-square bg-gradient-to-br from-orange-200 via-red-200 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-red-200">
              <div className="text-center">
                <Gift className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">תמונה מהפעילות</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;