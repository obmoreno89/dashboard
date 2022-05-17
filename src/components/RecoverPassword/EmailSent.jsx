import React from 'react';
import logo from '../../assets/logo';
import { useNavigate } from 'react-router-dom';

function EmailSent() {
  const navigate = useNavigate();

  function handleReturn() {
    navigate('/');
  }

  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <img className='logo' src={logo.logo} alt='logo hubmine' />
          <h1 className='title-hub'>
            Hub<span className='span-mine'>mine</span>
          </h1>
        </div>
      </nav>
      <main className='w-full'>
        <div className='h-40 flex justify-center items-end'>
          <h1 className='text-2xl font-bold'>Correo electronico enviado</h1>
        </div>
        <p className='text-center mt-5 text-sm'>
          Se a enviado un correo electrónico con instrucciones para restablecer
          tu contraseña
        </p>
        <div className='flex justify-center mt-5'>
          <button
            onClick={handleReturn}
            className='bg-primary w-72 p-3 rounded-lg text-textwhite text-sm cursor-pointer'>
            Aceptar
          </button>
        </div>
      </main>
    </>
  );
}

export default EmailSent;
