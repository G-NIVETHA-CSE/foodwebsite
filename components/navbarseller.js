'use client';
import Link from 'next/link';

const BuyerNavbar = () => {
  return (
      <nav style={styles.nav}>
          <div style={styles.logo}>
            <div style={styles.logoInner}>
               <strong style={styles.logoText}>FreshBite</strong>
               <span style={styles.logoSubtext}>(Seller)</span>
              </div>
          </div>
          <div style={styles.navLinks}>
            <Link href="/restaurants" style={styles.link}>
              <span style={styles.linkText}>Home</span>
            </Link>
            <Link href="#" style={styles.link}>
              <span style={styles.linkText}>Help</span>
            </Link>
            <Link href="#" style={styles.link}>
              <span style={styles.linkText}>Search</span>
            </Link>
            <Link href="#" style={styles.link}>
              <span style={styles.linkText}>Cart</span>
            </Link>
          </div>
        </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    backgroundSize: '200% 200%',
    animation: 'gradientShift 8s ease infinite',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoInner: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffffff',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '-0.025em',
  },
  logoSubtext: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    position: 'relative',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },
  linkText: {
    position: 'relative',
    zIndex: 2,
  }
};

export default BuyerNavbar;