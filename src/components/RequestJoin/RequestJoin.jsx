import React, { useState } from 'react';
import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import imagePlant from '../../assets/img/imagePlant.png';
import AboutUser from './AboutUser';

function RequestJoin() {
  const [page, setPage] = useState(0);

  const pageNext = () => {
    setPage((currPage) => currPage + 1);
  };

  const pagePrev = () => {
    setPage((currPage) => currPage - 1);
  };

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
        <article className='p-20 w-full'>
          <div className='flex relative right-10 space-x-4'>
            <button onClick={pagePrev}>
              <img src={iconDash.arrowLeft} alt='flecha izquierda' />
            </button>
            <h4 className='text-textgray1 text-sm'>Hubmine para proveedores</h4>
          </div>
          <h1 className='text-textblack font-bold text-2xl'>
            Cuéntanos sobre tu negocio
          </h1>
          <AboutUser />
        </article>
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
      <div className='pl-20 w-3/4 flex items-center space-x-96'>
        <div className='flex space-x-4 '>
          <button
            onClick={pageNext}
            className='bg-whiteGreen text-primary w-80  p-3 rounded-lg text-textwhite text-lg cursor-pointer;'>
            Siguiente
          </button>
        </div>
        <p className='text-primary font-semibold text-xl'>1 / 5</p>
      </div>
    </>
  );
}

export default RequestJoin;
