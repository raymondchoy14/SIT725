const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema
const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

// Create model
const Project = mongoose.model('Project', ProjectSchema);

// Sample Cyber Security data
const sampleData = [
  {
    title: "Cyber Security",
    image: "images/Blog-2024-Cybersecurity-Tools.png",
    link: "About cyber security",
    description: "What is a Cyber Surity?",
  },
  {
    title: "Type of cyber Security",
    image: "images/pngtree-cybersecurity-concept-png-image_14870175.png",
    link: "About Type of cyber Security",
    description: "Type of cyber Security",
  },
];

// Insert into DB
Project.insertMany(sampleData)
  .then(() => {
    console.log("✅ Sample Cyber Security data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error("❌ Error inserting data:", err));
