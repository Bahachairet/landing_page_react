import React, { useState } from 'react';

const AddTestimonie = ({ fct }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    avatar: '',
    comment: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = () => {
    const { name, role, avatar, comment } = formData;

    // Validation to ensure all fields are filled
    if (!name || !role || !avatar || !comment) {
      setError('Please fill in all fields before submitting.');
      return;
    }

    fct(formData);

    // Clear form after submission
    setFormData({
      name: '',
      role: '',
      avatar: '',
      comment: '',
    });

    // Clear error message
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Share Your Experience
      </h3>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <input
        type="text"
        value={formData.avatar}
        placeholder="Your Avatar Link"
        className="w-full border-gray-300 border p-2 rounded-md mb-4"
        onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
      />

      <input
        type="text"
        value={formData.name}
        placeholder="Your Name"
        className="w-full border-gray-300 border p-2 rounded-md mb-4"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <input
        type="text"
        value={formData.role}
        placeholder="Your Role"
        className="w-full border-gray-300 border p-2 rounded-md mb-4"
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      />

      <textarea
        value={formData.comment}
        placeholder="Your Comment"
        className="w-full border-gray-300 border p-4 rounded-md mb-4"
        rows="4"
        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
      ></textarea>

      <button
        onClick={handleSubmit}
        className="w-full bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
      >
        Submit Testimonial
      </button>
    </div>
  );
};

export default AddTestimonie;
