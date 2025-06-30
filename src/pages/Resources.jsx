import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Resources() {
  const [activeTab, setActiveTab] = useState('documentation');

  const resources = {
    documentation: [
      {
        title: 'Getting Started Guide',
        description: 'Learn the basics of setting up your nonprofit with Bionic',
        category: 'Beginner',
        time: '15 min read',
        icon: '📚'
      },
      {
        title: 'GrantBot User Manual',
        description: 'Complete guide to using GrantBot for grant applications',
        category: 'Intermediate',
        time: '30 min read',
        icon: '💰'
      },
      {
        title: 'OpsAI Configuration',
        description: 'How to configure OpsAI for your organization',
        category: 'Advanced',
        time: '45 min read',
        icon: '⚙️'
      },
      {
        title: 'SupportGPT Best Practices',
        description: 'Optimize your support operations with AI',
        category: 'Intermediate',
        time: '20 min read',
        icon: '🎧'
      }
    ],
    tutorials: [
      {
        title: 'Setting Up Your First Grant Application',
        description: 'Step-by-step tutorial for your first grant',
        video: true,
        duration: '12:34',
        level: 'Beginner',
        icon: '🎥'
      },
      {
        title: 'Automating Operations Reports',
        description: 'Create automated reports with OpsAI',
        video: true,
        duration: '18:45',
        level: 'Intermediate',
        icon: '🎥'
      },
      {
        title: 'Integrating with Your CRM',
        description: 'Connect Bionic with your existing systems',
        video: true,
        duration: '25:12',
        level: 'Advanced',
        icon: '🎥'
      },
      {
        title: 'Advanced Grant Strategies',
        description: 'Pro tips for maximizing grant success',
        video: true,
        duration: '32:18',
        level: 'Advanced',
        icon: '🎥'
      }
    ],
    caseStudies: [
      {
        title: 'Community Care Foundation',
        description: 'How they increased grant funding by 300%',
        results: '+300% funding',
        time: '6 months',
        icon: '🏆'
      },
      {
        title: 'Youth Empowerment Network',
        description: 'Streamlined operations with AI automation',
        results: '80% time saved',
        time: '3 months',
        icon: '⚡'
      },
      {
        title: 'Environmental Action Group',
        description: 'Scaling support with SupportGPT',
        results: '90% faster responses',
        time: '2 months',
        icon: '🌱'
      }
    ],
    webinars: [
      {
        title: 'AI for Nonprofits: The Future is Now',
        description: 'Learn how AI is transforming nonprofit operations',
        date: 'Dec 15, 2024',
        time: '2:00 PM EST',
        speaker: 'Dr. Sarah Johnson',
        icon: '🎤'
      },
      {
        title: 'Grant Writing in the AI Era',
        description: 'Best practices for modern grant applications',
        date: 'Dec 22, 2024',
        time: '1:00 PM EST',
        speaker: 'Michael Chen',
        icon: '🎤'
      },
      {
        title: 'Building Sustainable Operations',
        description: 'Long-term strategies for nonprofit success',
        date: 'Jan 5, 2025',
        time: '3:00 PM EST',
        speaker: 'Lisa Rodriguez',
        icon: '🎤'
      }
    ]
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1, padding: '24px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16, color: '#111' }}>
              Resources & Learning
            </h1>
            <p style={{ fontSize: 20, color: '#666', maxWidth: 600, margin: '0 auto' }}>
              Everything you need to succeed with The Bionic Group's AI tools.
            </p>
          </div>

          {/* Tabs */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', gap: 8, borderBottom: '2px solid #e5e7eb', flexWrap: 'wrap' }}>
              {['documentation', 'tutorials', 'case studies', 'webinars'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '12px 24px',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    color: activeTab === tab ? '#FFD600' : '#666',
                    borderBottom: activeTab === tab ? '2px solid #FFD600' : 'none',
                    marginBottom: -2,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 24 
          }}>
            {resources[activeTab].map((resource, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: 24,
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ fontSize: 32 }}>{resource.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#111' }}>
                      {resource.title}
                    </h3>
                    <p style={{ color: '#666', marginBottom: 12, lineHeight: 1.5 }}>
                      {resource.description}
                    </p>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                      {resource.category && (
                        <span style={{
                          background: '#F3F4F6',
                          color: '#374151',
                          padding: '4px 8px',
                          borderRadius: 4,
                          fontSize: 12,
                          fontWeight: 600
                        }}>
                          {resource.category}
                        </span>
                      )}
                      {resource.level && (
                        <span style={{
                          background: '#DBEAFE',
                          color: '#1E40AF',
                          padding: '4px 8px',
                          borderRadius: 4,
                          fontSize: 12,
                          fontWeight: 600
                        }}>
                          {resource.level}
                        </span>
                      )}
                      {resource.time && (
                        <span style={{ color: '#666', fontSize: 14 }}>
                          ⏱️ {resource.time}
                        </span>
                      )}
                      {resource.duration && (
                        <span style={{ color: '#666', fontSize: 14 }}>
                          🎥 {resource.duration}
                        </span>
                      )}
                      {resource.results && (
                        <span style={{
                          background: '#D1FAE5',
                          color: '#065F46',
                          padding: '4px 8px',
                          borderRadius: 4,
                          fontSize: 12,
                          fontWeight: 600
                        }}>
                          {resource.results}
                        </span>
                      )}
                    </div>

                    {activeTab === 'webinars' && (
                      <div style={{ marginTop: 12 }}>
                        <div style={{ color: '#666', fontSize: 14, marginBottom: 4 }}>
                          📅 {resource.date} at {resource.time}
                        </div>
                        <div style={{ color: '#666', fontSize: 14 }}>
                          👤 {resource.speaker}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div style={{ marginTop: 48, background: '#fff', padding: 32, borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, textAlign: 'center', marginBottom: 24, color: '#111' }}>
              Need More Help?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎧</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Support Center</h3>
                <p style={{ color: '#666', marginBottom: 16 }}>
                  Get help from our support team
                </p>
                <Link to="/contact">
                  <button style={{
                    background: '#FFD600',
                    color: '#111',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 6,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}>
                    Contact Support
                  </button>
                </Link>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>👥</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Community</h3>
                <p style={{ color: '#666', marginBottom: 16 }}>
                  Connect with other nonprofits
                </p>
                <button style={{
                  background: '#f3f4f6',
                  color: '#111',
                  border: '1px solid #d1d5db',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  Join Community
                </button>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>📚</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>API Documentation</h3>
                <p style={{ color: '#666', marginBottom: 16 }}>
                  Technical documentation for developers
                </p>
                <button style={{
                  background: '#f3f4f6',
                  color: '#111',
                  border: '1px solid #d1d5db',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  View API Docs
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div style={{ marginTop: 48, background: '#111', color: '#fff', padding: 48, borderRadius: 16, textAlign: 'center' }}>
            <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
              Stay Updated
            </h3>
            <p style={{ color: '#ccc', marginBottom: 24, maxWidth: 500, margin: '0 auto' }}>
              Get the latest resources, tutorials, and insights delivered to your inbox.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 400, margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: 200,
                  padding: '12px 16px',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 16
                }}
              />
              <button style={{
                background: '#FFD600',
                color: '#111',
                border: 'none',
                padding: '12px 24px',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 