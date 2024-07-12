require('dotenv').config();
const { OpenAI } = require('openai');

const { OPENAI_API_KEY } = process.env;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
});

async function generateWorkout() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: `You are tasked to generate a workout routine for John as a workout trainer. John has 10 years of workout experience and is interested in bodybuilding. He is free to work out on 5 days in a week. He is currently 1.8 meters tall and 70 kg heavy, and would like to get to 80kg. He has a vegan diet. If the exercise is a bodyweight exercise, set the weight to 0. According to the above input, strictly return a workout routine in the following json format: This is an example response:
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
                    "exercise": "Barbell Bench Press",
                    "set": 4,
                    "reps": 10,
                    "weight": 80
                  }
                ]
              },
              {
                "day_of_week": "Tuesday",
                "exercises": [
                  {
                    "exercise": "Kettlebell Curls",
                    "set": 3,
                    "reps": 12,
                    "weight": 15
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
    const parsedContent = JSON.parse(responseContent);
    return parsedContent;
  } catch (error) {
    console.error('Error generating workout:', error);
    throw error;
  }
}

module.exports = { generateWorkout };
