import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecoverPassword from './components/RecoverPassword/RecoverPassword';
import EmailSent from './components/RecoverPassword/EmailSent';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/recuperate' element={<RecoverPassword />} />
          <Route path='/mailsent' element={<EmailSent />} />
          <Route path='/mailsent' element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
