import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#f8f9fa' }}>
        <div style={{ textAlign: 'center', maxWidth: 600 }}>
          <div style={{ fontSize: '120px', fontWeight: '700', color: '#FFD600', marginBottom: '24px' }}>
            404
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', color: '#111' }}>
            Page Not Found
          </h1>
          <p style={{ fontSize: '20px', color: '#666', marginBottom: '32px', lineHeight: '1.6' }}>
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
            <Link to="/">
              <button style={{
                background: '#FFD600',
                color: '#111',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                🏠 Go Home
              </button>
            </Link>
            <Link to="/contact">
              <button style={{
                background: '#f3f4f6',
                color: '#111',
                border: '1px solid #d1d5db',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                📞 Contact Support
              </button>
            </Link>
          </div>

          <div style={{ background: '#fff', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#111' }}>
              Popular Pages
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <Link to="/about" style={{ 
                display: 'block', 
                padding: '12px 16px', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                color: '#111', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background 0.2s'
              }} onMouseEnter={(e) => e.target.style.background = '#e9ecef'} onMouseLeave={(e) => e.target.style.background = '#f8f9fa'}>
                About Us
              </Link>
              <Link to="/solutions" style={{ 
                display: 'block', 
                padding: '12px 16px', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                color: '#111', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background 0.2s'
              }} onMouseEnter={(e) => e.target.style.background = '#e9ecef'} onMouseLeave={(e) => e.target.style.background = '#f8f9fa'}>
                Solutions
              </Link>
              <Link to="/pricing" style={{ 
                display: 'block', 
                padding: '12px 16px', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                color: '#111', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background 0.2s'
              }} onMouseEnter={(e) => e.target.style.background = '#e9ecef'} onMouseLeave={(e) => e.target.style.background = '#f8f9fa'}>
                Pricing
              </Link>
              <Link to="/book-demo" style={{ 
                display: 'block', 
                padding: '12px 16px', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                color: '#111', 
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background 0.2s'
              }} onMouseEnter={(e) => e.target.style.background = '#e9ecef'} onMouseLeave={(e) => e.target.style.background = '#f8f9fa'}>
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 