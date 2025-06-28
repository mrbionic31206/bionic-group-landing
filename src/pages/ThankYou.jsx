import React from 'react';

const ThankYou = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', background: '#fff', borderRadius: 12, padding: '3rem 2rem', boxShadow: '0 2px 12px #2563eb11', maxWidth: 400, width: '100%' }}>
        <img src='/logo.png' alt='The Bionic Group' style={{ width: 128, margin: '0 auto 1.5rem auto', display: 'block' }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Thanks for booking a demo!</h1>
        <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '2rem' }}>We look forward to showing you how Bionic works.</p>
        <a href='/' style={{ color: '#2563eb', textDecoration: 'underline', fontSize: '1rem' }}>← Back to Home</a>
      </div>
    </div>
  );
};

export default ThankYou; 