// src/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');

  if (!token || token === 'undefined') {
    return <Navigate to="/not-found" replace />;
  }

  return children;
};

export default ProtectedRoute;
