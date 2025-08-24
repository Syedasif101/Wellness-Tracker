import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', fullWidth = false, ...props }) => {
  const baseClasses = 'py-2 px-4 rounded-md font-medium transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200',
    danger: 'bg-red-600 text-white hover:bg-red-700'
  };
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
