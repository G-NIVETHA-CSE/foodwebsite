'use client';
import restaurants from '@/data/restaurants';
import menu from '@/data/menu';
import Navbar from '@/components/navbarseller';

const Page = ({ params }) => {
  const resid = params.resid;
  const restaurant = restaurants.find(r => r.url === resid);
  const items = restaurant ? menu[restaurant.id] : [];

  return (
    <div style={styles.container}>
      <Navbar />
      
      <div style={styles.content}>
        <div style={styles.breadcrumb}>
          <span style={styles.breadcrumbItem}>Home</span>
          <span style={styles.breadcrumbSeparator}>•</span>
          <span style={styles.breadcrumbCurrent}>{restaurant.name}</span>
        </div>

        <div style={styles.header}>
          <h1 style={styles.title}>{restaurant.name}</h1>
          <div style={styles.headerDecoration}></div>
        </div>

        <div style={styles.heroSection}>
          <div style={styles.heroContent}>
            <div style={styles.heroOverlay}></div>
          </div>
        </div>

        <div style={styles.menuSection}>
          <h2 style={styles.menuTitle}>Our Menu</h2>
          <div style={styles.menuGrid}>
            {items.map((item, index) => (
              <div key={index} style={{
                ...styles.menuItem,
                animationDelay: `${index * 0.1}s`
              }}>
                <div style={styles.menuItemContent}>
                  <div style={styles.menuInfo}>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <div style={styles.priceContainer}>
                      <span style={styles.price}>₹{item.price}</span>
                    </div>
                    <p style={styles.description}>{item.desc}</p>
                  </div>
                  <div style={styles.imageContainer}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.itemImage}
                    />
                    <div style={styles.imageOverlay}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  content: {
    paddingTop: '120px',
    padding: '120px 2rem 3rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
    fontSize: '0.9rem',
  },
  breadcrumbItem: {
    color: '#6b7280',
    transition: 'color 0.3s ease',
  },
  breadcrumbSeparator: {
    color: '#d1d5db',
  },
  breadcrumbCurrent: {
    color: '#667eea',
    fontWeight: '500',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    position: 'relative',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem',
    letterSpacing: '-0.025em',
  },
  headerDecoration: {
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    margin: '0 auto',
    borderRadius: '2px',
    animation: 'pulse 2s ease-in-out infinite',
  },
  heroSection: {
    marginBottom: '4rem',
  },
  heroContent: {
    height: '200px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    borderRadius: '20px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    animation: 'shimmer 3s ease-in-out infinite',
  },
  menuSection: {
    marginTop: '4rem',
  },
  menuTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: '3rem',
    position: 'relative',
  },
  menuGrid: {
    display: 'grid',
    gap: '2rem',
  },
  menuItem: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    animation: 'fadeInUp 0.6s ease-out backwards',
  },
  menuItemContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '2rem',
    gap: '2rem',
  },
  menuInfo: {
    flex: '1',
    maxWidth: '60%',
  },
  itemName: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1rem',
    lineHeight: '1.3',
  },
  priceContainer: {
    marginBottom: '1rem',
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  description: {
    fontSize: '1rem',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
  },
  imageContainer: {
    position: 'relative',
    flexShrink: 0,
    borderRadius: '12px',
    overflow: 'hidden',
  },
  itemImage: {
    width: '150px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '12px',
    transition: 'transform 0.3s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(249, 147, 251, 0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    borderRadius: '12px',
  },
};

// Add enhanced animations and hover effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(1.1);
    }
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .menuItem:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .menuItem:hover img {
    transform: scale(1.05);
  }
  
  .menuItem:hover .imageOverlay {
    opacity: 1;
  }
  
  .breadcrumbItem:hover {
    color: #667eea;
  }
  
  .heroContent {
    position: relative;
    overflow: hidden;
  }
  
  .heroContent::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: rotate 4s linear infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}

export default Page;