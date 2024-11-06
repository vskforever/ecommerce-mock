 // src/pages/CheckoutPage.js

import React from 'react';
import MapComponent from '../components/MapComponent';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    // Redirect to payment success page
    navigate('/payment-success');
  };

  const handlePaymentFailure = () => {
    // Redirect to payment failure page
    navigate('/payment-failure');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {/* Map Component */}
      <MapComponent />
      <div>
        <h2>Order Summary</h2>
        <p>Product details will be shown here...</p>
        {/* Add logic to display order details here */}
      </div>
      <div>
        <button onClick={handlePaymentSuccess}>Pay Now</button>
        <button onClick={handlePaymentFailure}>Cancel</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
