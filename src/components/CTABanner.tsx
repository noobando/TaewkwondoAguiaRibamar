import React from 'react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 bg-red-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-12 -left-40 -top-40 h-80 w-80 rounded-full border-8 border-white"></div>
        <div className="absolute transform -rotate-12 -right-40 -bottom-40 h-80 w-80 rounded-full border-8 border-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Taekwondo Journey Today
          </h2>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto mb-8">
            Join Master Kim's Taekwondo Academy and discover the transformative power of this ancient martial art.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-white text-red-700 font-semibold rounded-md hover:bg-gray-100 transition duration-300"
            >
              Book a Free Trial Class
            </a>
            <a 
              href="#classes" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-red-700 transition duration-300"
            >
              View Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;