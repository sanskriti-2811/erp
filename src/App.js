
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import Products from './components/ProductMangement/Products';
import Orders from './components/OrderManagement/Orders';
import './App.css';

function App() {
  const [productsData, setProductsData] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: '10', stock: '20' },
    { id: 2, name: 'Product 2', category: 'Category B', price: '20', stock: '15' },
  ]);

  const [ordersData, setOrdersData] = useState([
    { id: 1, customerName: 'John Doe', orderDate: '2024-03-10', status: 'Pending', expectedDeliveryDate: '2024-03-15' },
    { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-12', status: 'Shipped', expectedDeliveryDate: '2024-03-17' },
  ]);

  const totalProducts = productsData.length;
  const totalOrders = ordersData.length;

  return (
    <Router>
      <div className="app-container">
        <AppBar position="static" className="header">
          <Toolbar>
            <Typography variant="h5" to="/" className="header-title">
              ERP System
            </Typography>
            <Button component={Link} to="/" color="inherit">Dashboard</Button>
            <Button component={Link} to="/products" color="inherit">Product Management</Button>
            <Button component={Link} to="/orders" color="inherit">Order Management</Button>
          </Toolbar>
        </AppBar>
         
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Dashboard totalProducts={totalProducts} totalOrders={totalOrders} />}
            />
            <Route
              path="/products"
              element={
                <Products
                  productsData={productsData}
                  setProductsData={setProductsData}
                  totalProducts={totalProducts}
                />
              }
            />
            <Route
              path="/orders"
              element={
                <Orders
                  ordersData={ordersData}
                  setOrdersData={setOrdersData}
                  totalOrders={totalOrders}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
