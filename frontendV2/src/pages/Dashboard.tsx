import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

const baseURL = import.meta.env.VITE_ENDPOINT ?? `http://localhost:${import.meta.env.VITE_PORT}`;

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type Exercise = {
  exercise: string;
};

type WorkoutDay = {
  day_of_week: DayOfWeek;
  exercises: Exercise[];
};

type WorkoutData = {
  days: WorkoutDay[];
};

const initialWorkoutPlan: Record<DayOfWeek, string[]> = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, uuid } = location.state || {};
  const [exercisesByDay, setExercisesByDay] = useState<Record<DayOfWeek, string[]>>(initialWorkoutPlan);
  const [selectedDay, setSelectedDay] = useState<DayOfWeek>('Monday');

  useEffect(() => {
    console.log('Location State:', location.state);
    if (!user || !uuid) {
      navigate("/login");
    } else {
      // Fetch workout data
      axios.post(`${baseURL}/workout/retrieve`, { uuid })
        .then(response => {
          console.log('API Response:', response);
          const workoutData: WorkoutData = response.data.workout;
          console.log('Workout Data:', workoutData);
          const formattedWorkoutPlan = formatWorkoutPlan(workoutData);
          setExercisesByDay(formattedWorkoutPlan);
        })
        .catch(error => {
          console.error('Error fetching workout data:', error.response?.data || error.message);
        });
    }
  }, [user, uuid, navigate]);

  const formatWorkoutPlan = (data: WorkoutData): Record<DayOfWeek, string[]> => {
    const plan: Record<DayOfWeek, string[]> = { ...initialWorkoutPlan };

    if (data && data.days) {
      data.days.forEach(day => {
        if (day.day_of_week in plan) {
          plan[day.day_of_week] = day.exercises.map(exercise => exercise.exercise);
        }
      });
    }

    return plan;
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Check if all days have no exercises
  const allDaysRest = Object.values(exercisesByDay).every(exercises => exercises.length === 0);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-background border-b shadow-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-4">
            <a href="#workout" className="flex items-center gap-2 text-lg font-semibold">
              <LayoutDashboardIcon className="w-6 h-6" />
              <span>Dashboard</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#workout" onClick={(e) => handleScroll(e, 'workout')} className="text-muted-foreground hover:text-foreground">
              Workout
            </a>
            <a href="#progress" onClick={(e) => handleScroll(e, 'progress')} className="text-muted-foreground hover:text-foreground">
              Progress
            </a>
            <Link to="/generate" state={{ user, uuid }} className="text-muted-foreground hover:text-foreground">
              <Button variant="ghost">
                Generate Workout
              </Button>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 py-8 grid gap-8">
        <section id="workout" className="grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              <a href="#workout" className="text-black">Workout Plan</a>
            </h2>
            <Link to="/workout" state={{ user, uuid }} className="text-primary hover:underline">
              View Details
            </Link>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Weekly Workout Schedule</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
            {Object.keys(exercisesByDay).map((day) => (
                <div
                  key={day}
                  className={`bg-muted rounded-md p-4 cursor-pointer ${selectedDay === day ? "bg-primary text-primary-foreground" : ""}`}
                  onClick={() => setSelectedDay(day as DayOfWeek)}
                >
                  <h3 className="text-lg font-medium">{day}</h3>
                  <p className="text-muted-foreground">
                    {exercisesByDay[day as DayOfWeek].length === 0 ? "Rest Day" : "Training Day"}
                  </p>
                </div>
              ))}
             </div>
              <div>
                <h3 className="text-lg font-medium">Exercises</h3>
                <ul className="list-none pl-0 text-muted-foreground">
                  {allDaysRest ? (
                    <li>No workout generated! Head over to Generate Workout to get started!</li>
                  ) : (
                    exercisesByDay[selectedDay]?.length > 0 ? (
                      exercisesByDay[selectedDay].map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                      ))
                    ) : (
                      <li>No workout available for this day.</li>
                    )
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function LayoutDashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  );
}
