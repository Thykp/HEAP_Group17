const express = require('express');
const router = express.Router();
const workout = require('../model/workout');

router.post('/', async (req, res) => {
  try {
    const { yearsOfExperience, interest, freeDays, height, weight, targetWeight } = req.body;
    
    let numberOfExercisesPerDay;
    if (yearsOfExperience < 1) {
      numberOfExercisesPerDay = 3;
    } else if (yearsOfExperience < 5) {
      numberOfExercisesPerDay = 4;
    } else if (yearsOfExperience < 10) {
      numberOfExercisesPerDay = 5;
    } else {
      numberOfExercisesPerDay = 6;
    }

    const workoutPlan = await workout.generateWorkout(
      yearsOfExperience, 
      interest, 
      freeDays, 
      height, 
      weight, 
      targetWeight,
      numberOfExercisesPerDay
    );
    
    res.status(200).json({ 
      message: "Workout plan generated successfully!", 
      workoutPlan 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
