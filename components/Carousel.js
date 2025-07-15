'use client';
import { useRef } from 'react';
import RestaurantCard from './RestaurantCard';

const Carousel = ({ data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.navigationWrapper}>
          <button 
            onClick={() => scroll('left')} 
            style={styles.navButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#6366f1'}
          >
            <span style={styles.navIcon}>‹</span>
          </button>
          <button 
            onClick={() => scroll('right')} 
            style={styles.navButton}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#4f46e5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#6366f1'}
          >
            <span style={styles.navIcon}>›</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        style={styles.carousel}
      >
        {data.map((item) => (
          <div key={item.id} style={styles.cardWrapper}>
            <RestaurantCard restaurant={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    margin: '2rem 0',
    border: '1px solid #f1f5f9',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: '2rem',
    position: 'relative',
  },
  navigationWrapper: {
    display: 'flex',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    padding: '8px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  navButton: {
    width: '44px',
    height: '44px',
    backgroundColor: '#6366f1',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  navIcon: {
    fontSize: '1.5rem',
    color: '#ffffff',
    fontWeight: '600',
    lineHeight: '1',
  },
  carousel: {
    display: 'flex',
    overflowX: 'auto',
    scrollBehavior: 'smooth',
    gap: '1.5rem',
    paddingBottom: '1rem',
    scrollbarWidth: 'thin',
    scrollbarColor: '#e2e8f0 transparent',
  },
  cardWrapper: {
    flex: '0 0 auto',
    width: '280px',
    transform: 'translateZ(0)',
  },
};

export default Carousel;