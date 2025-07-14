import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} TechQBank. All rights reserved.</p>
    </footer>
  );
}
