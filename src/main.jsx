import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageV0 from './components/LandingPageV0';
import BookDemo from './pages/BookDemo';
import ThankYou from './pages/ThankYou';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageV0 />} />
        <Route path="/book-demo" element={<BookDemo />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
