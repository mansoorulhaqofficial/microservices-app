const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample users data
const users = [
  { id: 1, name: 'Mansoor', email: 'mansoor@postifycreative.com', role: 'Admin' },
  { id: 2, name: 'Faizan', email: 'faizan@postifycreative.com', role: 'Moderator' },
  { id: 3, name: 'Umair', email: 'umair@postifycreative.com', role: 'Moderator' },
  { id: 4, name: 'Ayyun', email: 'ayyun@postifycreative.com', role: 'User' },
  { id: 5, name: 'Moon', email: 'moon@postifycreative.com', role: 'User' }
];

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'user-service', timestamp: new Date().toISOString() });
});

// Get all users
app.get('/users', (req, res) => {
  res.json({
    service: 'user-service',
    version: '1.0.0',
    count: users.length,
    users: users
  });
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`User service running on port ${PORT}`);
  console.log(`Health check: http://0.0.0.0:${PORT}/health`);
});
