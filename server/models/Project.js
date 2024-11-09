// server/models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // Array of strings
    required: true,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
