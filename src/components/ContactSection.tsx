import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">להזמנות ויצירת קשר</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אני זמינה לשאלות, תיאומים והזמנות בהתאמה אישית
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full p-6 w-20 h-20 mx-auto mb-6">
              <Phone className="w-8 h-8 text-orange-600 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">טלפון</h3>
            <p className="text-gray-600">0500555005</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-red-100 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
            <div className="bg-gradient-to-br from-red-100 to-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-6">
              <Mail className="w-8 h-8 text-red-600 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">אימייל</h3>
            <p className="text-gray-600">tz5678910@gmail.com</p>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
            <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-6">
              <MapPin className="w-8 h-8 text-purple-600 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">אזור שירות</h3>
            <p className="text-gray-600">מרכז</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;