import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Artist Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              <Link to="/Portfolio" className="hover:text-yellow-500">Portfolio</Link>
            </li>
            <li>
              <Link to="/AddWork" className="hover:text-yellow-500">Add Work</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
