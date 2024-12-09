import React, { useState } from 'react';

const Crousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Building the future of digital experiences',
      description:
        'Empowering businesses through innovative technology solutions',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    },
    {
      title: 'Transform your business digitally',
      description: 'Cloud Solutions • AI Integration • Modern Development',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
    },
    {
      title: 'Trusted by global leaders',
      description: 'Enterprise Solutions • 24/7 Support • Worldwide Reach',
      image:
        'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800',
    },
  ];

  return (
    <div className="relative h-[70vh] flex items-center justify-center bg-gray-950">
      <div className="relative  h-full w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover opacity-80"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent">
              <div className="flex h-full items-center px-0">
                <div className="ml-[25rem] mr-[15rem] max-w-full">
                  <h1 className="mb-6 text-7xl font-bold leading-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-300">{slide.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-2 w-16 overflow-hidden rounded-full bg-white/20"
            >
              <div
                className={`absolute left-0 top-0 h-full bg-white transition-all duration-500
                  ${index === currentSlide ? 'w-full' : 'w-0'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crousel;
