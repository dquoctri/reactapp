import React from 'react';
import Header from './Header';

function LandingPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="backdrop-blur-md bg-black bg-opacity-50 p-10 rounded-lg">
        <Header onLogin={() => {}} onSignUp={() => {}}/>
        <div className="text-white mt-10">
          <h1 className="text-4xl font-bold mb-4">3D Glassmorphism Landing Page</h1>
          <p className="mb-4">
            A landing page with a trendy glassmorphism effect using Tailwind CSS and React.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;