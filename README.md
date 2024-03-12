## ERP System

This project is an ERP (Enterprise Resource Planning) system developed using React.js and Material-UI for the front end. It includes features for managing products and orders.

## Live Demo
Check out the live demo of the project: Markup :  [ERP System Demo](https://main--playful-buttercream-d8ec5a.netlify.app/) 
## Features
# Product Management:

Add new products with details such as name, category, price, and stock.
Edit existing products.
Delete products from the list.
# Order Management:

Add new orders with customer name, status (Pending or Shipped), and expected delivery date.
Delete orders.
View orders on a calendar.
Getting Started
To get a local copy up and running follow these simple steps.

## Prerequisites
## Node.js & npm
Make sure you have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/sanskriti-2811/erp.git
2. cd erp
3. npm install
4. npm start

This code will provide clear instructions for installing Node.js, cloning the repository, installing dependencies, and running the development server.

## Project Structure

### Product Management

- **ProductForm.js**: This component is responsible for adding and editing products. It provides a form for users to input product details such as name, category, price, and stock.
  
- **ProductList.js**: Displays a list of products. Each product is shown with its name, category, price, and stock. Users can edit or delete products from this list.
  
- **Products.js**: Main component for product management. It imports `ProductForm.js` and `ProductList.js` to manage the product-related functionalities.

### Order Management

- **OrderForm.js**: Allows users to add and edit orders. The form includes fields for customer name, order status (Pending or Shipped), and expected delivery date.
  
- **OrderList.js**: Displays a list of orders. Each order is shown with its ID, customer name, and status. Users can delete orders from this list.
  
- **OrdersCalendar.js**: Displays orders on a calendar. Orders are color-coded based on their status for easy visualization.
  
- **Orders.js**: Main component for order management. It includes `OrderForm.js`, `OrderList.js`, and `OrdersCalendar.js` to manage order-related functionalities.

### Styles

- **ProductManagement.css**: Contains CSS styles specific to the product management components.
  
- **OrderManagement.css**: Contains CSS styles specific to the order management components.

### Other Files

- **App.js**: The main component of the application where other components are rendered.
  
- **index.js**: Entry point of the application, responsible for rendering the `App.js` component.


## Technologies Used
- **React.js**
- **Material-UI**
## Contributing
Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements
Thanks to the React.js and Material-UI teams for providing excellent libraries.
Icon made by Freepik from www.flaticon.com.
