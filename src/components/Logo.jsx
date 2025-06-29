import React from 'react';

const Logo = ({ variant = 'primary', size = 'medium', className = '' }) => {
  const logoVariants = {
    primary: '/logo-primary.png',
    secondary: '/logo-secondary.png',
    white: '/logo-secondary.png', // fallback to square for white
    dark: '/logo-secondary.png'   // fallback to square for dark
  };

  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16',
    xlarge: 'h-20'
  };

  const logoPath = logoVariants[variant] || logoVariants.primary;
  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <img 
      src={logoPath} 
      alt="The Bionic Group" 
      className={`${sizeClass} ${className}`}
      style={{ 
        height: size === 'small' ? '32px' : 
                size === 'medium' ? '48px' : 
                size === 'large' ? '64px' : '80px',
        width: 'auto',
        objectFit: 'contain'
      }}
      onError={(e) => {
        // Fallback to square logo if image fails to load
        e.target.src = '/logo-secondary.png';
        e.target.onerror = null; // Prevent infinite loop
      }}
    />
  );
};

export default Logo; 