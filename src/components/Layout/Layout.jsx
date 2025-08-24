import React from 'react';
import Header from './Header';

const Layout = ({ children, setIsAuthenticated, user, theme, setTheme }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        setIsAuthenticated={setIsAuthenticated} 
        user={user} 
        theme={theme} 
        setTheme={setTheme} 
      />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
