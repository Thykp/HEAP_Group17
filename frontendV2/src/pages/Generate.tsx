import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

const baseURL = import.meta.env.VITE_ENDPOINT ?? `http://localhost:${import.meta.env.VITE_PORT}`;

export default function Generate() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, uuid } = location.state || {};

  useEffect(() => {
    console.log('Location State in Generate:', location.state);
    if (!user || !uuid) {
      navigate("/login");
    }
  }, [user, uuid, navigate]);

  const [formData, setFormData] = useState({
    years_of_experience: "",
    interest: "",
    free_days: "",
    height: "",
    weight: "",
    target_weight: "",
  });
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [showWorkoutPlan, setShowWorkoutPlan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detailsEntered, setDetailsEntered] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnterDetails = async () => {
    setLoading(true);
    try {
      console.log({...formData});
      const response = await axios.post(`${baseURL}/userDetails/insert`, { ...formData, uuid });
      if (response.status === 200) {
        console.log("success");
      }
    } catch (error) {
      console.error("Error entering details:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateWorkoutPlan = () => {
    const plan = {
      exercises: [
        { name: "Squats", sets: 3, reps: 12 },
        { name: "Bench Press", sets: 4, reps: 10 },
        { name: "Deadlifts", sets: 3, reps: 8 },
        { name: "Shoulder Press", sets: 4, reps: 12 },
      ],
      recommendations: [
        "Aim for 3-4 workouts per week",
        "Increase protein intake to support muscle growth",
        "Stay hydrated and get enough sleep",
      ],
    };
    setWorkoutPlan(plan);
    setShowWorkoutPlan(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-10 relative">
      <Button
        variant="ghost"
        className="absolute top-4 left-4 rounded-full p-2"
        onClick={() => navigate("/dashboard", { state: { user, uuid } })}
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </Button>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Personalized Workout Plan</h1>
          <p className="text-muted-foreground">Enter your details to get a custom workout plan.</p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="years_of_experience">Years of Experience</Label>
            <Input
              id="years_of_experience"
              name="years_of_experience"
              type="number"
              min="0"
              value={formData.years_of_experience}
              onChange={handleInputChange}
              placeholder="Enter your years of experience"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest">Interests</Label>
            <Select
              id="interest"
              name="interest"
              value={formData.interest}
              onValueChange={(value) => setFormData({ ...formData, interest: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your interests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Bodybuilding">Bodybuilding</SelectItem>
                <SelectItem value="Strength">Strength</SelectItem>
                <SelectItem value="Powerlifting">Powerlifting</SelectItem>
                <SelectItem value="Calisthenics">Calisthenics</SelectItem>
                <SelectItem value="Armwrestling">Armwrestling</SelectItem>
                <SelectItem value="General Fitness">General Fitness</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="free_days">Free Days</Label>
            <Input
              id="free_days"
              name="free_days"
              type="number"
              min="0"
              max="7"
              value={formData.free_days}
              onChange={handleInputChange}
              placeholder="Enter your free days per week"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="height">Height (m)</Label>
            <Input
              id="height"
              name="height"
              type="number"
              min="0"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="Enter your height in centimeters"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              min="0"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Enter your weight in kilograms"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="target_weight">Target Weight (kg)</Label>
            <Input
              id="target_weight"
              name="target_weight"
              type="number"
              min="0"
              value={formData.target_weight}
              onChange={handleInputChange}
              placeholder="Enter your target weight in kilograms"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={handleEnterDetails} className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Generate Workout"}
          </Button>
        </div>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
