import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}