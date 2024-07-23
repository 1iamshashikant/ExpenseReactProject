// src/components/AdminPage.js
import React, { useState, useEffect } from 'react';
import './AdminPage.css';  // Import the CSS file

const AdminPage = () => {
  const [productID, setProductID] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    const newProduct = { id: productID, price: sellingPrice, name: productName };
    setProducts([...products, newProduct]);
    setProductID('');
    setSellingPrice('');
    setProductName('');
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const totalCost = products.reduce((total, product) => total + parseFloat(product.price), 0);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Product ID"
          value={productID}
          onChange={(e) => setProductID(e.target.value)}
        />
        <input
          type="text"
          placeholder="Selling Price"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="products">
        <h2>Products</h2>
        {products.map((product, index) => (
          <div className="product" key={index}>
            <span>ID: {product.id} - Name: {product.name} - Price: {product.price}</span>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="total-price">Total Value Worth Of Products Rs: {totalCost}</div>
    </div>
  );
};

export default AdminPage;
