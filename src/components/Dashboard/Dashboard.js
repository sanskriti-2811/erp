import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import '../Dashboard/Dashboard.css';

function Dashboard({ totalProducts, totalOrders }) {
  return (
    <div className="dashboard-container">
      <Typography variant="h4" className="dashboard-title" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3} justifyContent="center" className="grid-container">
        <Grid item xs={12} sm={6} md={3}>
          <Card className="paper-container" elevation={3}>
            <CardContent>
              <Typography variant="h6" className="total-text" align="center" gutterBottom>
                Total Products
              </Typography>
              <Typography variant="h3" className="total-number" align="center">
                {totalProducts}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="paper-container" elevation={3}>
            <CardContent>
              <Typography variant="h6" className="total-text" align="center" gutterBottom>
                Total Orders
              </Typography>
              <Typography variant="h3" className="total-number" align="center">
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
