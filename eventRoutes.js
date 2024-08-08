const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// Create Event
router.post('/events', async (req, res) => {
  const event = new Event(req.body);
  try {
    await event.save();
    res.status(201).send(event);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read Events
router.get('/events', async (req, res) => {
  const events = await Event.find({});
  res.send(events);
});

// Update Event
router.patch('/events/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(event);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Event
router.delete('/events/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    res.send(event);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
