const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: String,
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Comment', commentSchema);
