import { useState } from 'react';
import iconLogin from '../../assets/iconLogin';
import { useForm } from 'react-hook-form';

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
  return (
    <>
      <form
        onSubmit={handleSubmit(loginSubmit)}
        className='mt-1 p-3 w-96 relative '>
        <label className='label-primary'>Correo Electrónico</label>
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
          <button
            onClick={toggleEye}
            className='absolute right-0 top-0 mt-3 mr-4'>
            {eye ? (
              <img src={iconLogin.eye2} alt='ojo cerrado' />
            ) : (
              <img src={iconLogin.eye1} alt='ojo abierto' />
            )}
          </button>
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
          <a className='text-sm text-primary cursor-pointer'>
            ¿Has olvidado la contraseña?
          </a>
        </div>
        <div className='w-full flex justify-center  mt-5'>
          <button
            type='submit'
            className='bg-primary w-5/6 p-3 rounded-lg text-textwhite text-sm cursor-pointer'>
            Iniciar Sesión
          </button>
        </div>
      </form>
      <div className='mt-5 flex justify-center text-xs'>
        <p className='text-textblack'>
          ¿Necesitas una cuenta?
          <a className='text-primary ml-2' href=''>
            Registrarse
          </a>
        </p>
      </div>
    </>
  );
}

export default LoginValid;
