import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ThankYou = () => {
  return (
    <div style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      {/* Header */}
      <Header />
      
      <div style={{ minHeight: 'calc(100vh - 80px)', background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', background: '#fff', borderRadius: 16, padding: '3rem 2rem', boxShadow: '0 8px 32px #2563eb11', maxWidth: '50%', width: '100%', minWidth: 400 }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontWeight: 700, fontSize: 28, letterSpacing: -1, color: '#1e3a8a', marginBottom: '0.5rem' }}>
              The Bionic Group
            </div>
            <div style={{ fontSize: '1rem', color: '#64748b' }}>
              The Nonprofit Operating System
            </div>
          </div>
          
          <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#8B4513' }}>🤝</div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem', color: '#1e3a8a' }}>
            Thanks!
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '2rem', lineHeight: 1.6 }}>
            We're excited to show you Bionic! Meeting details have been emailed.
          </p>
          
          <div style={{ background: '#e0f2fe', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ fontWeight: 600, color: '#2563eb', marginBottom: '0.5rem' }}>What To Expect:</div>
            <ul style={{ textAlign: 'left', color: '#334155', fontSize: '1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.5rem' }}>
              <li>Personalized Demo of Grant, Sydney, and Eli</li>
              <li>How it works</li>
              <li>Implementation roadmap for your Organization</li>
              <li>Real Examples. Similar Nonprofits.</li>
              <li>The Nonprofit Operating System</li>
            </ul>
          </div>
          
          <Link 
            to="/" 
            style={{ 
              color: '#2563eb', 
              textDecoration: 'none', 
              fontSize: '2rem',
              padding: '0.8rem 1.5rem',
              border: '2px solid #2563eb',
              borderRadius: 8,
              display: 'inline-block',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#2563eb';
              e.target.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#2563eb';
            }}
          >
            🏠
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 