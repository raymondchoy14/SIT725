var express = require("express");
var app = express();
var port = process.env.PORT || 3004;
var mongoose = require("mongoose");

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
  console.log('Connected to MongoDB');
});

// Schema & Model
var ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});

var Project = mongoose.model('Project', ProjectSchema);

// REST API Route
app.get('/api/projects', async function (req, res) {
  try {
    var projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: 'Success' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error fetching projects' });
  }
});

// Start Server
app.listen(port, function () {
  console.log('App listening on port ' + port);
});
