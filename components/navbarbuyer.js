'use client';
import Link from 'next/link';

const BuyerNavbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <strong style={styles.shopName}>FreshBite (Buyer)</strong>
      </div>
      <div style={styles.navLinks}>
        <Link href="/restaurants" style={styles.link}>Home</Link>
        <Link href="#" style={styles.link}>Help</Link>
        <Link href="#" style={styles.link}>Search</Link>
        <Link href="#" style={styles.cartButton}>Cart</Link>
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
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  shopName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#333',
    letterSpacing: '0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    fontWeight: '500',
  },
  link: {
    textDecoration: 'none',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontSize: '15px',
    padding: '8px 14px',
    borderRadius: '20px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  cartButton: {
    textDecoration: 'none',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontSize: '15px',
    padding: '8px 14px',
    borderRadius: '20px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  }
};

export default BuyerNavbar;
