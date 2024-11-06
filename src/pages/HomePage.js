 // src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the E-Commerce Site</h1>
      <Link to="/products">Go to Product List</Link>
    </div>
  );
};

export default HomePage;
