import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Solutions = () => {
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
            Our AI Solutions
          </h1>
          <p style={{ fontSize: '1.4rem', color: '#334155', lineHeight: 1.6 }}>
            Three specialized AI tools designed to transform every aspect of your nonprofit operations.
          </p>
        </div>
      </section>

      {/* GrantBot Section */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1.5rem' }}>
                GrantBot
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.7, marginBottom: '2rem' }}>
                Your AI-powered grant research and writing assistant. GrantBot discovers funding opportunities, writes compelling LOIs, and tracks compliance requirements.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Grant Discovery</span>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>LOI Writing</span>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Compliance Tracking</span>
              </div>
              <ul style={{ color: '#334155', lineHeight: 1.8, fontSize: '1.1rem' }}>
                <li>Automatically scans 50+ grant databases daily</li>
                <li>Writes personalized LOIs in your organization's voice</li>
                <li>Tracks deadlines and reporting requirements</li>
                <li>Provides success rate predictions</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', background: '#e0f2fe', borderRadius: 16, padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>
                Average Results
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '0.5rem' }}>$200K+</div>
              <div style={{ color: '#334155' }}>in grants discovered per month</div>
            </div>
          </div>
        </div>
      </section>

      {/* OpsAI Section */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px', background: '#e0f2fe', borderRadius: 16, padding: '3rem', textAlign: 'center', order: 2 }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>
                Efficiency Gains
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '0.5rem' }}>40%</div>
              <div style={{ color: '#334155' }}>reduction in administrative time</div>
            </div>
            <div style={{ flex: '1 1 500px', order: 1 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1.5rem' }}>
                OpsAI
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.7, marginBottom: '2rem' }}>
                Your operations automation specialist. OpsAI manages task workflows, tracks program metrics, and ensures nothing falls through the cracks.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Task Management</span>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Program Tracking</span>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Workflow Automation</span>
              </div>
              <ul style={{ color: '#334155', lineHeight: 1.8, fontSize: '1.1rem' }}>
                <li>Automates routine administrative tasks</li>
                <li>Creates and tracks project timelines</li>
                <li>Generates progress reports automatically</li>
                <li>Manages stakeholder communications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SupportGPT Section */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '1.5rem' }}>
                SupportGPT
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#334155', lineHeight: 1.7, marginBottom: '2rem' }}>
                Your community engagement and support specialist. SupportGPT manages social media, handles inquiries, and maintains your organization's online presence.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Social Media</span>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Community Support</span>
                <span style={{ background: '#e0f2fe', color: '#2563eb', padding: '0.5rem 1rem', borderRadius: 20, fontSize: '0.9rem', fontWeight: 600 }}>Content Creation</span>
              </div>
              <ul style={{ color: '#334155', lineHeight: 1.8, fontSize: '1.1rem' }}>
                <li>Manages social media accounts 24/7</li>
                <li>Responds to community inquiries instantly</li>
                <li>Creates engaging content and newsletters</li>
                <li>Monitors brand sentiment and engagement</li>
              </ul>
            </div>
            <div style={{ flex: '1 1 400px', background: '#e0f2fe', borderRadius: 16, padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📈</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem' }}>
                Engagement Boost
              </h3>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '0.5rem' }}>3x</div>
              <div style={{ color: '#334155' }}>increase in community engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
            Seamless Integration
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '3rem', lineHeight: 1.6, maxWidth: 800, margin: '0 auto 3rem auto' }}>
            All three tools work together as a unified system, sharing data and insights to maximize your nonprofit's impact.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 4px 16px #2563eb11' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔗</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1rem' }}>Unified Dashboard</h3>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>Monitor all three tools from one central interface with real-time insights and analytics.</p>
            </div>
            <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 4px 16px #2563eb11' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1rem' }}>Shared Intelligence</h3>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>Tools learn from each other to provide increasingly personalized and effective support.</p>
            </div>
            <div style={{ flex: '1 1 300px', background: '#fff', borderRadius: 16, padding: '2rem', boxShadow: '0 4px 16px #2563eb11' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</div>
              <h3 style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1rem' }}>Easy Setup</h3>
              <p style={{ color: '#334155', lineHeight: 1.6 }}>Get started in minutes with our guided onboarding process and pre-built templates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 2rem', background: '#e0f2fe', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '2rem' }}>
            Ready to see these tools in action?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#334155', marginBottom: '3rem', lineHeight: 1.6 }}>
            Book a personalized demo to see how GrantBot, OpsAI, and SupportGPT can transform your nonprofit operations.
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

export default Solutions; 