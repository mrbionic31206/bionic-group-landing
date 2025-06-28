import React from 'react';

const BookDemo = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '100vh', background: '#F5F7FA' }}>
      {/* Left column */}
      <div style={{ flex: '1 1 350px', background: '#F5F7FA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <img src='/logo.png' alt='The Bionic Group' style={{ width: '66%', maxWidth: 320, margin: '0 auto', display: 'block' }} />
      </div>
      {/* Right column */}
      <div style={{ flex: '2 1 500px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', minWidth: 320 }}>
        <iframe src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Dkio9w7H__t-quKYOqT9ZYpHkUI8H_H8fPafMjRIw5pDP6VSjIqigNr-4ThfnuoYn7zyQm118?gv=true' style={{ border: 0, width: '100%', height: 600, minWidth: 300 }} frameBorder='0' title='Book a Demo'></iframe>
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