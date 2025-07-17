'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BuyerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const mockUsers = {
    buyer: {
      email: 'buyer@gmail.com',
      password: 'buyer123',
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    setTimeout(() => {
      const user = mockUsers['buyer'];

      if (email === user.email && password === user.password) {
        localStorage.setItem(
          'user',
          JSON.stringify({ role: 'buyer', email, isLoggedIn: true })
        );
        router.push('/restaurants');
      } else {
        alert('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <div style={styles.header}>
          <div style={styles.iconContainer}>
            <span style={styles.icon}>🍽️</span>
          </div>
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Sign in to your buyer account</p>
        </div>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
              onFocus={(e) => e.target.style.borderColor = '#6366f1'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
              onFocus={(e) => e.target.style.borderColor = '#6366f1'}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <button 
            type="submit" 
            style={styles.button}
            disabled={isLoading}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#4f46e5';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.backgroundColor = '#6366f1';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {isLoading ? (
              <span style={styles.buttonContent}>
                <span style={styles.spinner}></span>
                Signing In...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>

      <div style={styles.backgroundDecoration}></div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundDecoration: {
    position: 'absolute',
    top: '-50%',
    right: '-50%',
    width: '100%',
    height: '200%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    opacity: 0.1,
    zIndex: 0,
  },
  loginCard: {
    width: '100%',
    maxWidth: '450px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '3rem',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e7eb',
    position: 'relative',
    zIndex: 1,
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    backgroundColor: '#f3f4f6',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    border: '1px solid #e5e7eb',
  },
  icon: {
    fontSize: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#6b7280',
    margin: '0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #d1d5db',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    color: '#1f2937',
  },
  button: {
    padding: '1rem',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
    marginTop: '1rem',
  },
  buttonContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid transparent',
    borderTop: '2px solid #ffffff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  footer: {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#6b7280',
    textAlign: 'center',
    margin: '0',
    lineHeight: '1.6',
  },
};

export default BuyerLogin;