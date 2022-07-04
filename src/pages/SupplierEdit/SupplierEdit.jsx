import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import LateralMenu from '../../components/Dashboard/LateralMenu';
import FormSupplierEdit from './FormSupplierEdit';
import ViewContact from './ViewContact';
import AddContact from './AddContact';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

function SupplierEdit() {
  const [plusContact, setPlusContact] = useState(true);
  const [searchContact, setSearchContact] = useState(true);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const userName = cookies.get('first_name');

  const handleSearch = () => setSearchContact(!searchContact);

  function buttonCancel(event) {
    event.preventDefault();
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
        navigate('/list/supplier');
      }
    });
  }

  return (
    <>
      <nav className='nav p-5 flex items-center justify-between'>
        <div
          onClick={buttonCancel}
          className='cursor-pointer flex items-center space-x-3'>
          <img className='logo' src={logo.logo} alt='logo hubmine' />
          <div>
            <h1 className='title-hub'>
              Hub<span className='span-mine'>mine</span>
            </h1>
            <h6 className='text-textgray font-semibold'>Supplier Management</h6>
          </div>
        </div>
        <div>
          <button onClick={buttonCancel}>
            <img src={iconDash.arrowLeft} alt='flecha para regresar' />
          </button>
        </div>
        <article className='w-1/2 flex items-center'>
          <div className=''>
            <h2 className='dash-titles'>Información</h2>
          </div>
        </article>
        <div className='flex items-center space-x-3'>
          <h1>{`${userName}`}</h1>
          <button className='w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer '>
            {`${userName[0]}`}
          </button>
        </div>
      </nav>
      <main className='flex'>
        <section className='w-80 border-r-2 border-gray'>
          <div className='w-full h-14 flex items-center justify-center space-x-1 border-b-2 border-gray'>
            <div className=''>
              <img className='w-4' src={iconDash.list} alt='lista' />
            </div>
            <button
              onClick={buttonCancel}
              type='button'
              className='text-primary font-light cursor-pointer'>
              Lista de proveedores
            </button>
          </div>
        </section>
        <section className='w-full'>
          <FormSupplierEdit />
        </section>
        <section className='w-2/5 border-l-2 border-gray'>
          <nav className='flex justify-between border-b-2 border-gray h-16'>
            <div className='ml-4 flex items-center'>
              <h4 className='text-textgray1 font-medium'>Contactos</h4>
            </div>
            <figure className='flex items-center space-x-5 mr-8'>
              <button onClick={() => setPlusContact(!plusContact)}>
                <img src={iconDash.plus} alt='Simbolo mas' />
              </button>
              <button onClick={handleSearch}>
                <img src={iconDash.searchBlack} alt='Lupa' />
              </button>
            </figure>
          </nav>

          {plusContact ? (
            <>
              <ViewContact
                setSearchContact={setSearchContact}
                searchContact={searchContact}
              />
            </>
          ) : (
            <AddContact
              setPlusContact={setPlusContact}
              plusContact={plusContact}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default SupplierEdit;
