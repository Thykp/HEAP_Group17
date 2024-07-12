const express = require('express');
const router = express.Router();
const workout = require('../model/workout');

router.post('/', async (req, res) => {
  try {
    const workoutPlan = await workout.generateWorkout();
    res.status(200).json({ 
      message: "Workout plan generated successfully!", 
      workoutPlan 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
