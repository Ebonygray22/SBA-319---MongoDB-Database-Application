const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/eventManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Failed to connect to MongoDB', err);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api', eventRoutes);
app.use('/api', userRoutes);
app.use('/api', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
