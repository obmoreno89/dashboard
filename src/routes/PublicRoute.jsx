import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to='/list/supplier' />;
  }
  return children;
}

export default PublicRoute;
