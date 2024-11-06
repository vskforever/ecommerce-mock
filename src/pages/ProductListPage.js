import React from "react";
import { Link } from "react-router-dom";

const mockProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "A nice product.",
    price: "$10.00",
    imageUrl: "https://via.placeholder.com/250",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Another cool product.",
    price: "$20.00",
    imageUrl: "https://via.placeholder.com/250",
  },
  {
    id: 3,
    name: "Product 3",
    description: "A third great product.",
    price: "$30.00",
    imageUrl: "https://via.placeholder.com/250",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Best product ever.",
    price: "$40.00",
    imageUrl: "https://via.placeholder.com/250",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Product that solves problems.",
    price: "$50.00",
    imageUrl: "https://via.placeholder.com/250",
  },
];

function ProductListPage() {
  return (
    <div>
      <h2>Product List</h2>
      <div className="product-grid">
        {mockProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
