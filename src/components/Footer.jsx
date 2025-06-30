import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: '#111',
      color: '#fff',
      padding: '48px 24px 24px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 32
      }}>
        {/* Company Info */}
        <div>
          <div style={{ fontWeight: 700, fontSize: 24, marginBottom: 16 }}>
            The Bionic Group
          </div>
          <p style={{ color: '#ccc', lineHeight: 1.6, marginBottom: 16 }}>
            The Nonprofit Operating System. You Empower. We Automate.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="#" style={{ color: '#fff', fontSize: 20 }}>📧</a>
            <a href="#" style={{ color: '#fff', fontSize: 20 }}>🐦</a>
            <a href="#" style={{ color: '#fff', fontSize: 20 }}>💼</a>
            <a href="#" style={{ color: '#fff', fontSize: 20 }}>📘</a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Solutions</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>
              <Link to="/solutions" style={{ color: '#ccc', textDecoration: 'none' }}>GrantBot</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/solutions" style={{ color: '#ccc', textDecoration: 'none' }}>OpsAI</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/solutions" style={{ color: '#ccc', textDecoration: 'none' }}>SupportGPT</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/pricing" style={{ color: '#ccc', textDecoration: 'none' }}>Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Company</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>
              <Link to="/about" style={{ color: '#ccc', textDecoration: 'none' }}>About Us</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/resources" style={{ color: '#ccc', textDecoration: 'none' }}>Resources</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/blog" style={{ color: '#ccc', textDecoration: 'none' }}>Blog</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/contact" style={{ color: '#ccc', textDecoration: 'none' }}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 style={{ fontWeight: 600, marginBottom: 16 }}>Support</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Help Center</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>Documentation</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/book-demo" style={{ color: '#ccc', textDecoration: 'none' }}>Book Demo</Link>
            </li>
            <li style={{ marginBottom: 8 }}>
              <Link to="/get-started" style={{ color: '#ccc', textDecoration: 'none' }}>Get Started</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid #333',
        marginTop: 32,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16
      }}>
        <div style={{ color: '#888', fontSize: 14 }}>
          © 2024 The Bionic Group. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: 24, fontSize: 14 }}>
          <a href="#" style={{ color: '#888', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#888', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: '#888', textDecoration: 'none' }}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
} 