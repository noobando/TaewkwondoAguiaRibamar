import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/7045406/pexels-photo-7045406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Taekwondo class training",
      category: "training"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/6253298/pexels-photo-6253298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Taekwondo kick demonstration",
      category: "technique"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/7045396/pexels-photo-7045396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Students practicing forms",
      category: "training"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7045493/pexels-photo-7045493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Belt promotion ceremony",
      category: "event"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/8612288/pexels-photo-8612288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Children's class",
      category: "training"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/8612909/pexels-photo-8612909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Breaking boards demonstration",
      category: "technique"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/8612894/pexels-photo-8612894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Competition sparring",
      category: "event"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/7045623/pexels-photo-7045623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "Adult advanced class",
      category: "training"
    }
  ];

  const categories = ['all', ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our Taekwondo academy in action
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md font-medium capitalize transition duration-200 ${
                activeCategory === category
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => openModal(image)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition duration-200"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;