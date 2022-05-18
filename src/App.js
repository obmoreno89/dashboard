import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import EmailSent from './components/RecoverPassword/EmailSent';
import Dashboard from './components/Dashboard/Dashboard';
// Pages
import NewSupplier from './pages/NewSupplier/NewSupplier.jsx';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/newsupplier' element={<NewSupplier />} />
            <Route path='/recuperate' element={<RecoverPassword />} />
            <Route path='/mailsent' element={<EmailSent />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
