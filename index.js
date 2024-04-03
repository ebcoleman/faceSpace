// --------------------------------------------------------------
// const express = require('express');
// const mongoose = require('mongoose');
// const routes = require('./routes');



// const app = express();
// const PORT = process.env.PORT || 3000;
// const connectionString = 'mongodb://127.0.0.1:27017/faceSpace_db';
// mongoose.set('strictQuery', false);

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api', routes);

// // MongoDB connection
// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
//   // Start the server
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// })
// .catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });
// -------------------------------------------------------




const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3000;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('faceSpace')
  ? cwd.split('faceSpace')[1]
  : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});

