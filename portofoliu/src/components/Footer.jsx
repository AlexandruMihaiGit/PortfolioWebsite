import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Artist Portfolio</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li>
            <a href="#about" className="hover:text-yellow-500">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
          </li>
          <li>
            <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
