'use client';
import Link from 'next/link';

const GuestNavbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.leftSection}>
        <div style={styles.logo}>ShopEase</div>
        <ul style={styles.navList}>
          <li><Link href="/" style={styles.link}>Home</Link></li>
          <li><Link href="/products" style={styles.link}>Shop</Link></li>
          <li><Link href="/about" style={styles.link}>About</Link></li>
          <li><Link href="/contact" style={styles.link}>Contact</Link></li>
        </ul>
      </div>
      <div style={styles.authButtons}>
        <Link href="/login" style={styles.button}>Login</Link>
        <Link href="/register" style={{ ...styles.button, backgroundColor: '#333', color: '#fff' }}>Register</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#ffffff',
    borderBottom: '1px solid #eaeaea',
    flexWrap: 'wrap',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#222',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
    padding: 0,
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    fontSize: '1rem',
  },
  authButtons: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  button: {
    padding: '0.5rem 1rem',
    border: '1px solid #333',
    borderRadius: '4px',
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
};

export default GuestNavbar;
