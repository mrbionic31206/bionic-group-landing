import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Grants Applied', value: '24', change: '+12%', color: '#10B981' },
    { label: 'Operations Tasks', value: '156', change: '+8%', color: '#3B82F6' },
    { label: 'Support Tickets', value: '89', change: '-5%', color: '#F59E0B' },
    { label: 'Time Saved', value: '127h', change: '+23%', color: '#8B5CF6' }
  ];

  const recentActivities = [
    { type: 'grant', title: 'Grant application submitted', time: '2 hours ago', status: 'pending' },
    { type: 'ops', title: 'Operations report generated', time: '4 hours ago', status: 'completed' },
    { type: 'support', title: 'Support ticket resolved', time: '1 day ago', status: 'completed' },
    { type: 'grant', title: 'New grant opportunity found', time: '2 days ago', status: 'new' }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1, padding: '24px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Welcome Section */}
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#111' }}>
              Welcome back, Sarah! 👋
            </h1>
            <p style={{ color: '#666', fontSize: 16 }}>
              Here's what's happening with your nonprofit today.
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 24, 
            marginBottom: 32 
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: 24,
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e5e7eb'
              }}>
                <div style={{ color: '#666', fontSize: 14, marginBottom: 8 }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#111' }}>
                  {stat.value}
                </div>
                <div style={{ color: stat.color, fontSize: 14, fontWeight: 600 }}>
                  {stat.change} from last month
                </div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', gap: 8, borderBottom: '2px solid #e5e7eb' }}>
              {['overview', 'grants', 'operations', 'support'].map((tab) => (
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
                    marginBottom: -2
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
            {/* Main Content */}
            <div>
              {activeTab === 'overview' && (
                <div style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Recent Activity</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {recentActivities.map((activity, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 8, background: '#f8f9fa' }}>
                        <div style={{ 
                          width: 40, 
                          height: 40, 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          background: activity.type === 'grant' ? '#10B981' : 
                                     activity.type === 'ops' ? '#3B82F6' : '#F59E0B',
                          color: '#fff',
                          fontWeight: 600
                        }}>
                          {activity.type === 'grant' ? '💰' : activity.type === 'ops' ? '⚙️' : '🎧'}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, marginBottom: 4 }}>{activity.title}</div>
                          <div style={{ color: '#666', fontSize: 14 }}>{activity.time}</div>
                        </div>
                        <div style={{ 
                          padding: '4px 8px', 
                          borderRadius: 4, 
                          fontSize: 12, 
                          fontWeight: 600,
                          background: activity.status === 'completed' ? '#D1FAE5' : 
                                     activity.status === 'pending' ? '#FEF3C7' : '#DBEAFE',
                          color: activity.status === 'completed' ? '#065F46' : 
                                 activity.status === 'pending' ? '#92400E' : '#1E40AF'
                        }}>
                          {activity.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'grants' && (
                <div style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Grant Management</h3>
                  <p style={{ color: '#666', marginBottom: 24 }}>
                    Track your grant applications and discover new opportunities.
                  </p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button style={{
                      background: '#FFD600',
                      color: '#111',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}>
                      Apply for Grants
                    </button>
                    <button style={{
                      background: '#f3f4f6',
                      color: '#111',
                      border: '1px solid #d1d5db',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}>
                      View Applications
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'operations' && (
                <div style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Operations Dashboard</h3>
                  <p style={{ color: '#666', marginBottom: 24 }}>
                    Manage your nonprofit's day-to-day operations efficiently.
                  </p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button style={{
                      background: '#FFD600',
                      color: '#111',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}>
                      Generate Reports
                    </button>
                    <button style={{
                      background: '#f3f4f6',
                      color: '#111',
                      border: '1px solid #d1d5db',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}>
                      Task Management
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'support' && (
                <div style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Support Center</h3>
                  <p style={{ color: '#666', marginBottom: 24 }}>
                    Get help and manage support tickets for your organization.
                  </p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button style={{
                      background: '#FFD600',
                      color: '#111',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}>
                      Create Ticket
                    </button>
                    <button style={{
                      background: '#f3f4f6',
                      color: '#111',
                      border: '1px solid #d1d5db',
                      padding: '12px 24px',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}>
                      View Tickets
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Quick Actions */}
              <div style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>Quick Actions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <button style={{
                    background: '#FFD600',
                    color: '#111',
                    border: 'none',
                    padding: '12px 16px',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}>
                    📝 New Grant Application
                  </button>
                  <button style={{
                    background: '#f3f4f6',
                    color: '#111',
                    border: '1px solid #d1d5db',
                    padding: '12px 16px',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}>
                    📊 Generate Report
                  </button>
                  <button style={{
                    background: '#f3f4f6',
                    color: '#111',
                    border: '1px solid #d1d5db',
                    padding: '12px 16px',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}>
                    🎧 Contact Support
                  </button>
                </div>
              </div>

              {/* AI Tools Status */}
              <div style={{ background: '#fff', padding: 24, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>AI Tools Status</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }}></div>
                    <span style={{ fontSize: 14 }}>GrantBot - Active</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }}></div>
                    <span style={{ fontSize: 14 }}>OpsAI - Active</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }}></div>
                    <span style={{ fontSize: 14 }}>SupportGPT - Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 