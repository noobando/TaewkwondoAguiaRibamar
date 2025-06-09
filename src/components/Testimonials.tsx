import React, { useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Parent of Junior Student",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Since my son started training with Master Kim, we've seen incredible improvements not just in his physical abilities, but also in his confidence and focus at school. The positive impact extends far beyond the dojang."
    },
    {
      name: "David Chen",
      role: "Adult Student, 2 Years",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "As a busy professional, Taekwondo has become my sanctuary. Master Kim's teaching style makes every class both challenging and rewarding. I'm in the best shape of my life and have made great friends along the way."
    },
    {
      name: "Emma Rodriguez",
      role: "Teen Student, Black Belt",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I started when I was 10 years old and now at 17, Taekwondo has shaped who I am. Master Kim has been an incredible mentor, teaching me discipline and perseverance that has helped me succeed in all areas of my life."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the students whose lives have been transformed through our Taekwondo programs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-red-100">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-gray-700 text-lg md:text-xl italic mb-8 text-center">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">{currentTestimonial.name}</h4>
                <p className="text-gray-600">{currentTestimonial.role}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;