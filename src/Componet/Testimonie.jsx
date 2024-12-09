import React, { useState } from 'react';
import AddTestimonie from './AddTestimonie'; 

const Testimonie = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      comment:
        'Working with this team has transformed our business. Their innovative solutions exceeded our expectations.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Innovation Labs',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      comment:
        'Outstanding service and technical expertise. They delivered our project on time and within budget.',
    },
    {
      name: 'Emma Wilson',
      role: 'Product Manager, DataFlow',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      comment:
        'Their attention to detail and customer service is unmatched. Highly recommended!',
    },
  ];

  const [Testmo, SetTestmo] = useState(testimonials);

  const newTest = (testom) => {
    SetTestmo([...Testmo, testom]);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Testmo.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
      <AddTestimonie fct={newTest} />
    </section>
  );
};

export default Testimonie;
