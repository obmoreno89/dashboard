import React from 'react';
import Login from '../components/Login/Login';
import {
  BrowserRouter,
  Route,
  Routes,
  HashRouter,
  Router,
} from 'react-router-dom';
import RecoverPassword from '../components/RecoverPassword/RecoverPassword';
import Dashboard from '../components/Dashboard/Dashboard';
// Pages
import NewSupplier from '../pages/NewSupplier/NewSupplier';
import SupplierEdit from '../pages/SupplierEdit/SupplierEdit';
//Private or Public Route
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';
import RequestJoin from '../components/RequestJoin/RequestJoin';
import ThanksPage from '../pages/ThanksPage/ThanksPage';

function AppRoutes() {
  return (
    <BrowserRouter basename='/dashboard'>
      {/* Public Routes */}
      <Routes>
        <Route
          path='/login'
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
          path='/request/join/'
          element={
            <PublicRoute>
              <RequestJoin />
            </PublicRoute>
          }
        />

        <Route
          path='/form/finish'
          element={
            <PublicRoute>
              <ThanksPage />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path='/list/supplier'
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
