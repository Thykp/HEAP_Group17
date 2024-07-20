import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import axios from "axios";

const baseURL = import.meta.env.VITE_ENDPOINT ?? `http://localhost:${import.meta.env.VITE_PORT}`;

const initialWorkoutPlan: { [key: string]: Array<{ name: string; sets: number; reps: number; weight: number }> } = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

interface Exercise {
  exercise: string;
  set: number;
  reps: number;
  weight: number;
}

interface DayData {
  day_of_week: keyof typeof initialWorkoutPlan;
  exercises: Exercise[];
}

interface WorkoutResponse {
  workout: {
    days: DayData[];
  };
}

export default function Workout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, uuid } = location.state || {};
  const [selectedDay, setSelectedDay] = useState<keyof typeof initialWorkoutPlan | null>(null);
  const [workoutPlan, setWorkoutPlan] = useState<typeof initialWorkoutPlan>(initialWorkoutPlan);

  useEffect(() => {
    if (!user || !uuid) {
      navigate("/login");
      return;
    }

    const fetchWorkoutPlan = async () => {
      try {
        const response = await axios.post<WorkoutResponse>(`${baseURL}/workout/retrieve`, { uuid });
        console.log('API Response:', response);
        const workoutData = response.data.workout;
        console.log('Workout Data:', workoutData);
        const formattedWorkoutPlan = formatWorkoutPlan(workoutData);
        setWorkoutPlan(formattedWorkoutPlan);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error fetching workout plan:", error.response?.data || error.message);
        } else {
          console.error("Error fetching workout plan:", error);
        }
      }
    };

    fetchWorkoutPlan();
  }, [user, uuid, navigate]);

  const formatWorkoutPlan = (data: WorkoutResponse['workout']) => {
    const plan = { ...initialWorkoutPlan };

    if (data && data.days) {
      data.days.forEach(day => {
        plan[day.day_of_week] = day.exercises.map(exercise => ({
          name: exercise.exercise,
          sets: exercise.set,
          reps: exercise.reps,
          weight: exercise.weight,
        }));
      });
    }

    return plan;
  };

  return (
    <div className="flex flex-col h-full w-full bg-background">
      <header className="flex items-center h-16 px-4 md:px-6 border-b bg-card">
        <h1 className="text-2xl font-bold">Weekly Workout Plan</h1>
        <div className="ml-auto">
          <Link
            to="/dashboard"
            state={{ user, uuid }}
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Back to Dashboard
          </Link>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
          {Object.keys(workoutPlan).map((day) => (
            <Card
              key={day}
              className={`bg-card ${selectedDay === day ? "ring-2 ring-primary" : ""}`}
              onClick={() => setSelectedDay(day as keyof typeof initialWorkoutPlan)}
            >
              <CardHeader>
                <CardTitle>{day}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {workoutPlan[day].slice(0, 3).map((exercise, i) => (
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
        {selectedDay && workoutPlan[selectedDay]?.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">{selectedDay} Workouts</h2>
            <div className="grid gap-4">
              {workoutPlan[selectedDay].map((exercise, i) => (
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
        {selectedDay && workoutPlan[selectedDay]?.length === 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">{selectedDay} Workouts</h2>
            <div className="text-muted-foreground">No exercises scheduled for this day.</div>
          </div>
        )}
      </main>
    </div>
  );
}
