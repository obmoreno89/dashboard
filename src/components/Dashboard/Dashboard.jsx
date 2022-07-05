import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';
import LateralMenu from './LateralMenu';
import Cookies from 'universal-cookie';

function Dashboard() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [listTable, setListTable] = useState([]);
  const [supplierUp, setSupplierUp] = useState(false);
  const [search, setSearch] = useState('');
  const cookies = new Cookies();

  const userName = cookies.get('first_name');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    filter(event.target.value);
  };

  const filter = (mineOfSearch) => {
    let searchResult = listTable.filter((element) => {
      if (
        element.supplier_name
          .toString()
          .toLowerCase()
          .includes(mineOfSearch.toLowerCase()) ||
        element.supplier_rfc
          .toString()
          .toLowerCase()
          .includes(mineOfSearch.toLowerCase())
      ) {
        return element;
      }
    });
    setList(searchResult);
  };

  function newSupplier() {
    navigate('/suplier/add');
  }

  function Logout() {
    localStorage.removeItem('token');
    cookies.remove('id', { path: '/' });
    cookies.remove('email', { path: '/' });
    cookies.remove('first_name', { path: '/' });

    navigate('/login');
  }

  function supplierDelete(id) {
    Swal.fire({
      imageUrl: iconDash.warning,
      imageHeight: 100,
      imageWidth: 100,
      text: `¿Esta seguro que desea eliminar el proveedor?`,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#0DB1AC',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF5859',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        handleDelete(id);
      }
    });
  }

  const handleDelete = (id) => {
    const requestInit = {
      method: 'DELETE',
    };

    fetch(
      `https://dev.hubmine.mx/api/suppliers/delete/${id}`,
      requestInit
    ).then((response) => {
      if (response.status !== 404) {
        Swal.fire(
          'Operación exitosa!',
          'Se elimino correctamente el proveedor',
          'success'
        );
      } else {
        Swal.fire(
          'No se puede eliminar',
          'Al parecer tenemos problemas con nuestro servidor',
          'error'
        );
      }
      setSupplierUp(true);
    });
  };

  useEffect(() => {
    const getSpupplierList = () => {
      fetch('https://dev.hubmine.mx/api/suppliers/list/')
        .then((response) => response.json())
        .then((json) => {
          if (json !== 404) {
            console.log(json);
            setList(json);
            setListTable(json);
          } else {
            Swal.fire('Algo salío mal', `${json.msg}`, 'error');
          }
        });
    };
    getSpupplierList();
    setSupplierUp(false);
  }, [supplierUp]);

  return (
    <>
      <nav className='nav flex items-center justify-around'>
        <div className='flex items-center space-x-3'>
          <img className='logo' src={logo.logo} alt='logo hubmine' />
          <div>
            <h1 className='title-hub xl:w-0'>
              Hub<span className='span-mine'>mine</span>
            </h1>
            <h6 className='text-textgray font-semibold'>Supplier Management</h6>
          </div>
        </div>
        <div className='relative flex w-4/12 flex-wrap items-stretch mt-2 mb-3 xl:w-1/2'>
          <span className='span-image'>
            <img src={iconDash.search} alt='Lupa' />
          </span>
          <input
            value={search}
            autoComplete='off'
            type='text'
            className='input-primary '
            placeholder='Buscar'
            onChange={handleSearch}
          />
        </div>
        <div>
          <button
            onClick={newSupplier}
            className='bg-primary w-24 p-3 rounded-lg text-textwhite text-sm cursor-pointer'>
            Añadir
          </button>
        </div>
        <div className='flex items-center space-x-7'>
          <div className='flex justify-center items-center space-x-2'>
            <h1>{`${userName}`}</h1>
            <button className='w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer '>
              {`${userName[0]}`}
            </button>
          </div>
          <button
            onClick={() => Logout()}
            className='w-28 h-10 bg-danger text-textwhite cursor-pointer rounded-lg text-sm'>
            Cerrar Sesion
          </button>
        </div>
      </nav>
      <main className='flex  h-screen'>
        <LateralMenu />
        <section className='w-full'>
          <table className='w-full mt-2'>
            <thead>
              <tr className='h-12'>
                <th className='text-header'>PROVEEDOR</th>
                <th className='text-header'>TELÉFONO</th>
                <th className='text-header'>RFC</th>
                <th className='text-header'>EMAIL</th>
                <th className='text-header'>VER</th>
                <th className='text-header'>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {!list.length ? (
                <tr className='div-center'>
                  <td className='text-textgray font-bold text-4xl'>
                    sin proveedores
                  </td>
                </tr>
              ) : (
                list.map((listSupp) => (
                  <tr
                    key={listSupp.id}
                    className='w-full h-16 border-y-2 border-gray1 text-center  text-textblack hover:bg-secondary'>
                    <td className='uppercase'>{listSupp.supplier_name}</td>
                    <td>{listSupp.supplier_phone}</td>
                    <td className='uppercase'>{listSupp.supplier_rfc}</td>
                    <td>{listSupp.supplier_email}</td>
                    <td>
                      <div className='flex justify-center items-center'>
                        <Link to={`/supplier/details/${listSupp.id}`}>
                          <img
                            className='bg-primary w-10 h-10 p-2 rounded-xl cursor-pointer '
                            src={iconDash.eyeWhite}
                            alt='Ojo'
                          />
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div>
                        <button
                          className='button-trash'
                          onClick={() => supplierDelete(listSupp.id)}>
                          <img src={iconDash.trashCan} alt='bote de basura' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
