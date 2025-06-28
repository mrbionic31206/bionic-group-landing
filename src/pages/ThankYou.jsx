import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', background: '#fff', borderRadius: 16, padding: '3rem 2rem', boxShadow: '0 8px 32px #2563eb11', maxWidth: 500, width: '100%' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontWeight: 700, fontSize: 28, letterSpacing: -1, color: '#1e3a8a', marginBottom: '0.5rem' }}>
            The Bionic Group
          </div>
          <div style={{ fontSize: '1rem', color: '#64748b' }}>
            AI-Powered Nonprofit Operating System
          </div>
        </div>
        
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎉</div>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem', color: '#1e3a8a' }}>
          Thanks for booking a demo!
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '2rem', lineHeight: 1.6 }}>
          We're excited to show you how our AI tools can transform your nonprofit operations. You'll receive a confirmation email shortly with meeting details.
        </p>
        
        <div style={{ background: '#e0f2fe', borderRadius: 12, padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ fontWeight: 600, color: '#2563eb', marginBottom: '0.5rem' }}>What to expect:</div>
          <ul style={{ textAlign: 'left', color: '#334155', fontSize: '1rem', lineHeight: 1.6, margin: 0, paddingLeft: '1.5rem' }}>
            <li>Personalized demo of GrantBot, OpsAI, and SupportGPT</li>
            <li>Real examples from similar nonprofits</li>
            <li>Implementation roadmap for your organization</li>
            <li>Q&A session with our team</li>
          </ul>
        </div>
        
        <Link 
          to="/" 
          style={{ 
            color: '#2563eb', 
            textDecoration: 'none', 
            fontSize: '1.1rem', 
            fontWeight: 600,
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
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou; 