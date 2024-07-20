require('dotenv').config();
const { supabase } = require('../database/supabaseClient');
const { OpenAI } = require('openai');
const userDetailsTable = 'user_details';

const { OPENAI_API_KEY } = process.env;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
});

async function getWorkout(uuid) {
  const { data, error } = await supabase
    .from(userDetailsTable)
    .select('workout')
    .eq('uuid', uuid);

  if (error) {
    throw new Error(error.message);
  }

  console.log('Data from Supabase:', data);

  if (!data || data.length === 0) {
    console.log("Nothing found.");
    return [];
  }

  return data;
}

async function generateWorkout(
  yearsOfExperience, 
  interest, 
  freeDays, 
  height, 
  weight, 
  targetWeight,
  numberOfExercisesPerDay
) {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: `You are tasked to generate a workout routine as a workout trainer. 
          The user has ${yearsOfExperience} years of workout experience and is interested in ${interest}. 
          They are free to work out on ${freeDays} days in a week, strictly excluding rest days. 
          They are currently ${height} meters tall and ${weight} kg heavy, and would like to get to ${targetWeight}kg.
          If the exercise is a bodyweight exercise, set the weight to 0. 
          Do not ever, under any circumstances whatsoever, include any form of exercises requiring an isometric hold in the workout plan. 
          Do not include isometric hold exercises such as: L-sit hold, Hollow body holds, Plank, etc.
          According to the above input, strictly return a workout routine, with strictly ${numberOfExercisesPerDay} exercises per day, in the following json format: 
          This is an example response:
          {
            "days": [
              {
                "day_of_week": "Monday",
                "exercises": [
                  {
                    "exercise": "Kettlebell Curls",
                    "set": 3,
                    "reps": 12,
                    "weight": 15
                  },
                  {
                    "exercise": "Muscle-ups",
                    "set": 3,
                    "reps": 5,
                    "weight": 0
                  }
                ]
              },
              {
                "day_of_week": "Tuesday",
                "exercises": [
                  {
                    "exercise": "Push-ups",
                    "set": 3,
                    "reps": 12,
                    "weight": 0
                  },
                  {
                    "exercise": "Barbell Bench Press",
                    "set": 4,
                    "reps": 10,
                    "weight": 80
                  }
                ]
              }
            ]
          }`
        }
      ],
      model: "gpt-3.5-turbo",
    });
  
    const responseContent = completion.choices[0].message.content;
    console.log(responseContent);
    const parsedContent = JSON.parse(responseContent);
    return parsedContent;
  } catch (error) {
    console.error('Error generating workout:', error);
    throw error;
  }
}

async function insertWorkout(uuid, workout) {
    
  const successMessage = 'pass';

  const { data, error } = await supabase
  .from(userDetailsTable)
  .update(
    { 'workout': workout }
  )
  .eq('uuid', uuid);

  if (error) {
      throw new Error(error.message);
  };
  
  return successMessage;
}


module.exports = { 
  getWorkout, 
  generateWorkout, 
  insertWorkout 
};
