import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function OrderList({ orders, onDelete }) {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <List>
        {orders.map((order) => (
          <ListItem key={order.id} style={{ marginBottom: '10px' }}>
            <ListItemText
              primary={`Order ID: ${order.id}`}
              secondary={`Customer: ${order.customerName} - Status: ${order.status}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onDelete(order.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default OrderList;
