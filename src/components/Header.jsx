import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleGetStarted = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Get Started clicked');
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 2rem',
      borderBottom: '1px solid #e0e7ef',
      background: 'linear-gradient(90deg, #e3f0ff 0%, #f1f5f9 100%)',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    }}>
      {/* Left: Home/Brand */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {isHome ? (
          <span style={{ color: '#1e40af', fontWeight: 700, fontSize: 24, letterSpacing: -1 }}>The Bionic Group</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#1e40af">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        )}
      </Link>
      
      {/* Navigation */}
      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/about" style={{ color: '#1e40af' }}>About</Link>
        <Link to="/solutions" style={{ color: '#1e40af' }}>Solutions</Link>
        <Link to="/contact" style={{ color: '#1e40af' }}>Contact</Link>
      </nav>
      
      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={handleGetStarted} style={{ 
          background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)', 
          color: '#fff', 
          padding: '0.6rem 1.2rem', 
          borderRadius: 6, 
          border: 'none', 
          fontWeight: 600, 
          cursor: 'pointer', 
          boxShadow: '0 2px 8px #2563eb22' 
        }}>
          Get Started
        </button>
        <Link to="/login" style={{ 
          border: '1px solid #2563eb', 
          color: '#2563eb', 
          padding: '0.6rem 1.2rem', 
          borderRadius: 6, 
          background: '#e0f2fe', 
          fontWeight: 600, 
          cursor: 'pointer', 
          textDecoration: 'none', 
          display: 'inline-block' 
        }}>
          Log in
        </Link>
      </div>
    </header>
  );
};

export default Header; 