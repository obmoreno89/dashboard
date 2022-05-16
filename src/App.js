import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import EmailSent from './components/RecoverPassword/EmailSent';
import Dashboard from './components/Dashboard/Dashboard';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {token ? (
            <Route path='/mailsent' element={<Dashboard />} />
          ) : (
            <Route path='/' element={<Login setToken={setToken} />} />
          )}
          <Route path='/recuperate' element={<RecoverPassword />} />
          <Route path='/mailsent' element={<EmailSent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
