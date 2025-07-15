'use client';
import restaurants from '@/data/restaurants';
import Carousel from '@/components/Carousel';
import RestaurantCard from '@/components/RestaurantCard';
import Navbar from "@/components/navbarbuyer";

const RestaurantsPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Discover Amazing Food in
            <span style={styles.heroLocation}> Noida</span>
          </h1>
          <p style={styles.heroSubtitle}>
            From local favorites to trending cuisines, explore the best restaurants in your area
          </p>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.titleIcon}>🔥</span>
            Top Restaurant Chains
          </h2>
          <p style={styles.sectionSubtitle}>Popular chains everyone loves</p>
        </div>
        <Carousel data={restaurants.slice(0, 15)} />
      </div>

      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.titleIcon}>🍽️</span>
            All Restaurants
          </h2>
          <p style={styles.sectionSubtitle}>Discover restaurants with online food delivery</p>
        </div>
        
        <div style={styles.grid}>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
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
  heroSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '4rem 2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '1rem',
    lineHeight: '1.2',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  },
  heroLocation: {
    background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '400',
    lineHeight: '1.6',
    margin: '0',
  },
  section: {
    padding: '4rem 2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  titleIcon: {
    fontSize: '2rem',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#64748b',
    margin: '0',
    fontWeight: '400',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    justifyItems: 'center',
    marginTop: '2rem',
  },
};

export default RestaurantsPage;