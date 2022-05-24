import React from 'react';
import iconDash from '../../assets/iconDash';
import { useNavigate } from 'react-router-dom';

function SearchContact() {
  const navigate = useNavigate();
  return (
    <>
      <nav className='flex items-center border-b-2 border-gray h-16'>
        <div className='ml-3 flex'>
          <button onClick={() => navigate('/supplier/edit')}>
            <img src={iconDash.arrowLeft} alt='flecha izquierda' />
          </button>
        </div>
        <div className='w-72 ml-4'>
          <span className='span-image'>
            <img src={iconDash.search} alt='lupa' />
          </span>
          <input
            autoComplete='off'
            type='text'
            className='input-primary '
            placeholder='Buscar contacto'
          />
        </div>
      </nav>
    </>
  );
}

export default SearchContact;
