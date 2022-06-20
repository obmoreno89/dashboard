import React from 'react';
import Login from '../components/Login/Login';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import RecoverPassword from '../components/RecoverPassword/RecoverPassword';
import Dashboard from '../components/Dashboard/Dashboard';
// Pages
import NewSupplier from '../pages/NewSupplier/NewSupplier';
import SupplierEdit from '../pages/SupplierEdit/SupplierEdit';
//Private or Public Route
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';
import RequestJoin from '../components/RequestJoin/RequestJoin';

function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Public Routes */}
      <Routes>
        <Route
          path='/dashboard'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path='/recovery-password'
          element={
            <PublicRoute>
              <RecoverPassword />
            </PublicRoute>
          }
        />

        <Route
          path='/request/join'
          element={
            <PublicRoute>
              <RequestJoin />
            </PublicRoute>
          }
        />
        {/* Private Routes */}
        <Route
          path='/dashboard/dashboard'
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path='/suplier/add/'
          element={
            <PrivateRoutes>
              <NewSupplier />
            </PrivateRoutes>
          }
        />
        <Route
          path='/supplier/details/:id'
          element={
            <PrivateRoutes>
              <SupplierEdit />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
