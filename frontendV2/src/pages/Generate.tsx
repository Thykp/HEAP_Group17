import { useEffect, useState, ChangeEvent } from "react";
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
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnterDetails = async () => {
    setLoading(true);
    try {
      await axios.post(`${baseURL}/userDetails/insert`, { ...formData, uuid });
      const response = await axios.post(`${baseURL}/workout`, { uuid });
      if (response.status === 200) {
        navigate("/workout", { state: { user, uuid } });
      }
    } catch (error) {
      console.error("Error generating workout plan:", error);
    } finally {
      setLoading(false);
    }
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
            <div id="interest" className="relative">
              <Select
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
              placeholder="Enter your height in meters"
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

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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
