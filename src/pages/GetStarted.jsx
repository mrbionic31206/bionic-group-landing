import React from 'react';

export default function GetStarted() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
      <div style={{ background: '#fff', padding: 48, borderRadius: 16, boxShadow: '0 8px 32px #2221', maxWidth: 500, width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 800, fontSize: 32, marginBottom: 24, color: '#1e3a8a' }}>Get Started</h1>
        <p style={{ fontSize: 18, color: '#334155', marginBottom: 32 }}>
          Welcome to The Bionic Group!<br />
          This is your starting point for onboarding, demos, and more.
        </p>
        <button style={{ background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '14px 32px', cursor: 'pointer' }}>
          Book a Demo
        </button>
      </div>
    </div>
  );
} 