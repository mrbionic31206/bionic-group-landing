import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageV0 from './components/LandingPageV0';
import BookDemo from './pages/BookDemo';
import ThankYou from './pages/ThankYou';
import About from './pages/About';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageV0 />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
