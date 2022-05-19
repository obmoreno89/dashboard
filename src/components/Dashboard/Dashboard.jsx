import React, { useState } from 'react';
import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import LateralMenu from './LateralMenu';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [hiddenButton, setHiddenButton] = useState(false);

  function newSupplier() {
    navigate('/newsupplier');
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
            type='email'
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
        ) : null}
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
              <tr className=' w-full h-10 border-y-2 border-gray1 text-center cursor-pointer text-textblack hover:bg-secondary'>
                <td className=''>00000002</td>
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
