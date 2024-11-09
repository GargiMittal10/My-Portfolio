const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // Import the Project model

// Route to get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch projects from MongoDB
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
