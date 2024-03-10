import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './OrdersCalendar.css';

const OrdersCalendar = ({ ordersData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [orderDates, setOrderDates] = useState([]);

  useEffect(() => {
    // Get unique order dates from ordersData
    const dates = [...new Set(ordersData.map(order => order.expectedDeliveryDate))];
    setOrderDates(dates);
  }, [ordersData]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getOrdersForDate = (date) => {
    return ordersData.filter(order => {
      return order.expectedDeliveryDate === date.toDateString();
    });
  };

  const getFilteredOrders = (status) => {
    return ordersData.filter(order => order.status === status);
  };

  const isDateHighlighted = (date) => {
    return orderDates.some(orderDate => orderDate === date.toDateString());
  };

  return (
    <div className="orders-calendar-container">
      <Calendar
        onChange={handleDateClick}
        value={selectedDate}
        tileClassName={({ date }) => {
          if (isDateHighlighted(date)) {
            return 'highlighted-date';
          }
          return '';
        }}
        tileContent={({ date }) => {
          const pendingOrders = getFilteredOrders('Pending');
          const shippedOrders = getFilteredOrders('Shipped');

          const pendingCount = pendingOrders.filter(order => {
            return new Date(order.expectedDeliveryDate).toDateString() === date.toDateString();
          }).length;

          const shippedCount = shippedOrders.filter(order => {
            return new Date(order.expectedDeliveryDate).toDateString() === date.toDateString();
          }).length;

          return (
            <div className="calendar-tile-content">
              {pendingCount > 0 && <div className="pending">{pendingCount} Pending</div>}
              {shippedCount > 0 && <div className="shipped">{shippedCount} Shipped</div>}
            </div>
          );
        }}
      />

      {selectedDate && (
        <div className="selected-date-orders">
          <h3>Orders for {selectedDate.toDateString()}</h3>
          <ul>
            {getOrdersForDate(selectedDate).map(order => (
              <li key={order.id}>
                <strong>Order ID:</strong> {order.id}<br />
                <strong>Customer Name:</strong> {order.customerName}<br />
                <strong>Order Date:</strong> {order.orderDate}<br />
                <strong>Status:</strong> {order.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrdersCalendar;
