import React from 'react';

const Container = ({ children, fluid = false, className = '' }) => {
  const baseClasses = 'w-full mx-auto px-1';
  const containerClasses = fluid
    ? `${baseClasses} ${className}`
    : `${baseClasses} max-w-7xl ${className}`;
  return <div className={containerClasses}>{children}</div>;
};

export default Container;
