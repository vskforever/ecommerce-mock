// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our eCommerce Store</h1>
      <p style={styles.description}>
        Explore a wide range of products, from electronics to home goods, clothing, and more. 
        Shop now and enjoy exclusive discounts, fast delivery, and secure payments.
      </p>
      
      <div style={styles.buttonContainer}>
        <Link to="/products" style={styles.button}>Explore Products</Link>
        <Link to="/about" style={{ ...styles.button, backgroundColor: '#f5a623' }}>About Us</Link>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2024 eCommerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Basic styles for the page
const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.5',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  footer: {
    marginTop: '40px',
    fontSize: '14px',
    color: '#777',
  },
};

// Export the Home component
export default Home;
