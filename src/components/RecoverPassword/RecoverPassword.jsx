import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo';
import iconLogin from '../../assets/iconLogin';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function RecoverPassword() {
  const navigate = useNavigate('/mailsent');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function alertRecover() {
    Swal.fire({
      icon: 'error',
      title: 'Correo invalido',
      text: 'Por favor, inserta un correo electrónico valido',
    });
  }

  async function passwordRecover(email) {
    return fetch('http://dev.hubmine.mx/api/password_reset/confirm/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    })
      .then((response) => response.json())
      .then((json) => {
        // reset();
        console.log('response', json);
        if (json.code === 200) {
          navigate('/mailsent');
        } else {
          alertRecover();
        }
      });
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
        <div className='h-20 flex justify-center items-end'>
          <h1 className='text-2xl font-bold'>¿Has olvidado tu contraseña?</h1>
        </div>
        <section className='w-full h-64 flex justify-center'>
          <form
            onSubmit={handleSubmit(passwordRecover)}
            className='w-96 h-64 mt-5 text-center text-textblack text-sm'>
            <label>Ingresa tu correo electrónico</label>
            <div className='container-input'>
              <span className='span-image'>
                <img src={iconLogin.mail1} alt='' />
              </span>
              <input
                autoComplete='off'
                type='email'
                className={`input-primary ${errors.email && 'input-danger'}`}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'El formato no es correcto',
                  },
                })}
              />
              {errors.email && (
                <span className='span-alert'>{errors.email.message}</span>
              )}
            </div>
            <div className='w-full flex justify-center  mt-5'>
              <button
                type='submit'
                className='bg-primary w-full p-3 rounded-lg text-textwhite text-sm cursor-pointer'>
                Restablecer la contraseña
              </button>
            </div>
            <div className='w-full h-10 mt-2 flex justify-center items-center'>
              <NavLink className='text-lg text-textblack font-bold' to='/'>
                Volver
              </NavLink>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default RecoverPassword;
