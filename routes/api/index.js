//  Main file for exporting all API routes.

const express = require('express');
const router = express.Router();

// Import and use route handlers from individual route files
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
