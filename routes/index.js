// Exports all route handlers to be used in the main application file (index.js).

// const express = require('express');
// const router = express.Router();

// // Import route handlers from api subdirectory
// const userRoutes = require('./api/userRoutes');
// const thoughtRoutes = require('./api/thoughtRoutes');

// // Register route handlers
// router.use('/users', userRoutes);
// router.use('/thoughts', thoughtRoutes);

// module.exports = router;

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
