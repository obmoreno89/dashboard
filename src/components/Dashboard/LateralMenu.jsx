import React from 'react';
import iconDash from '../../assets/iconDash';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function LateralMenu() {
  const navigate = useNavigate();

  function returnList() {
    Swal.fire({
      imageUrl: iconDash.warning,
      imageHeight: 100,
      imageWidth: 100,
      title: '¿Estas seguro de salir?',
      text: `Se perderan los datos capturados`,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0DB1AC',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF5859',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        navigate('/dashboard/dashboard');
      }
    });
  }

  return (
    <>
      <section className='w-60 border-r-2 border-gray'>
        <div className='w-full h-14 flex items-center justify-center space-x-1 border-b-2 border-gray'>
          <div className=''>
            <img className='w-4' src={iconDash.list} alt='lista' />
          </div>
          <button
            onClick={returnList}
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
