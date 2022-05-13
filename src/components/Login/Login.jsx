import React from 'react';
import logo from '../../assets/logo';

import LoginValid from './LoginValid.jsx';

function Login() {
  return (
    <>
      <nav className='w-full h-15 border-b-2 border-gray'>
        <div className='p-3 flex flex-row items-center space-x-3'>
          <img className='w-10' src={logo.logo} alt='logo hubmine' />
          <h1 className='w-0 font-bold text-2xl'>
            Hub<span className='text-primary'>mine</span>
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
