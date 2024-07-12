import React, { useState } from 'react';
import '../css/Login.css'; // Import CSS file for styling

const LoginComponent = () => {
    // State variables for email and password inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here (e.g., API call, authentication)
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset form fields
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;
