import React from 'react';
import logo from '../../assets/logo';
import imagePlant from '../../assets/img/imagePlant.png';
import AboutUser from './AboutUser';

function RequestJoin() {
  return (
    <>
      <nav className='w-3/4 h-20 border-b-2 border-gray'>
        <div className='nav-container'>
          <img className='w-12' src={logo.logo} alt='logo hubmine' />
          <h1 className='title-hub'>
            Hub<span className='span-mine'>mine</span>
          </h1>
        </div>
      </nav>
      <section className='w-full h-96 flex'>
        <AboutUser />
        <article
          className='w-full flex relative transform -translate-y-20 justify-center items-center'
          style={{
            backgroundImage: `url(${imagePlant})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: 775,
            width: 600,
          }}>
          <div className='flex flex-col items-center'>
            <img src={logo.truck} alt='Escavadora' />
            <p className='w-80 text-center text-lg text-textwhite font-semibold mt-2'>
              Eleva tus ganancias vendiendo tus productos desde nuestra
              aplicación. completa el formulario de pre-registro.
            </p>
          </div>
        </article>
      </section>
      <div className='pl-12 w-3/4 flex items-center space-x-96'>
        <button className='bg-whiteGreen text-primary w-80  p-3 rounded-lg text-textwhite text-lg cursor-pointer;'>
          Siguiente
        </button>
        <p className='text-primary font-semibold text-xl'>1 / 5</p>
      </div>
    </>
  );
}

export default RequestJoin;
