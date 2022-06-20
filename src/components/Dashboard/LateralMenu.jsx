import React from 'react';
import iconDash from '../../assets/iconDash';

function LateralMenu() {
  return (
    <>
      <div className='w-full h-14 flex items-center justify-center space-x-1 border-b-2 border-gray'>
        <div className=''>
          <img className='w-4' src={iconDash.list} alt='lista' />
        </div>
        <button className='text-primary font-light cursor-pointer'>
          Lista de proveedores
        </button>
      </div>
      <div className='w-full h-14 flex items-center justify-center space-x-1 border-b-2 border-gray'>
        <div className=''>
          <img className='' src='' alt='' />
        </div>
        <button className='font-light cursor-pointer'>Menu2</button>
      </div>
    </>
  );
}

export default LateralMenu;
