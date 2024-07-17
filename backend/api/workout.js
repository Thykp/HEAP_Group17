const express = require('express');
const router = express.Router();
const workout = require('../model/workout');
const userDetails = require("../model/userDetails");


router.get('/', async (req, res) => {

  try {

      const { uuid } = req.body;
      
      const retrieveWorkout = await workout.getWorkout(uuid);

      if (retrieveWorkout[0]['workout'] === null) {
          return res.status(400).json({ "error": "No workout added yet!" });
      }

      res.status(200).json({'message': retrieveWorkout});
      
  } catch (error) {
      res.status(500).json({ error: error.message });
  }

});


router.post('/', async (req, res) => {
  try {
    
    const { uuid } = req.body;

    // According to the user's details in the database, curate a workout plan for him/her
    const retrieveDetails = await userDetails.getUserDetails(uuid);

    const yearsOfExperience = retrieveDetails[0]['years_of_experience'];
    const interest = retrieveDetails[0]['interest'];
    const freeDays = retrieveDetails[0]['free_days'];
    const height = retrieveDetails[0]['height'];
    const weight = retrieveDetails[0]['weight'];
    const targetWeight = retrieveDetails[0]['target_weight'];
    
    // If the necessary details required to curate a workout plan are missing, return an error message
    if (yearsOfExperience === null || interest === null || freeDays === null || height === null || weight === null || targetWeight === null) {
      return res.status(400).json({ "error": "Ensure that your user details are completely filled in!" });
    }

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
    console.log("Workout plan generated!");
    
    const workoutInserted = await workout.insertWorkout(uuid, workoutPlan);

    console.log("Workout plan added successfully!");

    res.status(200).json({ 
      message: "Workout plan added successfully!", 
      workoutPlan 
    });



  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
