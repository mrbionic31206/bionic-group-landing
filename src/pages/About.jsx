import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
          <Link to="/" style={{ color: '#1e40af' }}>Home</Link>
          <Link to="/about" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline' }}>About</Link>
          <Link to="/solutions" style={{ color: '#1e40af' }}>Solutions</Link>
          <Link to="/contact" style={{ color: '#1e40af' }}>Contact</Link>
          <Link to="/book-demo" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline' }}>Book a Demo</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(90deg, #e0f2fe 0%, #f1f5f9 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: '#1e3a8a', letterSpacing: -1 }}>
            About The Bionic Group
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#334155', lineHeight: 1.6 }}>
            We're on a mission to revolutionize how nonprofits operate by making AI accessible, practical, and impactful.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.7, marginBottom: '2rem' }}>
                Nonprofits are doing some of the most important work in our society, but they're often bogged down by administrative tasks that take time away from their core mission. We believe AI can change that.
              </p>
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.7 }}>
                The Bionic Group was founded to bridge the gap between cutting-edge AI technology and the practical needs of mission-driven organizations. We don't just provide AI tools – we provide AI teammates that work alongside your staff to amplify their impact.
              </p>
            </div>
            <div style={{ flex: '1 1 400px', background: '#e0f2fe', borderRadius: 16, padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>
                Mission-Driven
              </h3>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>
                Every tool we build is designed with one goal: helping nonprofits serve their communities better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '3rem', textAlign: 'center' }}>
            Our Values
          </h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: 16, padding: '2.5rem', textAlign: 'center', boxShadow: '0 4px 16px #2563eb11' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1rem' }}>Partnership</h3>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>We work alongside your team, not replace them. Our AI tools enhance human capabilities.</p>
            </div>
            <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: 16, padding: '2.5rem', textAlign: 'center', boxShadow: '0 4px 16px #2563eb11' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1rem' }}>Transparency</h3>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>We believe in clear, explainable AI that you can trust and understand.</p>
            </div>
            <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: 16, padding: '2.5rem', textAlign: 'center', boxShadow: '0 4px 16px #2563eb11' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1rem' }}>Innovation</h3>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>We continuously evolve our tools based on real feedback from nonprofit leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', background: '#e0f2fe', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
            Ready to join the Bionic revolution?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '3rem', lineHeight: 1.6 }}>
            Let's explore how our AI tools can transform your nonprofit's operations and amplify your impact.
          </p>
          <Link 
            to="/book-demo" 
            style={{ 
              background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)', 
              color: '#fff', 
              padding: '1rem 2.5rem', 
              borderRadius: 8, 
              border: 'none', 
              fontWeight: 700, 
              fontSize: '1.1rem', 
              cursor: 'pointer', 
              boxShadow: '0 4px 16px #2563eb22',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Book Your Demo
          </Link>
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
            <div style={{ fontSize: 14, opacity: 0.8 }}>About, Events, Careers</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About; 