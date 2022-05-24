import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import EmailSent from './components/RecoverPassword/EmailSent';
import Dashboard from './components/Dashboard/Dashboard';
// Pages
import NewSupplier from './pages/NewSupplier/NewSupplier.jsx';
import SupplierEdit from './pages/SupplierEdit/SupplierEdit';
import SearchContact from './pages/SupplierEdit/SearchContact';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='dashboard/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/suplier/add' element={<NewSupplier />} />
            <Route path='/supplier/edit' element={<SupplierEdit />}>
              <Route path='search/contact' element={<SearchContact />} />
            </Route>
            <Route path='/recovery-password' element={<RecoverPassword />} />
            <Route path='/email-sent' element={<EmailSent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
