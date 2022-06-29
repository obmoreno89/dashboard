import logo from '../../assets/logo';
import LateralMenu from '../../components/Dashboard/LateralMenu';
import FormNewSupplier from './FormNewSupplier';
import Cookies from 'universal-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import iconDash from '../../assets/iconDash';
import { useEffect } from 'react';

function NewSupplier() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const userName = cookies.get('first_name');

  function exit() {
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
      <nav className='nav flex items-center justify-between p-6'>
        <div
          className='flex items-center space-x-3 cursor-pointer'
          onClick={exit}>
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
        <div className='flex items-center space-x-3'>
          <h1> {`${userName}`}</h1>
          <button className='w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer '>
            {`${userName[0]}`}
          </button>
        </div>
      </nav>
      <main className='w-full h-auto flex'>
        <section className='w-64 h-auto border-r-2 border-gray'>
          <LateralMenu />
        </section>
        <section className='w-full h-auto flex justify-center items-center flex-col'>
          <FormNewSupplier />
        </section>
      </main>
    </>
  );
}

export default NewSupplier;
