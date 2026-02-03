const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running', timestamp: new Date().toISOString() });
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Backend API!', items: ['Item 1', 'Item 2', 'Item 3'], count: 3 });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body, message: 'Data received successfully' });
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
