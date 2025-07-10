import React from 'react';
import { Heart } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
              <Heart className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            השנה 
         
            אטרקציות הקיץ הן חוויה בלתי נשכחת
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            לילדות, לצוות ולהנהלה
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl italic leading-relaxed">
              "הצלחה של פעילות נמדדת קודם כל ביחס האישי, באכפתיות ובתשומת הלב לכל ילדה – 
              <br></br>
              ורק אחר כך באטרקציות."
            </p>
          </div>
       
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              להזמנה עכשיו
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              לפרטים נוספים
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;