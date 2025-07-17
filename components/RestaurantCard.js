'use client';
import { useRouter } from "next/navigation";

const RestaurantCard = ({ restaurant }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/restaurants/${restaurant.url}`)}
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.borderColor = '#6366f1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = '#e2e8f0';
      }}
    >
      <div style={styles.imageContainer}>
        <img
          src={restaurant.image}
          alt={restaurant.name}
          style={styles.image}
        />
        <div style={styles.ratingBadge}>
          <span style={styles.star}>★</span>
          <span style={styles.rating}>{restaurant.rating}</span>
        </div>
      </div>
      
      <div style={styles.content}>
        <h4 style={styles.name}>{restaurant.name}</h4>
        <p style={styles.cuisine}>{restaurant.cuisine.join(' • ')}</p>
        
        <div style={styles.footer}>
          <div style={styles.deliveryInfo}>
            <span style={styles.deliveryTime}>25-30 min</span>
          </div>
          <div style={styles.actionButton}>
            <span style={styles.actionText}>Order Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '260px',
    cursor: 'pointer',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '180px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  ratingBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: '#10b981',
    color: '#ffffff',
    padding: '4px 8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.85rem',
    fontWeight: '600',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
  },
  star: {
    fontSize: '0.8rem',
  },
  rating: {
    fontSize: '0.85rem',
  },
  content: {
    padding: '1.5rem',
  },
  name: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 0.5rem 0',
    lineHeight: '1.3',
  },
  cuisine: {
    color: '#64748b',
    fontSize: '0.9rem',
    margin: '0 0 1.5rem 0',
    lineHeight: '1.4',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliveryInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  deliveryTime: {
    color: '#64748b',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#6366f1',
    color: '#ffffff',
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
  },
  actionText: {
    fontSize: '0.85rem',
  },
};

export default RestaurantCard;