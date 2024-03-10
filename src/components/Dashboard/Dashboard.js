import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import '../Dashboard/Dashboard.css'

function Dashboard({ totalProducts, totalOrders }) {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                Total Products
              </Typography>
              <Typography variant="h3" align="center">
                {totalProducts}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
                Total Orders
              </Typography>
              <Typography variant="h3" align="center">
                {totalOrders}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
