import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
 // Single Auth Component (Login + Signup)
import Auth from './components/Auth/Auth';  
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('isAuthenticated', false);
  const [user, setUser] = useLocalStorage('user', null);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <Routes>
        {/* Login + Signup handled in one component only */}
        <Route
          path="/auth"
          element={
            !isAuthenticated ? (
              <Auth setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Layout setIsAuthenticated={setIsAuthenticated} user={user} theme={theme} setTheme={setTheme}>
                <Dashboard />
              </Layout>
            ) : (
              <Navigate to="/auth" />
            )
          }
        />

        {/* default route */}
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />} />
      </Routes>
    </Router>
  );
}

export default App;
