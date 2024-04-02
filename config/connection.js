// File for establishing the connection to the MongoDB database using Mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/faceSpace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
