
import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Auth = ({ setIsAuthenticated, setUser }) => {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (isLogin) {
      // Login only when user is found
      const foundUser = storedUsers.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (foundUser) {
        setUser({ email: foundUser.email, name: foundUser.name });
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } else {
      // signup
      const userExists = storedUsers.some((u) => u.email === formData.email);
      if (userExists) {
        setError("User already exists. Please login.");
      } else {
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };
        localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));
        setUser({ email: newUser.email, name: newUser.name });
        setIsAuthenticated(true);
        setError("");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 dark:text-white">
          {isLogin ? "Sign in to Wellness Tracker" : "Create your account"}
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          )}
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
            {isLogin ? "Sign in" : "Sign up"}
          </Button>
        </form>

        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            className="text-indigo-600 hover:text-indigo-500"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
