// src/components/NewsletterSignup/NewsletterSignup.tsx

import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle newsletter signup logic...
  };

  return (
    <div className="newsletter-signup p-10">
      <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 text-black"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;