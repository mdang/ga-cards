var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date
});

var Card = mongoose.model('Card', cardSchema);

// Make this available to our other files
module.exports = Card;
