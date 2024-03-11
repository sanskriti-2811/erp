import React from 'react';
import { Typography, Grid } from '@mui/material';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function Products({ productsData, setProductsData, totalProducts }) {
  const addProduct = (product) => {
    setProductsData([...productsData, { ...product, id: productsData.length + 1 }]);
  };

  const deleteProduct = (id) => {
    setProductsData(productsData.filter((product) => product.id !== id));
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Product Management
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Products: {totalProducts}
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
            <Typography variant="h5" style={{ marginBottom: '20px' }}>Add New Product</Typography>
            <ProductForm onSubmit={addProduct} />
          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
            <Typography variant="h5" style={{ marginBottom: '20px' }}>Product List</Typography>
            <ProductList products={productsData} onDelete={deleteProduct} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
