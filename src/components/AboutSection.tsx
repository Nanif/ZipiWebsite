import React from 'react';
import { Heart, Sparkles, Users } from 'lucide-react';
import SEOHead from './SEOHead';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white" itemScope itemType="https://schema.org/Person">
      <SEOHead 
        title="מי אני - ציפי מסינג | מפעילה מקצועית לילדות"
        description="הכירו את ציפי מסינג - מפעילה מקצועית לילדות עם ניסיון רב. גישה ייחודית המבוססת על יחס אישי, אכפתיות ותשומת לב לכל ילדה."
        keywords="ציפי מסינג, מפעילה לילדות, ניסיון בהפעלות, יחס אישי, מקצועיות, חינוך ילדים"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" itemProp="name">מי אני</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Personal introduction */}
          <div className="space-y-8">
            {/* Name and title with emphasis */}
            <div className="text-center lg:text-right flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full p-4 w-16 h-16 flex-shrink-0">
                <Heart className="w-8 h-8 text-red-600 mx-auto" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" itemProp="name">ציפי מסינג</h3>
                <p className="text-xl text-red-600 font-semibold mb-4" itemProp="jobTitle"> מפעילה מקצועית לילדות בס''ד מרובה</p>
              </div>
            </div>
            
            {/* Main description with belief integrated */}
            <div className="space-y-6" itemProp="description">
              <p className="text-lg text-gray-700 leading-relaxed">
                אני כאן כדי להפוך כל פעילות לחוויה ערכית, מהנה ומלאת משמעות. עם ניסיון של שנים בהפעלות לילדות בגילאי בית ספר, פיתחתי גישה ייחודית שמבוססת על עיקרון פשוט:
              </p>
              
              <p className="text-xl text-gray-800 font-semibold italic leading-relaxed">
                "הצלחה של פעילות נמדדת קודם כל ביחס האישי, באכפתיות ובתשומת הלב לכל ילדה – ורק אחר כך באטרקציות."
              </p>
              
   
              
              <p className="text-lg text-gray-700 leading-relaxed">
                וכל זה – מבלי לוותר לרגע על מקצוענות אמיתית, אנרגיות חיוביות בשמיים, ואטרקציות מקוריות ומרתקות שמלהיבות את הילדות ומשאירות טעם של עוד.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                זה ה"אני מאמין" שלי – ובזכותו כל פעילות הופכת לזיכרון מתוק שהילדות וגם הצוות:) לוקחות איתן גם כשהיום נגמר והן כבר בדרך הביתה עם חיוך.
              </p>
            </div>
          </div>
          
          {/* Right side - Three key points */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center lg:text-right mb-8">הגישה שלי</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-full p-4 flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">כיף ואנרגיה</h4>
                  <p className="text-gray-700 leading-relaxed">עם סדר, סמכות ויחס אישי לכל ילדה</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-red-100 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-red-200 to-purple-200 rounded-full p-4 flex-shrink-0">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">שימת לב אמיתית</h4>
                  <p className="text-gray-700 leading-relaxed">לכל ילדה! אף אחת לא נשארת בצד</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-purple-100 to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-gradient-to-br from-purple-200 to-orange-200 rounded-full p-4 flex-shrink-0">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">אחריות מלאה</h4>
                  <p className="text-gray-700 leading-relaxed">ניהול רגוע – בלי צעקות, עם טכניקות גישור ודרכי נועם</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;