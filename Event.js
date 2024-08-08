const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  description: String,
  location: String,
});

module.exports = mongoose.model('Event', eventSchema);
