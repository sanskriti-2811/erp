import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, MenuItem } from '@mui/material'; // Import MenuItem

function OrderForm({ onSubmit }) {
  const [customerName, setCustomerName] = useState('');
  const [status, setStatus] = useState('Pending');
  const [expectedDeliveryDate, setExpectedDeliveryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ customerName, status, expectedDeliveryDate });
    setCustomerName('');
    setStatus('Pending');
    setExpectedDeliveryDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Shipped">Shipped</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="date"
            label=""
            value={expectedDeliveryDate}
            onChange={(e) => setExpectedDeliveryDate(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Order
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default OrderForm;
