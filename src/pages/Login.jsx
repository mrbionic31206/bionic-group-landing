import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const socialProviders = [
  { name: 'Google', key: 'google' },
  { name: 'Facebook', key: 'facebook' },
  { name: 'LinkedIn', key: 'linkedin' },
];

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else navigate('/');
  };

  const handleSocial = async (provider) => {
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    setLoading(false);
    if (error) setError(error.message);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ display: 'flex', background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px #2221', maxWidth: 900, width: '100%', overflow: 'hidden' }}>
        {/* Left: Branding */}
        <div style={{ background: '#111', color: '#fff', flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
          <div style={{ fontWeight: 700, fontSize: 32, lineHeight: 1.1, marginBottom: 32, textAlign: 'left', width: '100%' }}>
            <span style={{ display: 'block' }}>The</span>
            <span style={{ display: 'block' }}>Bionic</span>
            <span style={{ display: 'block' }}>Group</span>
          </div>
          <img src="/logo-primary.png" alt="Bionic Logo" style={{ width: 180, height: 180, objectFit: 'contain', borderRadius: 12, background: '#fff', padding: 8 }} />
        </div>
        {/* Right: Form */}
        <div style={{ flex: 1.2, minWidth: 320, padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 32, color: '#222' }}>Log in</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
            />
            <input
              type="password"
              placeholder="**************"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{ padding: 14, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
            />
            <button type="submit" disabled={loading} style={{ background: '#FFD600', color: '#222', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: 14, marginTop: 8, cursor: 'pointer', transition: 'background 0.2s' }}>
              {loading ? 'Logging in...' : 'Log in'}
            </button>
            {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
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
            Don't have an account? <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
} 