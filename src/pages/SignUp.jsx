import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const socialProviders = [
  { name: 'Google', key: 'google' },
  { name: 'Facebook', key: 'facebook' },
  { name: 'LinkedIn', key: 'linkedin' },
];

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: '',
    organizationSize: '',
    annualBudget: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            organization: formData.organization,
            role: formData.role
          }
        }
      });

      if (error) throw error;

      // Navigate to email verification page or dashboard
      navigate('/thank-you');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider) => {
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    setLoading(false);
    if (error) setError(error.message);
  };

  const nextStep = () => {
    if (step === 1 && (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword)) {
      setError('Please fill in all required fields');
      return;
    }
    if (step === 2 && (!formData.organization || !formData.role)) {
      setError('Please fill in all required fields');
      return;
    }
    setError('');
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
    setError('');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ display: 'flex', background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px #2221', maxWidth: 1000, width: '100%', overflow: 'hidden' }}>
        {/* Left: Branding */}
        <div style={{ background: '#111', color: '#fff', flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 32, lineHeight: 1.1, marginBottom: 32, textAlign: 'left', width: '100%' }}>
            <span style={{ display: 'block' }}>Join</span>
            <span style={{ display: 'block' }}>The Bionic</span>
            <span style={{ display: 'block' }}>Group</span>
          </div>
          <img src="/logo-primary.png" alt="Bionic Logo" style={{ width: 180, height: 180, objectFit: 'contain', borderRadius: 12, background: '#fff', padding: 8 }} />
          <p style={{ marginTop: 24, textAlign: 'center', color: '#ccc', lineHeight: 1.6 }}>
            Start your journey with The Nonprofit Operating System. You Empower. We Automate.
          </p>
        </div>

        {/* Right: Form */}
        <div style={{ flex: 1.2, minWidth: 320, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, color: '#222' }}>Create Account</h2>
          <p style={{ color: '#666', marginBottom: 32 }}>Join thousands of nonprofits transforming their operations with AI.</p>

          {/* Progress Steps */}
          <div style={{ display: 'flex', marginBottom: 32 }}>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ 
                width: 32, 
                height: 32, 
                borderRadius: '50%', 
                background: step >= 1 ? '#FFD600' : '#e5e7eb',
                color: step >= 1 ? '#111' : '#666',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 600,
                margin: '0 auto 8px'
              }}>
                1
              </div>
              <div style={{ fontSize: 12, color: '#666' }}>Account</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ 
                width: 32, 
                height: 32, 
                borderRadius: '50%', 
                background: step >= 2 ? '#FFD600' : '#e5e7eb',
                color: step >= 2 ? '#111' : '#666',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 600,
                margin: '0 auto 8px'
              }}>
                2
              </div>
              <div style={{ fontSize: 12, color: '#666' }}>Organization</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ 
                width: 32, 
                height: 32, 
                borderRadius: '50%', 
                background: step >= 3 ? '#FFD600' : '#e5e7eb',
                color: step >= 3 ? '#111' : '#666',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontWeight: 600,
                margin: '0 auto 8px'
              }}>
                3
              </div>
              <div style={{ fontSize: 12, color: '#666' }}>Complete</div>
            </div>
          </div>

          <form onSubmit={handleSignUp}>
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
                />
                <button 
                  type="button"
                  onClick={nextStep}
                  style={{ background: '#FFD600', color: '#222', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: 14, marginTop: 8, cursor: 'pointer' }}
                >
                  Next Step
                </button>
              </div>
            )}

            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization Name"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                  style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
                />
                <input
                  type="text"
                  name="role"
                  placeholder="Your Role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
                />
                <select
                  name="organizationSize"
                  value={formData.organizationSize}
                  onChange={handleInputChange}
                  style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16, background: '#fff' }}
                >
                  <option value="">Organization Size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
                <select
                  name="annualBudget"
                  value={formData.annualBudget}
                  onChange={handleInputChange}
                  style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16, background: '#fff' }}
                >
                  <option value="">Annual Budget</option>
                  <option value="under-100k">Under $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="over-5m">Over $5M</option>
                </select>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button 
                    type="button"
                    onClick={prevStep}
                    style={{ flex: 1, background: '#f3f4f6', color: '#111', border: '1px solid #d1d5db', padding: 14, borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
                  >
                    Back
                  </button>
                  <button 
                    type="button"
                    onClick={nextStep}
                    style={{ flex: 1, background: '#FFD600', color: '#222', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: 14, cursor: 'pointer' }}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#f8f9fa', padding: 20, borderRadius: 8, marginBottom: 16 }}>
                  <h4 style={{ fontWeight: 600, marginBottom: 12 }}>Review Your Information</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 14 }}>
                    <div><strong>Name:</strong> {formData.firstName} {formData.lastName}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    <div><strong>Organization:</strong> {formData.organization}</div>
                    <div><strong>Role:</strong> {formData.role}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <button 
                    type="button"
                    onClick={prevStep}
                    style={{ flex: 1, background: '#f3f4f6', color: '#111', border: '1px solid #d1d5db', padding: 14, borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    disabled={loading}
                    style={{ flex: 1, background: '#FFD600', color: '#222', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: 14, cursor: 'pointer' }}
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </div>
              </div>
            )}

            {error && <div style={{ color: 'red', marginTop: 16, textAlign: 'center' }}>{error}</div>}
          </form>

          <div style={{ margin: '32px 0', textAlign: 'center', color: '#888', fontWeight: 500 }}>or</div>
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 24 }}>
            {socialProviders.map(({ name, key }) => (
              <button
                key={key}
                onClick={() => handleSocial(key)}
                style={{ background: '#f5f5f5', color: '#222', border: '1px solid #ddd', borderRadius: 8, padding: '12px 24px', fontWeight: 600, fontSize: 16, minWidth: 120, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {name}
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center', color: '#888', fontSize: 15 }}>
            Already have an account? <a href="/login" style={{ color: '#2563eb', textDecoration: 'underline' }}>Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
} 