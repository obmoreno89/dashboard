import React, { useState } from 'react';
import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import LateralMenu from '../../components/Dashboard/LateralMenu';
import FormSupplierEdit from './FormSupplierEdit';
import ViewContact from './ViewContact';
import AddContact from './AddContact';

function SupplierEdit() {
  const navigate = useNavigate();
  const [plusContact, setPlusContact] = useState(true);

  return (
    <>
      <nav className='nav p-5 flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <img className='logo' src={logo.logo} alt='logo hubmine' />
          <div>
            <h1 className='title-hub'>
              Hub<span className='span-mine'>mine</span>
            </h1>
            <h6 className='text-textgray font-semibold'>Supplier Management</h6>
          </div>
        </div>
        <div>
          <NavLink to='/dashboard'>
            <img src={iconDash.arrowLeft} alt='flecha para regresar' />
          </NavLink>
        </div>
        <div className='w-1/2'>
          <h2 className='dash-titles'>Información</h2>
        </div>
        <div className='flex items-center space-x-3'>
          <h1>Omar Barragán</h1>
          <button className='w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer '>
            OB
          </button>
        </div>
      </nav>
      <main className='full h-full flex'>
        <section className='w-80 h-auto border-r-2 border-gray'>
          <LateralMenu />
        </section>
        <section className='w-full h-auto'>
          <FormSupplierEdit />
        </section>
        <section className='w-2/5 h-auto border-l-2 border-gray'>
          <nav
            id='supplierEdit'
            className='flex justify-between border-b-2 border-gray h-16'>
            <div className='ml-4 flex items-center'>
              <h4 className='text-textgray1 font-medium'>Contactos</h4>
            </div>
            <figure className='flex items-center space-x-5 mr-8'>
              <button onClick={() => setPlusContact(!plusContact)}>
                <img src={iconDash.plus} alt='Simbolo mas' />
              </button>
              <button onClick={() => navigate('search/contact')}>
                <img src={iconDash.searchBlack} alt='Lupa' />
              </button>
              <button>
                <img src={iconDash.menu} alt='Tres puntos' />
              </button>
            </figure>
          </nav>
          <Outlet />
          {plusContact ? <ViewContact /> : <AddContact />}
        </section>
      </main>
    </>
  );
}

export default SupplierEdit;
