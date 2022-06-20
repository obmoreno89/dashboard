import React from 'react';
import logo from '../../assets/logo';
import imagePlant from '../../assets/img/imagePlant.png';

function RequestJoin() {
  return (
    <>
      <nav className='w-full h-20 border-b-2 border-gray'>
        <div className='nav-container'>
          <img className='w-12' src={logo.logo} alt='logo hubmine' />
          <h1 className='title-hub'>
            Hub<span className='span-mine'>mine</span>
          </h1>
        </div>
      </nav>
      <section className='w-full flex'>
        <div className='w-full h-50'>hola</div>
        <div
          className='w-1/2'
          style={{
            backgroundImage: `url(${imagePlant})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: 600,
            width: 600,
          }}>
          holas
        </div>
      </section>
    </>
  );
}

export default RequestJoin;
