import React from 'react';
import { TextField, Button, Typography, Grid, MenuItem } from '@mui/material';

function OrderForm({ onSubmit }) {
  const [customerName, setCustomerName] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [expectedDeliveryDate, setExpectedDeliveryDate] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      customerName,
      status,
      expectedDeliveryDate,
    };
    onSubmit(newOrder);
    setCustomerName('');
    setStatus('');
    setExpectedDeliveryDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Add New Order
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            required
            fullWidth
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type="date"
            label="Expected Delivery Date"
            value={expectedDeliveryDate}
            onChange={(e) => setExpectedDeliveryDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Add Order
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default OrderForm;
