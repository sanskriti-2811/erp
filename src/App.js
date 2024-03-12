import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Responsive Header */}
        <AppBar position="static" className="header">
          <Toolbar>
            <Typography variant="h5" component={Link} to="/" className="header-title">
              ERP System
            </Typography>
            {/* Hamburger Menu Icon for Mobile */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className="menu-icon"
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </IconButton>
            {/* Regular Buttons for Desktop */}
            <div className="desktop-buttons">
              <Button component={Link} to="/" color="inherit">Dashboard</Button>
              <Button component={Link} to="/products" color="inherit">Product Management</Button>
              <Button component={Link} to="/orders" color="inherit">Order Management</Button>
            </div>
          </Toolbar>
        </AppBar>
        
        {/* Mobile Menu */}
        <Drawer
          anchor="left"
          open={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          className="mobile-menu"
          sx={{ display: { sm: 'none', xs: 'block' } }}
        >
          <List>
            <ListItem button component={Link} to="/" onClick={toggleMobileMenu}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/products" onClick={toggleMobileMenu}>
              <ListItemText primary="Product Management" />
            </ListItem>
            <ListItem button component={Link} to="/orders" onClick={toggleMobileMenu}>
              <ListItemText primary="Order Management" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>

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
