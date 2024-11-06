import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>eCommerce Mock</h1>
        </header>

        <nav>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/checkout">Checkout</a>
        </nav>

        <Routes>
          {/* Routes now take individual Route elements */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} />
        </Routes>

        <footer>
          <p>&copy; 2024 eCommerce Mock</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
