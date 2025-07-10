import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">הצלחה של פעילות נמדדת קודם כל ביחס האישי, באכפתיות ובתשומת הלב</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            אני כאן כדי לוודא שכל ילדה חוזרת הביתה שמחה עם חיוך ענק.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2025 הכל בס''ד</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;