import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export default function Workout() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [exercises, setExercises] = useState({
    Monday: [
      { name: "Bench Press", sets: 3, reps: 10 },
      { name: "Squats", sets: 4, reps: 12 },
      { name: "Deadlifts", sets: 3, reps: 8 },
      { name: "Overhead Press", sets: 3, reps: 10 },
      { name: "Rows", sets: 4, reps: 12 },
      { name: "Lunges", sets: 3, reps: 10 },
    ],
    Tuesday: [
      { name: "Deadlifts", sets: 3, reps: 8 },
      { name: "Pull-ups", sets: 4, reps: 10 },
      { name: "Shoulder Raises", sets: 3, reps: 12 },
      { name: "Bicep Curls", sets: 3, reps: 10 },
      { name: "Tricep Extensions", sets: 4, reps: 12 },
      { name: "Calf Raises", sets: 3, reps: 15 },
    ],
    Wednesday: [
      { name: "Squats", sets: 4, reps: 12 },
      { name: "Bench Press", sets: 3, reps: 10 },
      { name: "Lat Pulldowns", sets: 3, reps: 12 },
      { name: "Leg Press", sets: 4, reps: 10 },
      { name: "Shoulder Shrugs", sets: 3, reps: 8 },
      { name: "Crunches", sets: 3, reps: 20 },
    ],
    Thursday: [
      { name: "Deadlifts", sets: 3, reps: 8 },
      { name: "Overhead Press", sets: 4, reps: 10 },
      { name: "Rows", sets: 3, reps: 12 },
      { name: "Lunges", sets: 3, reps: 10 },
      { name: "Bicep Curls", sets: 4, reps: 12 },
      { name: "Tricep Extensions", sets: 3, reps: 10 },
    ],
    Friday: [
      { name: "Bench Press", sets: 3, reps: 10 },
      { name: "Squats", sets: 4, reps: 12 },
      { name: "Pull-ups", sets: 3, reps: 8 },
      { name: "Shoulder Raises", sets: 3, reps: 12 },
      { name: "Calf Raises", sets: 4, reps: 15 },
      { name: "Crunches", sets: 3, reps: 20 },
    ],
    Saturday: [
      { name: "Deadlifts", sets: 3, reps: 8 },
      { name: "Leg Press", sets: 4, reps: 10 },
      { name: "Shoulder Shrugs", sets: 3, reps: 12 },
      { name: "Bicep Curls", sets: 3, reps: 10 },
      { name: "Tricep Extensions", sets: 4, reps: 12 },
      { name: "Lat Pulldowns", sets: 3, reps: 10 },
    ],
    Sunday: [
      { name: "Squats", sets: 4, reps: 12 },
      { name: "Overhead Press", sets: 3, reps: 10 },
      { name: "Rows", sets: 3, reps: 12 },
      { name: "Lunges", sets: 3, reps: 10 },
      { name: "Pull-ups", sets: 4, reps: 8 },
      { name: "Calf Raises", sets: 3, reps: 15 },
    ],
  });

  return (
    <div className="flex flex-col h-full w-full bg-background">
      <header className="flex items-center h-16 px-4 md:px-6 border-b bg-card">
        <h1 className="text-2xl font-bold">Weekly Workout Plan</h1>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
            <Card
              key={index}
              className={`bg-card ${selectedDay === day ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedDay(day)}
            >
              <CardHeader>
                <CardTitle>{day}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {exercises[day].slice(0, 3).map((exercise, i) => (
                  <div key={i} className="grid gap-4">
                    <div className="font-medium">{exercise.name}</div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div>
                        {exercise.sets} sets x {exercise.reps} reps
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedDay && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">{selectedDay} Workouts</h2>
            <div className="grid gap-4">
              {exercises[selectedDay].map((exercise, i) => (
                <div key={i} className="flex justify-between">
                  <div className="font-medium">{exercise.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {exercise.sets} sets x {exercise.reps} reps
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
