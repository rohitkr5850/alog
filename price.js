import React from 'react';

const PricingCard = ({ plan, price, features, color }) => {
  return (
    <div style={{ ...styles.card, borderColor: color }}>
      <h3 style={styles.plan}>{plan}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index} style={styles.feature}>
            ✅ {feature}
          </li>
        ))}
      </ul>
      <h2 style={styles.price}>{price}</h2>
      <button style={{ ...styles.button, backgroundColor: color }}>Get Started</button>
    </div>
  );
};

const styles = {
  card: {
    border: '2px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    textAlign: 'center',
  },
  plan: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  feature: {
    margin: '8px 0',
  },
  price: {
    fontSize: '2rem',
    margin: '16px 0',
  },
  button: {
    padding: '8px 16px',
    fontSize: '1rem',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default PricingCard;
