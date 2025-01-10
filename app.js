import React from 'react';
import PricingCard from './PricingCard';

const App = () => {
  const features = ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'];
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>The Right Plan for <span style={styles.highlight}>Your Business</span></h1>
        <p style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod in iure vero. Facilis magnam, sed officiis commodi labore odit.
        </p>
      </header>

      <PricingCard plan="Starter" price="Free" features={features} color="#ccc" />
      <PricingCard plan="Lorem Plus" price="$32.00" features={features} color="#a259ff" />
      <PricingCard plan="Lorem Pro" price="$50.00" features={features} color="#6c63ff" />
    </div>
  );
};
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '16px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '32px',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '16px',
  },
  highlight: {
    color: '#a259ff',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
  },
};
export default App;
