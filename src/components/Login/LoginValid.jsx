import { useState } from 'react';
import iconLogin from '../../assets/iconLogin';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function LoginValid() {
  const [eye, setEye] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function toggleEye() {
    setEye((prevState) => !prevState);
  }

  function loginSubmit(data, e) {
    console.log(data);
    e.target.reset();
  }

  const restApiUser = async (data) => {
    const api = await fetch('http://dev.hubmine.mx/api/auth/login/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log('Authorization failed : ' + error.message));
    console.log(api);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(restApiUser)}
        className='mt-1 p-3 w-96 relative '>
        <label className='label-primary'>Correo Electrónico</label>
        <div className='container-input'>
          <span className='span-image'>
            <img src={iconLogin.mail1} alt='mail' />
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
      {<span>no puedes esntrar</span>}
      <div className='mt-5 flex justify-center text-xs'>
        <p className='text-textblack'>
          ¿Necesitas una cuenta?
          <NavLink className='text-primary ml-2' to='/'>
            Registrarse
          </NavLink>
        </p>
      </div>
    </>
  );
}

export default LoginValid;
