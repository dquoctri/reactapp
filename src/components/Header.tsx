import React from 'react';

function Header() {
  return (
    <nav className="bg-black bg-opacity-75 text-white py-3 px-8 rounded-lg">
      <div className="flex justify-between items-center">
        <div>Your Logo</div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#product" className="hover:text-gray-300">Product</a>
          <a href="#service" className="hover:text-gray-300">Service</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;