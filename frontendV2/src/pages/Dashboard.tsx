import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart, Pie, PieChart } from "recharts";
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "../components/ui/chart";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, uuid } = location.state || {};
  const [exercisesByDay, setExercisesByDay] = useState({});
  const [selectedDay, setSelectedDay] = useState("Monday");

  // const [selectedDay, setSelectedDay] = useState("Monday");
  // const exercisesByDay = {
  //   Monday: ["Squats", "Deadlifts", "Bench Press"],
  //   Tuesday: ["Jumping Jacks", "Burpees", "Rowing"],
  //   Wednesday: ["Rest Day"],
  //   Thursday: ["Overhead Press", "Squats", "Deadlifts"],
  //   Friday: ["Jumping Jacks", "Burpees", "Rowing"],
  //   Saturday: ["Rest Day"],
  //   Sunday: ["Rest Day"],
  // };

  useEffect(() => {
    console.log('Location State:', location.state);
    if (!user || !uuid) {
      navigate("/login");
    } else {
      // Fetch workout data
      axios.get('/api/workout', { params: { uuid } })
        .then(response => {
          if (response.data.workout) {
            setExercisesByDay(response.data.workout);
          } else {
            console.error('No workout data received');
          }
        })
        .catch(error => {
          console.error('Error fetching workout data:', error);
        });
    }
  }, [user, uuid, navigate]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

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
            <Button variant="ghost" size="icon" className="rounded-full">
              <img src="/placeholder.svg" width="36" height="36" className="rounded-full" alt="Avatar" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
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
                    onClick={() => setSelectedDay(day)}
                  >
                    <h3 className="text-lg font-medium">{day}</h3>
                    <p className="text-muted-foreground">
                      {day === "Wednesday" || day === "Saturday" || day === "Sunday" ? "Rest Day" : day === "Monday" || day === "Thursday" ? "Strength Training" : "Cardio"} <br />
                      {day === "Wednesday" || day === "Saturday" || day === "Sunday" ? "" : day === "Monday" || day === "Thursday" ? "60 mins" : "45 mins"}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-medium">Exercises</h3>
                <ul className="list-none pl-0 text-muted-foreground">
                  {exercisesByDay[selectedDay]?.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                  )) || <li>No workout generated! Head over to Generate Workout to get started!</li>}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
        <section id="progress" className="grid gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              <a href="#progress" className="text-black">Progress</a>
            </h2>
            <Link to="#" className="text-primary hover:underline">
              View Details
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weight</CardTitle>
              </CardHeader>
              <CardContent>
                <LinechartChart className="aspect-[9/4]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Body Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <PiechartcustomChart className="aspect-square" />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function LayoutDashboardIcon(props) {
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

function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  );
}

function PiechartcustomChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}
