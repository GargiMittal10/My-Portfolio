// server/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projects = [
  {
    title: 'InSync Connect',
    description: 'A communication platform for an NGO.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
  },
  {
    title: 'Fuel Feast',
    description: 'A MERN stack site for reservations and ordering.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing projects
    await Project.deleteMany({});

    // Insert sample projects
    await Project.insertMany(projects);
    console.log('Data inserted successfully');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error connecting to MongoDB or inserting data:', error);
  }
}

seedDatabase();
