import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(90deg, #e0f2fe 0%, #f1f5f9 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', color: '#1e3a8a', letterSpacing: -1 }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#334155', lineHeight: 1.6 }}>
            Ready to transform your nonprofit with AI? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            {/* Contact Form */}
            <div style={{ flex: '2 1 600px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      flex: '1 1 200px',
                      padding: '1rem',
                      borderRadius: 8,
                      border: '1px solid #e0e7ef',
                      fontSize: '1rem',
                      background: '#fff'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      flex: '1 1 200px',
                      padding: '1rem',
                      borderRadius: 8,
                      border: '1px solid #e0e7ef',
                      fontSize: '1rem',
                      background: '#fff'
                    }}
                  />
                </div>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization Name"
                  value={formData.organization}
                  onChange={handleChange}
                  style={{
                    padding: '1rem',
                    borderRadius: 8,
                    border: '1px solid #e0e7ef',
                    fontSize: '1rem',
                    background: '#fff'
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    padding: '1rem',
                    borderRadius: 8,
                    border: '1px solid #e0e7ef',
                    fontSize: '1rem',
                    background: '#fff',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
                <button
                  type="submit"
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
                    alignSelf: 'flex-start'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
                Other ways to reach us
              </h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📧</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#2563eb' }}>Email</div>
                    <div style={{ color: '#334155' }}>hello@thebionicgroup.org</div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📅</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#2563eb' }}>Book a Demo</div>
                    <div style={{ color: '#334155' }}>Schedule a personalized walkthrough</div>
                  </div>
                </div>
                <Link 
                  to="/book-demo" 
                  style={{ 
                    color: '#2563eb', 
                    textDecoration: 'underline', 
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  Book Now →
                </Link>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginRight: '1rem' }}>💬</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#2563eb' }}>Live Chat</div>
                    <div style={{ color: '#334155' }}>Available during business hours</div>
                  </div>
                </div>
              </div>

              <div style={{ background: '#e0f2fe', borderRadius: 12, padding: '1.5rem', marginTop: '2rem' }}>
                <div style={{ fontWeight: 600, color: '#2563eb', marginBottom: '0.5rem' }}>Response Time</div>
                <div style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  We typically respond to all inquiries within 24 hours during business days.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
            Ready to see Bionic in action?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '3rem', lineHeight: 1.6 }}>
            The best way to understand how our AI tools can help your nonprofit is to see them in action.
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

export default Contact; 