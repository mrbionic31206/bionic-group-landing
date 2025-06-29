import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const BookDemo = () => {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      {/* Header */}
      <Header />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: 'calc(100vh - 80px)', background: '#F5F7FA' }}>
        {/* Left column */}
        <div style={{ flex: '1 1 350px', background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: 32, letterSpacing: -1, color: '#1e3a8a', marginBottom: '1rem' }}>
              The Bionic Group
            </div>
            <div style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.6 }}>
              The Nonprofit Operating System
            </div>
          </div>
        </div>
        {/* Right column */}
        <div style={{ flex: '2 1 500px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', minWidth: 320 }}>
          <div style={{ marginBottom: 24, fontSize: '1.2rem', color: '#2563eb', fontWeight: 600, textAlign: 'center' }}>
            📅 Select a time below to book your demo
          </div>
          <div style={{ marginBottom: 16, fontSize: '1rem', color: '#64748b', textAlign: 'center', maxWidth: 500 }}>
            Choose a convenient time slot for your personalized demo. We'll show you how The Bionic Group can transform your Nonprofit.
          </div>
          <iframe 
            src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Dkio9w7H__t-quKYOqT9ZYpHkUI8H_H8fPafMjRIw5pDP6VSjIqigNr-4ThfnuoYn7zyQm118?gv=true' 
            style={{ border: 0, width: '100%', height: 600, minWidth: 300, borderRadius: 8, boxShadow: '0 4px 16px #2563eb11' }} 
            frameBorder='0' 
            title='Book a Demo'
          />
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <div style={{ fontSize: '1rem', color: '#64748b', marginBottom: 16 }}>
              After booking your slot, click the button below to confirm
            </div>
            <button 
              onClick={() => navigate('/thank-you')} 
              style={{ 
                background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)', 
                color: '#fff', 
                padding: '1rem 2rem', 
                borderRadius: 8, 
                border: 'none', 
                fontWeight: 700, 
                fontSize: '1.1rem', 
                cursor: 'pointer', 
                boxShadow: '0 4px 16px #2563eb22',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px #2563eb33';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 16px #2563eb22';
              }}
            >
              📅 Booked
            </button>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            div[style*='display: flex'][style*='minHeight: calc(100vh - 80px)'] { flex-direction: column; }
            div[style*='flex: 1 1 350px'] { width: 100%; }
            div[style*='flex: 2 1 500px'] { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BookDemo; 