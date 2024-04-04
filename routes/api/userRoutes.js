// Defines routes and handlers for user-related endpoints.

const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// Define routes for user-related endpoints
router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
