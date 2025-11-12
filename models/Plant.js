const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model('Plant', plantSchema);
