import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-bold">TechQBank</Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/questions" className="hover:underline">Question Bank</Link>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-blue-600">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:underline">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:underline">About</Link>
          <Link to="/question-bank" onClick={() => setIsOpen(false)} className="block hover:underline">Question Bank</Link>
        </div>
      )}
    </nav>
  );
}
