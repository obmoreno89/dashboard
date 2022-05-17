import React from 'react';
import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';

function Dashboard() {
  return (
    <>
      <nav className='nav flex items-center justify-around'>
        <div className='nav-container'>
          <img className='logo' src={logo.logo} alt='logo hubmine' />
          <div>
            <h1 className='title-hub'>
              Hub<span className='span-mine'>mine</span>
            </h1>
            <h6 className='text-textgray font-semibold'>Supplier Management</h6>
          </div>
        </div>
        <div className='relative flex w-1/2 flex-wrap items-stretch mt-2 mb-3'>
          <span className='span-image'>
            <img src={iconDash.search} alt='' />
          </span>
          <input
            autoComplete='off'
            type='email'
            className='input-primary '
            placeholder='Buscar'
          />
        </div>
        <div>
          <button className='bg-primary w-24 p-3 rounded-lg text-textwhite text-sm cursor-pointer'>
            Añadir
          </button>
        </div>
        <div className='flex items-center space-x-3'>
          <h1>Omar Barragán</h1>
          <button className='w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer'>
            OB
          </button>
        </div>
      </nav>
      <main className='w-full h-96 flex'>
        <section className='w-60 h-auto bg-secondary border-r-2 border-gray'></section>
        <section className='w-full h-auto bg-purple'></section>
      </main>
    </>
  );
}

export default Dashboard;
