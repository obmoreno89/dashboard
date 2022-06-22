import React from 'react';
import logo from '../../assets/logo';
import imagePlant from '../../assets/img/imagePlant.png';

function RequestJoin() {
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
      <section className='w-full flex h-10'>
        <div className='w-full p-12'>
          <h4 className='text-textgray1 text-sm'>Hubmine para proveedores</h4>
          <h1 className='text-textblack font-bold text-2xl'>
            Cuéntanos sobre tu negocio
          </h1>
        </div>
        <article
          className='w-full relative bottom-20 flex justify-center items-center'
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
    </>
  );
}

export default RequestJoin;
