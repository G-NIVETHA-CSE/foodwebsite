'use client';
import restaurants from '@/data/restaurants';
import menu from '@/data/menu';
import Navbar from "@/components/navbarbuyer";
import Link from 'next/link';

const Page = ({ params }) => {
  const resid = params.resid;
  const restaurant = restaurants.find(r => r.url === resid);
  const items = restaurant ? menu[restaurant.id] : [];

  return (
    <div style={styles.container}>
      <Navbar />
      
      <div style={styles.breadcrumb}>
        <Link href="/restaurants" style={styles.breadcrumbLink}>
          Home
        </Link>
        <span style={styles.breadcrumbSeparator}>›</span>
        <span style={styles.breadcrumbCurrent}>{restaurant?.name}</span>
      </div>

      <div style={styles.restaurantHeader}>
        <div style={styles.restaurantInfo}>
          <h1 style={styles.restaurantName}>{restaurant?.name}</h1>
          <div style={styles.restaurantMeta}>
            <span style={styles.cuisine}>{restaurant?.cuisine.join(' • ')}</span>
            <div style={styles.rating}>
              <span style={styles.star}>★</span>
              <span style={styles.ratingText}>{restaurant?.rating}</span>
            </div>
          </div>
          <div style={styles.deliveryInfo}>
            <span style={styles.deliveryTime}>🕒 25-30 min</span>
            <span style={styles.deliveryFee}>🚚 Free delivery</span>
          </div>
        </div>
      </div>

      <div style={styles.menuSection}>
        <div style={styles.menuHeader}>
          <h2 style={styles.menuTitle}>
            <span style={styles.menuIcon}>🍽️</span>
            Recommended ({items.length})
          </h2>
          <p style={styles.menuSubtitle}>Our chef special picks for you</p>
        </div>

        <div style={styles.menuGrid}>
          {items.map((item, index) => (
            <div 
              key={index} 
              style={styles.menuItem}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={styles.menuItemContent}>
                <div style={styles.menuItemInfo}>
                  <h3 style={styles.menuItemName}>{item.name}</h3>
                  <p style={styles.menuItemPrice}>₹{item.price}</p>
                  <p style={styles.menuItemDesc}>{item.desc}</p>
                </div>
                
                <div style={styles.menuItemImageContainer}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.menuItemImage}
                  />
                  <button 
                    style={styles.addButton}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#4f46e5';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#6366f1';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    <span style={styles.addButtonText}>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  breadcrumb: {
    padding: '1rem 2rem',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  breadcrumbLink: {
    color: '#6366f1',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  breadcrumbSeparator: {
    color: '#94a3b8',
    fontSize: '0.9rem',
  },
  breadcrumbCurrent: {
    color: '#64748b',
    fontSize: '0.9rem',
  },
  restaurantHeader: {
    padding: '3rem 2rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
  },
  restaurantInfo: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  restaurantName: {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '1rem',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },
  restaurantMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '1rem',
  },
  cuisine: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '0.5rem 1rem',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
  },
  star: {
    color: '#fbbf24',
    fontSize: '1.2rem',
  },
  ratingText: {
    fontSize: '1rem',
    fontWeight: '600',
  },
  deliveryInfo: {
    display: 'flex',
    gap: '2rem',
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  deliveryTime: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  deliveryFee: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  menuSection: {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  menuHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  menuTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  menuIcon: {
    fontSize: '2rem',
  },
  menuSubtitle: {
    fontSize: '1.1rem',
    color: '#64748b',
    margin: '0',
  },
  menuGrid: {
    display: 'grid',
    gap: '2rem',
  },
  menuItem: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  menuItemContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
  },
  menuItemInfo: {
    flex: 1,
  },
  menuItemName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.5rem',
  },
  menuItemPrice: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#10b981',
    marginBottom: '1rem',
  },
  menuItemDesc: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    margin: '0',
  },
  menuItemImageContainer: {
    position: 'relative',
    flexShrink: 0,
  },
  menuItemImage: {
    width: '180px',
    height: '140px',
    borderRadius: '12px',
    objectFit: 'cover',
    border: '1px solid #e2e8f0',
  },
  addButton: {
    position: 'absolute',
    bottom: '-10px',
    right: '-10px',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    border: 'none',
    borderRadius: '12px',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
  },
  addButtonText: {
    fontSize: '1rem',
  },
};

export default Page;