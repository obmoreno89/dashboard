import React from 'react';
import logo from '../../assets/logo';

import LoginValid from './LoginValid.jsx';

function Login() {
  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <img className='w-10' src={logo.logo} alt='logo hubmine' />
          <h1 className='title-hub'>
            Hub<span className='span-mine'>mine</span>
          </h1>
        </div>
      </nav>
      <main className='h-96 flex flex-col items-center justify-center'>
        <div className='mt-20'>
          <h1 className='text-2xl font-bold'>Iniciar Sesión</h1>
        </div>
        <LoginValid />
      </main>
    </>
  );
}

export default Login;
