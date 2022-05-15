import React from 'react';
import { useState } from 'react';
import logo from '../../assets/logo';
import iconLogin from '../../assets/iconLogin';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

async function passwordRecover(recovery) {
  return fetch('http://awsms.syncronik.com/password_reset/confirm/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    body: JSON.stringify(recovery),
  })
    .then((response) => response.json())
    .then((json) => {
      // reset();
      console.log('response', json);
      if (!json.code === 200) {
        console.log('hola');
      }
    });
}

function RecoverPassword({ setToken }) {
  const navigate = useNavigate();
  const [recoveryMail, setRecoveryMail] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function recoverSubmit(data, e) {
    console.log(data);
    e.target.reset();
  }

  function handleRecovery() {
    navigate('/mailsent');
  }

  const handleRecover = async () => {
    const token = await passwordRecover({
      recoveryMail,
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
      <main className='w-full'>
        <div className='h-20 flex justify-center items-end'>
          <h1 className='text-2xl font-bold'>¿Has olvidado tu contraseña?</h1>
        </div>
        <section className='w-full h-64 flex justify-center'>
          <form
            onSubmit={handleSubmit(passwordRecover)}
            className='w-96 h-64 mt-5 text-center text-textblack text-sm'>
            <label>Ingresa tu correo electrónico o número de celular</label>
            <div className='container-input'>
              <span className='span-image'>
                <img src={iconLogin.mail1} alt='' />
              </span>
              <input
                autoComplete='off'
                onChange={(e) => setRecoveryMail(e.target.value)}
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
                onClick={handleRecovery}
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

RecoverPassword.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default RecoverPassword;
