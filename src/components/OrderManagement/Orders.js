import React, { useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import OrderList from './OrderList';
import OrderForm from './OrderForm';
import OrdersCalendar from '../OrdersCalendar';
import '../OrderManagement/Order.css'; // Import the CSS file

function Orders({ ordersData, setOrdersData, totalOrders }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const addOrder = (order) => {
    setOrdersData([...ordersData, { ...order, id: ordersData.length + 1 }]);
    if (order.status === 'Pending') {
      setSelectedDate(new Date(order.expectedDeliveryDate));
    }
  };

  const deleteOrder = (id) => {
    setOrdersData(ordersData.filter((order) => order.id !== id));
  };

  return (
    <div className="orders-container">
      <Typography variant="h4" align='center' gutterBottom>
        Order Management
      </Typography>
      <Typography variant="h6"  align='center' gutterBottom>
        Total Orders: {totalOrders}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="order-form">
            <Typography variant="h5" gutterBottom>
              
            </Typography>
            <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
              <OrderForm onSubmit={addOrder} />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} className="order-calendar">
            <Typography variant="h5" gutterBottom>
              Order Calendar
            </Typography>
            <OrdersCalendar ordersData={ordersData} selectedDate={selectedDate} />
          </Paper>
        </Grid>
      </Grid>

      <Paper elevation={3} className="order-list">
        <Typography variant="h5" gutterBottom>
          Order List
        </Typography>
        <OrderList orders={ordersData} onDelete={deleteOrder} />
      </Paper>
    </div>
  );
}

export default Orders;
