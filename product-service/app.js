const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample products data
const products = [
  { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299.99, stock: 25 },
  { id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 29.99, stock: 150 },
  { id: 3, name: 'Desk Chair', category: 'Furniture', price: 199.99, stock: 45 },
  { id: 4, name: 'Coffee Maker', category: 'Home Appliances', price: 89.99, stock: 75 },
  { id: 5, name: 'Fitness Tracker', category: 'Wearables', price: 79.99, stock: 200 }
];

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'product-service', timestamp: new Date().toISOString() });
});

// Get all products
app.get('/products', (req, res) => {
  res.json({
    service: 'product-service',
    version: '1.0.0',
    count: products.length,
    products: products
  });
});

// Get product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Product service running on port ${PORT}`);
  console.log(`Health check: http://0.0.0.0:${PORT}/health`);
});
