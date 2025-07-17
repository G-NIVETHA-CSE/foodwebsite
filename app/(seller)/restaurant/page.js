'use client';
import { useState } from 'react';
import restaurants from '@/data/restaurants';
import Carousel from '@/components/Carousel';
import RestaurantCard from '@/components/RestaurantCard';
import Navbar from '@/components/navbarseller';

const RestaurantsPage = () => {
  const [displayedRestaurants, setDisplayedRestaurants] = useState(restaurants.slice(0, 8));
  const [selectedId, setSelectedId] = useState(restaurants[0].id);
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');

  const handleAdd = () => {
    const toAdd = restaurants.find(r => r.id === selectedId);
    if (toAdd && !displayedRestaurants.find(r => r.id === selectedId)) {
      setDisplayedRestaurants([...displayedRestaurants, toAdd]);
    }
  };

  const handleRemove = (id) => {
    setDisplayedRestaurants(displayedRestaurants.filter(r => r.id !== id));
  };

  const handleEdit = (restaurant) => {
    setEditingId(restaurant.id);
    setEditedName(restaurant.name);
  };

  const handleSave = (id) => {
    setDisplayedRestaurants(displayedRestaurants.map(r => (
      r.id === id ? { ...r, name: editedName } : r
    )));
    setEditingId(null);
    setEditedName('');
  };

  return (
    <div style={styles.container}>
      <Navbar />

      <div style={styles.content}>
        <div style={styles.section}>
          <h2 style={styles.heading}>Top restaurant chains in Noida</h2>
          <div style={styles.carouselWrapper}>
            <Carousel data={displayedRestaurants} />
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>
            Restaurants with online food delivery in Noida
          </h2>

          <div style={styles.controls}>
            <div style={styles.controlsInner}>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(parseInt(e.target.value))}
                style={styles.select}
              >
                {restaurants.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
              <button onClick={handleAdd} style={styles.addButton}>
                <span style={styles.buttonIcon}>+</span>
                Add Restaurant
              </button>
            </div>
          </div>

          <div style={styles.grid}>
            {displayedRestaurants.map((restaurant, index) => (
              <div 
                key={restaurant.id} 
                style={{
                  ...styles.cardContainer,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div style={styles.card}>
                  <div style={styles.buttonOverlay}>
                    {editingId === restaurant.id ? (
                      <button 
                        onClick={() => handleSave(restaurant.id)} 
                        style={styles.saveButton}
                      >
                        ✓ Save
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleEdit(restaurant)} 
                        style={styles.editButton}
                      >
                        ✎ Edit
                      </button>
                    )}
                    <button 
                      onClick={() => handleRemove(restaurant.id)} 
                      style={styles.removeButton}
                    >
                      ✕ Remove
                    </button>
                  </div>

                  <div style={styles.imageContainer}>
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name} 
                      style={styles.image} 
                    />
                    <div style={styles.imageOverlay}></div>
                  </div>

                  <div style={styles.cardContent}>
                    {editingId === restaurant.id ? (
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        style={styles.input}
                        autoFocus
                      />
                    ) : (
                      <h3 style={styles.name}>{restaurant.name}</h3>
                    )}

                    <div style={styles.info}>
                      <div style={styles.infoItem}>
                        <span style={styles.infoIcon}>🍽️</span>
                        <span>{restaurant.cuisine}</span>
                      </div>
                      <div style={styles.infoItem}>
                        <span style={styles.infoIcon}>📍</span>
                        <span>{restaurant.location}</span>
                      </div>
                      <div style={styles.ratingContainer}>
                        <span style={styles.ratingIcon}>⭐</span>
                        <span style={styles.rating}>{restaurant.rating}</span>
                      </div>
                    </div>
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
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  content: {
    paddingTop: '100px',
    padding: '100px 2rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '4rem',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '2rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.025em',
  },
  carouselWrapper: {
    marginBottom: '2rem',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '3rem',
  },
  controlsInner: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'white',
    padding: '1rem 2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  select: {
    padding: '0.75rem 1rem',
    fontSize: '1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    outline: 'none',
    transition: 'all 0.3s ease',
    minWidth: '200px',
    cursor: 'pointer',
    ':focus': {
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    },
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 20px rgba(16, 185, 129, 0.4)',
    },
  },
  buttonIcon: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  cardContainer: {
    animation: 'fadeInUp 0.6s ease-out backwards',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    ':hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    },
  },
  buttonOverlay: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    zIndex: 2,
  },
  removeButton: {
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '0.5rem 0.75rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.4)',
    },
  },
  editButton: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '0.5rem 0.75rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
    },
  },
  saveButton: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '0.5rem 0.75rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
    },
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  cardContent: {
    padding: '1.5rem',
  },
  name: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1rem',
    lineHeight: '1.3',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
    color: '#6b7280',
  },
  infoIcon: {
    fontSize: '1rem',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  ratingIcon: {
    fontSize: '1.2rem',
  },
  rating: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#f59e0b',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #e5e7eb',
    outline: 'none',
    transition: 'all 0.3s ease',
    marginBottom: '1rem',
    boxSizing: 'border-box',
    ':focus': {
      borderColor: '#667eea',
      boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    },
  },
};

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
  
  .card:hover .image {
    transform: scale(1.05);
  }
  
  .card:hover .imageOverlay {
    opacity: 1;
  }
  
  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  
  select:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
  }
  
  button:hover {
    transform: translateY(-2px);
  }
  
  .removeButton:hover,
  .editButton:hover,
  .saveButton:hover {
    transform: scale(1.05);
  }
`;

if (typeof document !== 'undefined') {
  document.head.appendChild(styleSheet);
}

export default RestaurantsPage;
