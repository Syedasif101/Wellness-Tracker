import React from 'react';
import { FaSun, FaMoon, FaSignOutAlt } from 'react-icons/fa';
import Button from '../UI/Button';
import logo from '../../assets/wellness-logo.png'; // logo for wellness tracker

const Header = ({ setIsAuthenticated, user, theme, setTheme }) => {
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    //entries here so data persists for the same user on next login
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md" />
            <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Wellness Tracker
            </h1>
          </div>

          {/* Welcome user */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Welcome, {user?.name || 'User'}
            </span>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            
            <Button onClick={handleLogout} variant="secondary">
              <FaSignOutAlt className="inline mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
