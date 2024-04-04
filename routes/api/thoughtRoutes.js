// Defines routes and handlers for thought-related endpoints.

const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
  } = require('../../controllers/thoughtController');
  
  router.route('/')
    .get(getAllThoughts)
    .post(createThought);
  
  router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);
  
  // Route for creating a reaction for a specific thought
  router.post('/:thoughtId/reactions', createReaction);
  
  // Route for deleting a reaction from a specific thought
  router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);
  
  module.exports = router;