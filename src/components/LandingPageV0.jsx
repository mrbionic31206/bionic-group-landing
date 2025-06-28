import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageV0 = () => {
  const handleGetStarted = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Get Started clicked');
  };

  const handleBookDemo = (e) => {
    e.preventDefault();
    // TODO: Add booking logic
    console.log('Book Demo clicked');
  };

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // TODO: Add newsletter signup logic
    console.log('Newsletter signup');
  };

  return (
    <div style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      {/* Header */}
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
        <Link to="/" style={{ fontWeight: 700, fontSize: 28, letterSpacing: -1, color: '#1e3a8a', textDecoration: 'none' }}>
          The Bionic Group
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/about" style={{ color: '#1e40af' }}>About</Link>
          <Link to="/solutions" style={{ color: '#1e40af' }}>Solutions</Link>
          <Link to="/contact" style={{ color: '#1e40af' }}>Contact</Link>
          <Link to="/book-demo" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline' }}>Book a Demo</Link>
        </nav>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={handleGetStarted} style={{ background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)', color: '#fff', padding: '0.6rem 1.2rem', borderRadius: 6, border: 'none', fontWeight: 600, cursor: 'pointer', boxShadow: '0 2px 8px #2563eb22' }}>Get Started</button>
          <Link to="/book-demo" style={{ border: '1px solid #2563eb', color: '#2563eb', padding: '0.6rem 1.2rem', borderRadius: 6, background: '#e0f2fe', fontWeight: 600, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Book a Demo</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(90deg, #e0f2fe 0%, #f1f5f9 100%)',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1rem 3rem 1rem',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: '#1e3a8a', letterSpacing: -1, maxWidth: 800 }}>
          The Nonprofit Operating System
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#334155', maxWidth: 700, margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
          Your AI-powered digital team, built to automate the work your staff shouldn't be doing.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button onClick={handleGetStarted} style={{ background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)', color: '#fff', padding: '1rem 2.5rem', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 4px 16px #2563eb22' }}>Get Started</button>
          <Link to="/book-demo" style={{ border: '2px solid #2563eb', color: '#2563eb', padding: '1rem 2.5rem', borderRadius: 8, background: '#e0f2fe', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Book a Demo</Link>
        </div>
        <div style={{ background: '#1e3a8a', color: '#fff', borderRadius: 8, padding: '1rem 2rem', fontFamily: 'monospace', fontSize: '1.1rem', display: 'inline-block', opacity: 0.92 }}>
          npm create bionic-agent
        </div>
      </section>

      {/* Key Features */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '3rem', textAlign: 'center' }}>
            Turn key staff roles into AI-powered teammates
          </h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', background: '#e0f2fe', borderRadius: 16, padding: '2.5rem', minWidth: 280, maxWidth: 380, boxShadow: '0 4px 16px #2563eb11' }}>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>GrantBot</h3>
              <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.6 }}>Discovers grants, writes LOIs, tracks compliance.</p>
            </div>
            <div style={{ flex: '1 1 300px', background: '#e0e7ef', borderRadius: 16, padding: '2.5rem', minWidth: 280, maxWidth: 380, boxShadow: '0 4px 16px #2563eb11' }}>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>OpsAI</h3>
              <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.6 }}>Automates task management and program tracking.</p>
            </div>
            <div style={{ flex: '1 1 300px', background: '#e0f2fe', borderRadius: 16, padding: '2.5rem', minWidth: 280, maxWidth: 380, boxShadow: '0 4px 16px #2563eb11' }}>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>SupportGPT</h3>
              <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.6 }}>Manages social, outreach, and community visibility.</p>
            </div>
          </div>
          <p style={{ marginTop: 3, color: '#334155', textAlign: 'center', fontSize: '1.1rem' }}>
            Each bot learns weekly, works 24/7, and integrates into your workflows instantly.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section style={{ padding: '5rem 2rem', background: '#e0f2fe', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '3rem' }}>
            Trusted by mission-driven teams
          </h2>
          <blockquote style={{ fontStyle: 'italic', color: '#2563eb', fontSize: '1.4rem', margin: '2rem auto', lineHeight: 1.6 }}>
            "GrantBot found us $200K in funding opportunities in a week. It's like having a full-time grant writer."
            <br />
            <span style={{ color: '#334155', fontWeight: 600, fontSize: '1.1rem' }}>— Director, Housing & Recovery Services</span>
          </blockquote>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: 3 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem 2rem', minWidth: 200, boxShadow: '0 2px 8px #2563eb11' }}>Local Mental Health Agencies</div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem 2rem', minWidth: 200, boxShadow: '0 2px 8px #2563eb11' }}>Youth Services Nonprofits</div>
            <div style={{ background: '#fff', borderRadius: 12, padding: '1.5rem 2rem', minWidth: 200, boxShadow: '0 2px 8px #2563eb11' }}>Community Coalitions</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
            Ready to get started?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '3rem', lineHeight: 1.6 }}>
            Join the Bionic Community and start automating your nonprofit operations today.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button onClick={handleGetStarted} style={{ background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)', color: '#fff', padding: '1rem 2.5rem', borderRadius: 8, border: 'none', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 4px 16px #2563eb22' }}>Try It Free</button>
            <Link to="/book-demo" style={{ border: '2px solid #2563eb', color: '#2563eb', padding: '1rem 2.5rem', borderRadius: 8, background: '#fff', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>Talk to Sales</Link>
          </div>
          
          {/* Newsletter Signup */}
          <div style={{ background: '#e0f2fe', borderRadius: 16, padding: '2rem', maxWidth: 500, margin: '0 auto' }}>
            <h3 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>Get AI strategy tips and nonprofit wins</h3>
            <form onSubmit={handleNewsletterSignup} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  padding: '0.8rem 1.2rem', 
                  borderRadius: 6, 
                  border: '1px solid #e0e7ef', 
                  flex: '1 1 250px',
                  minWidth: 250,
                  fontSize: '1rem'
                }}
                required
              />
              <button type="submit" style={{ background: '#2563eb', color: '#fff', padding: '0.8rem 1.5rem', borderRadius: 6, border: 'none', fontWeight: 600, cursor: 'pointer' }}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1e3a8a', color: '#fff', padding: '3rem 2rem 2rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 12 }}>The Bionic Group</div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>© The Bionic Group 2025</div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Products</div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>GrantBot, OpsAI, SupportGPT</div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Resources</div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>Docs, Templates, Case Studies</div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Company</div>
            <div style={{ fontSize: 14, opacity: 0.8 }}>
              <Link to="/about" style={{ color: '#fff', textDecoration: 'none', opacity: 0.8 }}>About</Link>, 
              <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', opacity: 0.8 }}> Contact</Link>, 
              Events, Careers
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageV0;
