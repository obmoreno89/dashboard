import React from 'react';
import logo from '../../assets/logo';
import { useState, useEffect } from 'react';
import iconLogin from '../../assets/iconLogin';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

function Login() {
  const [eye, setEye] = useState(false);
  let navigate = useNavigate();
  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  function toggleEye() {
    setEye((prevState) => !prevState);
  }

  function alertLogin() {
    Swal.fire({
      icon: 'error',
      title: 'Credenciales invalidas',
      text: 'Verifica tu correo electrónico o contraseña',
    });
  }

  function alertRoll() {
    Swal.fire({
      icon: 'error',
      title: 'Perfil no permitido',
      text: 'El acceso solo es permitido para administradores',
    });
  }

  async function loginUser(credentials) {
    return fetch('https://dev.hubmine.mx/api/auth/login/', {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-type': 'application/json; Access-Control-Allow-Origin: *',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((json) => {
        // reset();
        if (json.user_type_id === 1) {
          console.log(json);
          let result = json;
          localStorage.setItem('token', result.token);
          cookies.set('id', result.id, { path: '/' });
          cookies.set('email', result.email, { path: '/' });
          cookies.set('first_name', result.first_name, { path: '/' });
          navigate('/dashboard/dashboard');
        } else if (json.user_type_id === 2) {
          alertRoll();
        } else {
          alertLogin();
        }
      });
  }

  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <img className='w-12' src={logo.logo} alt='logo hubmine' />
          <h1 className='title-hub'>
            Hub<span className='span-mine'>mine</span>
          </h1>
        </div>
      </nav>
      <main className='h-96 flex flex-col items-center justify-center'>
        <div className='mt-20'>
          <h1 className='text-2xl font-bold'>Iniciar Sesión</h1>
        </div>
        <form
          onSubmit={handleSubmit(loginUser)}
          className='mt-1 p-3 w-96 relative '>
          <label className='label-primary'>Correo Electrónico</label>
          <div className='container-input'>
            <span className='span-image'>
              <img src={iconLogin.mail1} alt='mail' />
            </span>
            <input
              autoComplete='off'
              type='email'
              className={`lowercase input-primary ${
                errors.email && 'input-danger'
              }`}
              {...register('email', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Ingresa un email valido',
                },
              })}
            />
            {errors.email && (
              <span className='span-alert'>{errors.email.message}</span>
            )}
          </div>
          <label className='label-primary'>Password</label>
          <div className='container-input'>
            <span className='span-image'>
              <img src={iconLogin.lock1} alt='' />
            </span>
            <input
              autoComplete='off'
              type={eye ? 'text' : 'password'}
              {...register('password')}
              className={`input-primary ${errors.password && 'input-danger'}`}
              {...register('password', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
              })}
            />
            {errors.password && (
              <span className='span-alert'>{errors.password.message}</span>
            )}
            <button
              type='button'
              onClick={toggleEye}
              className='absolute right-0 top-0 mt-3 mr-4'>
              {eye ? (
                <img src={iconLogin.eye2} alt='ojo cerrado' />
              ) : (
                <img src={iconLogin.eye1} alt='ojo abierto' />
              )}
            </button>
          </div>
          <div className='w-full flex justify-center  mt-5'>
            <button type='submit' className='button-primary'>
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div className='mt-5 text-xs'>
          <p className='text-textblack flex flex-col text-center font-semibold'>
            ¿Quieres ser un proveedor?
            <NavLink className='text-primary ml-2' to='/request/join'>
              Solicitar unirme
            </NavLink>
          </p>
        </div>
      </main>
    </>
  );
}

export default Login;
