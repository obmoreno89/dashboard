import React from 'react';
import iconDash from '../../assets/iconDash';
import { useNavigate } from 'react-router-dom';

function LateralMenu() {
  const navigate = useNavigate();

  return (
    <>
      <section className='w-60 border-r-2 border-gray'>
        <div className='w-full h-14 flex items-center justify-center space-x-1 border-b-2 border-gray'>
          <div className=''>
            <img className='w-4' src={iconDash.list} alt='lista' />
          </div>
          <button
            type='button'
            className='text-primary font-light cursor-pointer'>
            Lista de proveedores
          </button>
        </div>
      </section>
    </>
  );
}

export default LateralMenu;
