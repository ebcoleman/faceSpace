// File for exporting all Mongoose models.
const mongoose = require('mongoose');
const User = require('./User');
const Thought = require('./Thought');
const reactionSchema = require('./Reaction');

// Export models
module.exports = {
  User,
  Thought,
  reactionSchema
};

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/faceSpace_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
