import React from 'react';
import iconLogin from '../../assets/iconLogin.js';

function Login() {
  return (
    <>
      <nav className='w-full h-15 border-b-2 border-gray'>
        <div className='p-3 flex flex-row items-center space-x-3'>
          <svg
            width='45'
            height='45'
            viewBox='0 0 432 431'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M357.714 430.918H74.2668C33.6728 430.918 0.782593 397.992 0.782593 357.398V73.8119C0.782593 33.1981 33.692 0.291809 74.2668 0.291809H357.714C398.308 0.291809 431.198 33.2173 431.198 73.8119V357.398C431.217 398.012 398.308 430.918 357.714 430.918Z'
              fill='#16B0AC'
            />
            <path
              d='M357.714 430.918H74.2667C33.6727 430.918 0.782532 397.992 0.782532 357.398V73.8119C0.782532 33.1981 33.6919 0.291809 74.2667 0.291809H357.714C398.308 0.291809 431.198 33.2173 431.198 73.8119V357.398C431.217 398.012 398.308 430.918 357.714 430.918Z'
              fill='#16B0AC'
            />
            <path
              d='M357.714 430.918H74.2667C33.6727 430.918 0.782532 397.992 0.782532 357.398V73.8119C0.782532 33.1981 33.6919 0.291809 74.2667 0.291809H357.714C398.308 0.291809 431.198 33.2173 431.198 73.8119V357.398C431.217 398.012 398.308 430.918 357.714 430.918Z'
              fill='#16B0AC'
            />
            <path
              d='M328.801 300.254H191.38C167.039 300.254 151.881 274.767 164.177 254.489L232.877 141.277C245.057 121.211 275.104 121.211 287.284 141.277L355.985 254.489C368.3 274.767 353.142 300.254 328.801 300.254Z'
              fill='white'
            />
            <path
              d='M234.798 304.944H102.104C78.5894 304.944 63.9694 280.322 75.8421 260.755L142.18 151.445C153.937 132.071 182.966 132.071 194.704 151.445L261.041 260.755C272.933 280.341 258.294 304.944 234.798 304.944Z'
              fill='#D7EEEB'
            />
          </svg>
          <h1 className='w-0 font-bold text-2xl'>
            Hub<span className='text-primary'>mine</span>
          </h1>
        </div>
      </nav>
      <main className='h-auto'>
        <div className='p-3 mt-5 w-full'>
          <h1 className='text-xl font-bold'>Iniciar Sesión</h1>
        </div>
        <form action='/' method='/' className='mt-1 p-3 w-full relative '>
          <label className='label-primary'>Correo Electrónico</label>
          <div className='container-input'>
            <span className='span-image'>
              <img src={iconLogin.mail1} alt='' />
            </span>
            <input type='email' className='input-primary' />
          </div>
          <label className='label-primary'>Password</label>
          <div className='container-input'>
            <span className='span-image'>
              <img src={iconLogin.lock1} alt='' />
            </span>
            <input type='email' className='input-primary' />
            <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
              <img src={iconLogin.eye1} alt='' />
            </button>
          </div>
        </form>
        <div className='ml-4'>
          <label className='flex'>
            <div>
              <input type='checkbox' className='relative -top-0.5' />
            </div>
            <div className='ml-2 text-sm text-textblack'>
              Permanecer conectado
            </div>
          </label>
        </div>
        <div className='w-full flex justify-center mt-5'>
          <a className='text-sm text-primary'>¿Has olvidado la contraseña?</a>
        </div>
        <div className='w-full flex justify-center  mt-5'>
          <button className='bg-primary w-5/6 p-3 rounded-lg text-textwhite text-sm'>
            Iniciar Sesión
          </button>
        </div>
        <div className='mt-5 flex justify-center text-xs'>
          <p className='text-textblack'>
            ¿Necesitas una cuenta?{' '}
            <a className='text-primary' href=''>
              Registrarse
            </a>
          </p>
        </div>
      </main>
    </>
  );
}

export default Login;
