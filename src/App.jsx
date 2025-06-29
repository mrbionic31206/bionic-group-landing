import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPageV0 from './components/LandingPageV0';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';
import BookDemo from './pages/BookDemo';
import ThankYou from './pages/ThankYou';
import Login from './pages/Login';
import GetStarted from './pages/GetStarted';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageV0 />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}
