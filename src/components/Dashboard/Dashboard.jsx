import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import trashCan from '../../assets/iconDash';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import LateralMenu from './LateralMenu';

function Dashboard() {
  const navigate = useNavigate();
  const [hiddenButton, setHiddenButton] = useState(true);

  function newSupplier() {
    navigate('/suplier/add');
  }

  function showButton() {
    navigate('/supplier/edit');
  }

  function supplierDelete() {
    Swal.fire({
      imageUrl: iconDash.warning,
      imageHeight: 100,
      imageWidth: 100,
      text: '¿Esta seguro que desea eliminar este registro?',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0DB1AC',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF5859',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Operación exitosa!',
          'Se guardo correctamente el proveedor',
          'success'
        );
        console.log('hola');
        // navigate('/dash');
      }
    });
  }

  return (
    <>
      <nav className='nav flex items-center justify-around'>
        <div className='flex items-center space-x-3'>
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
            type='text'
            className='input-primary '
            placeholder='Buscar'
          />
        </div>
        {hiddenButton ? (
          <div>
            <button
              onClick={newSupplier}
              className='bg-primary w-24 p-3 rounded-lg text-textwhite text-sm cursor-pointer'>
              Añadir
            </button>
          </div>
        ) : (
          <section className='flex space-x-3'>
            <div>
              <button
                onClick={showButton}
                className='bg-primary w-24 p-3 rounded-lg text-textwhite text-sm cursor-pointer'>
                Ver
              </button>
            </div>
            <div>
              <button className='button-trash' onClick={supplierDelete}>
                <img src={trashCan.trashCan} alt='bote de basura' />
              </button>
            </div>
          </section>
        )}
        <div className='flex items-center space-x-3'>
          <h1>Omar Barragán</h1>
          <button className='w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer '>
            OB
          </button>
        </div>
      </nav>
      <main className='w-full h-full flex'>
        <section className='w-60 h-auto border-r-2 border-gray'>
          <LateralMenu />
        </section>
        <section className='w-full h-auto'>
          <table className='w-full mt-4'>
            <thead>
              <tr className='h-5'>
                <th className='text-header'>ID</th>
                <th className='text-header'>PROVEEDOR</th>
                <th className='text-header'>TELÉFONO</th>
                <th className='text-header'>PAÍS</th>
                <th className='text-header'>ESTADO</th>
              </tr>
            </thead>
            <tbody>
              <tr
                onClick={() => setHiddenButton(!hiddenButton)}
                className=' w-full h-10 border-y-2 border-gray1 text-center cursor-pointer text-textblack hover:bg-secondary'>
                <td>00000002</td>
                <td>Pedrera San Angel</td>
                <td>81X9XX4X05</td>
                <td>México</td>
                <td>Nuevo León</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
