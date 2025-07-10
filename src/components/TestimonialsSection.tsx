import React, { useState, useEffect } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "מירי",
      role: "אמא לילדה בכיתה ג'",
      content: "היה מהמם! הבנות לא רצו ללכת הביתה! כל אחת קיבלה יחס, היה נעים, שמח, ובעיקר מסודר. תודה על הלב שהכנסת בזה!"
    },
    {
      name: "אלהלה",
      role: "רכזת קייטנה",
      content: "אין דברים כאלה. הצלחת להפעיל כיתה שלמה עם אנרגיה טובה, בלי בלגן ובלי אף ילדה שנשארה בצד. תודה רבה!"
    },
    {
      name: "שרה",
      role: "מנהלת בית ספר",
      content: "ציפי הביאה אנרגיה מדהימה לבית הספר שלנו! הילדות עדיין מדברות על הפעילות. הכל היה מסודר, בטוח ומלא שמחה. בהחלט נזמין שוב!"
    },
    {
      name: "רחל",
      role: "אמא לשתי בנות",
      content: "הבנות שלי חזרו הביתה מאושרות ומלאות סיפורים! ציפי יודעת איך לגעת בלב של כל ילדה ולגרום לה להרגיש מיוחדת. פשוט מושלם!"
    },
    {
      name: "דינה",
      role: "רכזת אירועים",
      content: "עבדתי עם הרבה מפעילות, אבל ציפי היא משהו אחר לגמרי. הרמה המקצועית, הסבלנות והאהבה שהיא נותנת - זה נדיר למצוא!"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">מה אומרים עליי</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-gradient-to-br from-orange-100 via-red-100 to-purple-100 p-8 md:p-12 rounded-3xl shadow-xl border border-red-200 min-h-[300px] flex flex-col justify-center transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-current mx-1" />
              ))}
            </div>
            <p className="text-gray-700 mb-8 text-xl leading-relaxed italic text-center">
              "{testimonials[currentSlide].content}"
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-full p-4 ml-4">
                <Heart className="w-8 h-8 text-red-700" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentSlide].name}</h4>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="המלצה קודמת"
          >
            <ChevronRight className="w-6 h-6 text-red-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="המלצה הבאה"
          >
            <ChevronLeft className="w-6 h-6 text-red-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`עבור להמלצה ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;