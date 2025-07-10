import React from 'react';
import { Users, Cookie, Flame, Moon as Balloon, Map as Soap, Trophy } from 'lucide-react';
import SEOHead from './SEOHead';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "מתנפחים בצבעים עליזים",
      description: "מתנפחים בטוחים וצבעוניים שיהפכו כל אירוע לחוויה בלתי נשכחת"
    },
    {
      icon: <Cookie className="w-8 h-8" />,
      title: "סדנאות שוקולד מתוקות",
      description: "יצירת שוקולדים מתוקים וטעימים בהדרכה מקצועית ואווירה חמימה"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "פיתות חמות בטאבון",
      description: "חוויה מסורתית של אפיית פיתות טריות בטאבון כמו פעם"
    },
    {
      icon: <Balloon className="w-8 h-8" />,
      title: "בלונאות יצירתית",
      description: "יצירת צורות מדהימות מבלונים עם הרבה צבעים ויצירתיות"
    },
    {
      icon: <Soap className="w-8 h-8" />,
      title: "סבונים ריחניים בעבודת יד",
      description: "הכנת סבונים טבעיים וריחניים בצורות וצבעים מיוחדים"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "הפעלות תחרותיות ומשחקים",
      description: "משחקים שיתופיים ותחרותיות בריאה שמחברת בין הילדות"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50" itemScope itemType="https://schema.org/Service">
      <SEOHead 
        title="הפעילויות שלי - ציפי מסינג | מתנפחים, סדנאות שוקולד ועוד"
        description="מבחר עשיר של פעילויות מהנות לילדות: מתנפחים בצבעים עליזים, סדנאות שוקולד, פיתות בטאבון, בלונאות יצירתית ועוד. כל פעילות מותאמת לגיל ולאופי הקבוצה."
        keywords="מתנפחים, סדנאות שוקולד, פיתות בטאבון, בלונאות, הפעלות ילדים, פעילויות לילדות, אירועי ילדים, קייטנות"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="name">הפעילויות שלי</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מבחר עשיר של חוויות מהנות בהתאמה לגיל
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-orange-100" itemScope itemType="https://schema.org/Service">
              <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" itemProp="name">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed" itemProp="description">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg shadow-md max-w-5xl mx-auto">
            כל פעילות מותאמת לגיל, לאופי הקבוצה – ועם דגש על השתתפות פעילה של כל בת.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;