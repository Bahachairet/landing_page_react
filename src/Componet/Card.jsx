import React from 'react';

function Card({ card }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12">Who Are We ?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {card.map((item) => (
            <div
              key={item.id}
              className="w-[350px] h-[400px] bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              <div className="p-6 flex flex-col h-[200px]">
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-4 flex-grow line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="text-blue-500 hover:underline mt-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
