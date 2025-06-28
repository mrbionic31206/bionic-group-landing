import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookDemo = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100vh', background: '#F5F7FA' }}>
      {/* Left column */}
      <div style={{ flex: '1 1 350px', background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <img src='/logo.png' alt='The Bionic Group' style={{ width: '66%', maxWidth: 320, margin: '0 auto', display: 'block' }} />
      </div>
      {/* Right column */}
      <div style={{ flex: '2 1 500px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', minWidth: 320 }}>
        <div style={{ marginBottom: 24, fontSize: '1.2rem', color: '#2563eb', fontWeight: 600, textAlign: 'center' }}>
          Select a time below to book your demo. After booking, click the button to continue.
        </div>
        <iframe src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Dkio9w7H__t-quKYOqT9ZYpHkUI8H_H8fPafMjRIw5pDP6VSjIqigNr-4ThfnuoYn7zyQm118?gv=true' style={{ border: 0, width: '100%', height: 600, minWidth: 300 }} frameBorder='0' title='Book a Demo'></iframe>
        <button onClick={() => navigate('/thank-you')} style={{ marginTop: 24, background: '#2563eb', color: '#fff', padding: '0.8rem 2rem', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 2px 8px #2563eb22' }}>
          I've booked my slot – Continue
        </button>
      </div>
      <style>{`
        @media (max-width: 900px) {
          div[style*='display: flex'][style*='minHeight: 100vh'] { flex-direction: column; }
          div[style*='flex: 1 1 350px'] { width: 100%; }
          div[style*='flex: 2 1 500px'] { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default BookDemo; 