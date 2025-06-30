import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 99 : 990,
      description: 'Perfect for small nonprofits getting started',
      features: [
        'GrantBot - 10 applications/month',
        'OpsAI - Basic reporting',
        'SupportGPT - Email support',
        'Basic analytics',
        '1 user account'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? 299 : 2990,
      description: 'Ideal for growing organizations',
      features: [
        'GrantBot - 50 applications/month',
        'OpsAI - Advanced reporting & automation',
        'SupportGPT - Priority support',
        'Advanced analytics & insights',
        'Up to 5 user accounts',
        'Custom integrations',
        'Monthly consultation'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 599 : 5990,
      description: 'For large nonprofits with complex needs',
      features: [
        'GrantBot - Unlimited applications',
        'OpsAI - Full automation suite',
        'SupportGPT - Dedicated support team',
        'Custom AI training',
        'Unlimited user accounts',
        'White-label options',
        'Weekly consultation',
        'Custom development'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1, padding: '24px', background: '#f8f9fa' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16, color: '#111' }}>
              Simple, Transparent Pricing
            </h1>
            <p style={{ fontSize: 20, color: '#666', marginBottom: 32, maxWidth: 600, margin: '0 auto' }}>
              Choose the plan that fits your nonprofit's needs. All plans include our core AI tools.
            </p>
            
            {/* Billing Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
              <span style={{ color: '#666', fontWeight: 500 }}>Monthly</span>
              <label style={{ position: 'relative', display: 'inline-block', width: 60, height: 30 }}>
                <input
                  type="checkbox"
                  checked={billingCycle === 'yearly'}
                  onChange={(e) => setBillingCycle(e.target.checked ? 'yearly' : 'monthly')}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: billingCycle === 'yearly' ? '#FFD600' : '#ccc',
                  borderRadius: 30,
                  transition: '0.3s'
                }}>
                  <span style={{
                    position: 'absolute',
                    content: '""',
                    height: 24,
                    width: 24,
                    left: 3,
                    bottom: 3,
                    background: '#fff',
                    borderRadius: '50%',
                    transition: '0.3s',
                    transform: billingCycle === 'yearly' ? 'translateX(30px)' : 'translateX(0)'
                  }}></span>
                </span>
              </label>
              <span style={{ color: '#666', fontWeight: 500 }}>Yearly</span>
              <span style={{ 
                background: '#10B981', 
                color: '#fff', 
                padding: '4px 8px', 
                borderRadius: 12, 
                fontSize: 12, 
                fontWeight: 600 
              }}>
                Save 17%
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 24, 
            marginBottom: 48 
          }}>
            {plans.map((plan, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: 32,
                borderRadius: 16,
                boxShadow: plan.popular ? '0 8px 32px rgba(0,0,0,0.15)' : '0 4px 16px rgba(0,0,0,0.1)',
                border: plan.popular ? '2px solid #FFD600' : '1px solid #e5e7eb',
                position: 'relative',
                transform: plan.popular ? 'scale(1.02)' : 'none'
              }}>
                {plan.popular && (
                  <div style={{
                    position: 'absolute',
                    top: -12,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#FFD600',
                    color: '#111',
                    padding: '8px 16px',
                    borderRadius: 20,
                    fontSize: 14,
                    fontWeight: 600
                  }}>
                    Most Popular
                  </div>
                )}
                
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: '#111' }}>
                    {plan.name}
                  </h3>
                  <p style={{ color: '#666', marginBottom: 16 }}>
                    {plan.description}
                  </p>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 48, fontWeight: 700, color: '#111' }}>
                      ${plan.price}
                    </span>
                    <span style={{ color: '#666', fontSize: 16 }}>
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 12, 
                      marginBottom: 12,
                      fontSize: 16
                    }}>
                      <span style={{ color: '#10B981', fontSize: 20 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={plan.name === 'Enterprise' ? '/contact' : '/get-started'}>
                  <button style={{
                    width: '100%',
                    background: plan.popular ? '#FFD600' : '#111',
                    color: plan.popular ? '#111' : '#fff',
                    border: 'none',
                    padding: '16px 24px',
                    borderRadius: 8,
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}>
                    {plan.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div style={{ background: '#fff', padding: 48, borderRadius: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: 'center', marginBottom: 32, color: '#111' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 32 }}>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#111' }}>
                  Can I change plans anytime?
                </h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#111' }}>
                  Is there a free trial?
                </h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  Yes, we offer a 14-day free trial on our Professional plan. No credit card required.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#111' }}>
                  What if I need custom features?
                </h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  Our Enterprise plan includes custom development. Contact us to discuss your specific needs.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: '#111' }}>
                  Do you offer nonprofit discounts?
                </h4>
                <p style={{ color: '#666', lineHeight: 1.6 }}>
                  All our pricing is already optimized for nonprofits. We believe in accessible technology.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16, color: '#111' }}>
              Still have questions?
            </h3>
            <p style={{ color: '#666', marginBottom: 24 }}>
              Our team is here to help you choose the right plan for your organization.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact">
                <button style={{
                  background: '#FFD600',
                  color: '#111',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  Contact Us
                </button>
              </Link>
              <Link to="/book-demo">
                <button style={{
                  background: '#f3f4f6',
                  color: '#111',
                  border: '1px solid #d1d5db',
                  padding: '12px 24px',
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 