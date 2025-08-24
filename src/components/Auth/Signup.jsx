import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Input from '../UI/Input';

const Signup = ({ setIsAuthenticated, setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Saving user in localStorage
    localStorage.setItem(
      "wellnessUser",
      JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );

    // Set user in state
    setUser({ email: formData.email, name: formData.name });
    setIsAuthenticated(true);

    // Redirecting to dashboard or login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            label="Email address"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <Button type="submit" fullWidth>
            Sign up
          </Button>
          <div className="text-center">
            <Link to="/login" className="text-indigo-600 hover:text-indigo-500">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
