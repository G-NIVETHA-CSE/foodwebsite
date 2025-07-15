'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SellerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const mockUsers = {
    seller: {
      email: 'seller@gmail.com',
      password: 'seller123',
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    setTimeout(() => {
      const user = mockUsers['seller'];

      if (email === user.email && password === user.password) {
        localStorage.setItem(
          'user',
          JSON.stringify({ role: 'seller', email, isLoggedIn: true })
        );
        router.push('/restaurant');
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
          <h2 style={styles.title}>Seller Login</h2>
          <p style={styles.subtitle}>Welcome back! Please sign in to your account</p>
        </div>
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={isLoading ? {...styles.button, ...styles.buttonLoading} : styles.button}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: '2rem',
  },
  loginCard: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    animation: 'slideUp 0.6s ease-out',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2.5rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '0.5rem',
    letterSpacing: '-0.025em',
  },
  subtitle: {
    fontSize: '0.95rem',
    color: '#6b7280',
    margin: 0,
    lineHeight: '1.5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '1rem 1.25rem',
    fontSize: '1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s ease',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    ':focus': {
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    },
  },
  button: {
    width: '100%',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(102, 126, 234, 0.4)',
    },
    ':active': {
      transform: 'translateY(0)',
    },
  },
  buttonLoading: {
    opacity: 0.8,
    cursor: 'not-allowed',
    transform: 'none',
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e5e7eb',
  },
  footerText: {
    fontSize: '0.85rem',
    color: '#9ca3af',
    margin: 0,
    padding: '0.5rem',
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
  },
};
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  input:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
  }
  
  button:hover:not(:disabled) {
    transform: translateY(-2px) !important;
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4) !important;
  }
  
  button:active:not(:disabled) {
    transform: translateY(0) !important;
  }
`;

if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}

export default SellerLogin;