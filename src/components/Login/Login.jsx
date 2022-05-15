import React from 'react';
import logo from '../../assets/logo';
import { useState } from 'react';
import iconLogin from '../../assets/iconLogin';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

function alertLogin() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Credenciales invalidas',
  });
}

async function loginUser(credentials) {
  return fetch('http://dev.hubmine.mx/api/auth/login/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((json) => {
      // reset();
      console.log('response', json);
      if (!json.code === 200) {
        alertLogin();
      }
    });
}

function Login({ setToken }) {
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function toggleEye() {
    setEye((prevState) => !prevState);
  }

  // 'http://dev.hubmine.mx/api/auth/login/'

  const handleLogin = async () => {
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

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
        <form
          onSubmit={handleSubmit(handleLogin)}
          className='mt-1 p-3 w-96 relative '>
          <label className='label-primary'>Correo Electrónico</label>
          <div className='container-input'>
            <span className='span-image'>
              <img src={iconLogin.mail1} alt='mail' />
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
          <label className='label-primary'>Password</label>
          <div className='container-input'>
            <span className='span-image'>
              <img src={iconLogin.lock1} alt='' />
            </span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='off'
              type={eye ? 'text' : 'password'}
              {...register('password')}
              className={`input-primary ${errors.password && 'input-danger'}`}
              {...register('password', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                minLength: {
                  value: 6,
                  message: 'La contraseña debe tener al menos 6 carecteres',
                },
              })}
            />
            {errors.password && (
              <span className='span-alert'>{errors.password.message}</span>
            )}
            <a onClick={toggleEye} className='absolute right-0 top-0 mt-3 mr-4'>
              {eye ? (
                <img src={iconLogin.eye2} alt='ojo cerrado' />
              ) : (
                <img src={iconLogin.eye1} alt='ojo abierto' />
              )}
            </a>
          </div>
          <div className='ml-0'>
            <label className='flex'>
              <div>
                <input type='checkbox' className='relative -top-0.5' />
              </div>
              <div className='ml-2 text-sm text-textblack cursor-pointer'>
                Permanecer conectado
              </div>
            </label>
          </div>
          <div className='w-full flex justify-center mt-5'>
            <NavLink
              className='text-sm text-primary cursor-pointer'
              to='recuperate'>
              ¿Has olvidado la contraseña?
            </NavLink>
          </div>
          <div className='w-full flex justify-center  mt-5'>
            <button type='submit' className='button-primary'>
              Iniciar Sesión
            </button>
          </div>
        </form>

        <div className='mt-5 flex justify-center text-xs'>
          <p className='text-textblack'>
            ¿Necesitas una cuenta?
            <NavLink className='text-primary ml-2' to='/'>
              Registrarse
            </NavLink>
          </p>
        </div>
      </main>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
