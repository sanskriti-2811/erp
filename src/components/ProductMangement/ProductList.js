import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ProductList({ products, onDelete, onEdit }) {
  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          <ListItemText
            primary={product.name}
            secondary={`Category: ${product.category} | Price: $${product.price} | Stock: ${product.stock}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit" onClick={() => onEdit(product)}>
              <EditIcon style={{ color: 'green' }} />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(product.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default ProductList;
