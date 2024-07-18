import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";

const baseURL = import.meta.env.VITE_ENDPOINT ?? `http://localhost:${import.meta.env.VITE_PORT}`;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/userAccount/login`, { email, password });

      const { user } = response.data;
      console.log('Login successful!', user);
      navigate('/dashboard', { state: { user, uuid: user.uuid } });
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Enter your email and password to sign in to your account.</p>
        </div>
        <Card>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="#" className="text-xs text-muted-foreground hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <br />
              <CardFooter>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="font-medium underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
