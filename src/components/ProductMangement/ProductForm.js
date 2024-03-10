import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';

function ProductForm({ onSubmit, selectedProduct, setSelectedProduct }) {
  const [formData, setFormData] = useState({ name: '', category: '', price: '', stock: '' });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name,
        category: selectedProduct.category,
        price: selectedProduct.price,
        stock: selectedProduct.stock
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', category: '', price: '', stock: '' });
    setSelectedProduct(null); // Clear selectedProduct after form submission
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        {selectedProduct ? 'Edit Product' : 'Add New Product'}
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Product Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="category"
                label="Category"
                value={formData.category}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="price"
                label="Price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="stock"
                label="Stock Quantity"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" fullWidth>
                {selectedProduct ? 'Update Product' : 'Add Product'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default ProductForm;
