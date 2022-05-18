import React from 'react';
import logo from '../../assets/logo';
import LateralMenu from '../../components/Dashboard/LateralMenu';
import FormNewSupplier from './FormNewSupplier';

function NewSupplier() {
  return (
    <>
      <nav className='nav flex items-center justify-between p-6'>
        <div className='flex items-center space-x-3'>
          <img className='logo' src={logo.logo} alt='logo hubmine' />
          <div>
            <h1 className='title-hub'>
              Hub<span className='span-mine'>mine</span>
            </h1>
            <h6 className='text-textgray font-semibold'>Supplier Management</h6>
          </div>
        </div>
        <div className='flex w-64 items-center justify-center'>
          <h2 className='font-bold text-xl text-textgray1'>
            Registrar Proveedor
          </h2>
        </div>
        <div className='w-96 flex flex-row space-x-3 items-center justify-center'>
          <button className='button-secondary bg-secondary'>guardar</button>
          <button className='button-secondary bg-danger'>Añadir</button>
        </div>

        <div className='flex items-center space-x-3'>
          <h1>Omar Barragán</h1>
          <button className='w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer '>
            OB
          </button>
        </div>
      </nav>
      <main className='w-full h-96 flex'>
        <section className='w-60 h-auto border-r-2 border-gray'>
          <LateralMenu />
        </section>
        <section className='w-full h-auto flex justify-center'>
          <FormNewSupplier />
        </section>
      </main>
    </>
  );
}

export default NewSupplier;
