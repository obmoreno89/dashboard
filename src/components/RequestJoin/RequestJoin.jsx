import React, { useState } from 'react';
import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import imagePlant from '../../assets/img/imagePlant.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import UserCarousel from './UserCarousel';
import Swal from 'sweetalert2';

function RequestJoin() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const pageNext = () => {
    setPage((currPage) => currPage + 1);
  };

  const pagePrev = () => {
    setPage((currPage) => currPage - 1);
  };

  const renderButton = () => {
    if (page > 4) {
      return undefined;
    } else if (page === 4) {
      return (
        <div className='flex space-x-4 '>
          <button
            type='submit'
            disabled={!isValid}
            className='bg-primary disabled:bg-whiteGreen text-secondary w-44  p-3 rounded-lg  text-lg cursor-pointer xl:w-72'>
            Finalizar
          </button>
        </div>
      );
    } else {
      return (
        <div className='flex space-x-4 '>
          <button
            disabled={!isValid}
            onClick={pageNext}
            type='button'
            className='bg-primary disabled:bg-whiteGreen text-secondary w-44  p-3 rounded-lg  text-lg cursor-pointer xl:w-72'>
            Siguiente
          </button>
        </div>
      );
    }
  };

  function returnLogin(event) {
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
        navigate('/dashboard');
      }
    });
  }

  async function userData(data) {
    fetch('https://dev.hubmine.mx/api/forms/suppliers/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.msg !== 'success') {
        navigate('/form/finish');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Disculpa las molestias',
          text: 'Al parecer tenemos problemas con nuestro servidor',
        });
      }
    });
  }

  return (
    <>
      <nav className='w-full h-20 border-b-2 border-gray'>
        <div className='nav-container'>
          <img className='w-12' src={logo.logo} alt='logo hubmine' />
          <h1 onClick={returnLogin} className='title-hub cursor-pointer'>
            Hub<span className='span-mine'>mine</span>
          </h1>
        </div>
      </nav>
      <section className='w-full flex items-center justify-center'>
        <article className='w-4/5 pl-20 pr-20'>
          <section className='flex space-x-4'>
            {page > 0 && (
              <div>
                <button type='button' onClick={pagePrev}>
                  <img src={iconDash.arrowLeft} alt='flecha izquierda' />
                </button>
              </div>
            )}
            <div>
              <h4 className='text-textgray1 text-sm'>
                Hubmine para proveedores
              </h4>
            </div>
          </section>
          <form onSubmit={handleSubmit(userData)}>
            {page === 0 && (
              <section className='w-full flex flex-col justify-center'>
                <h1 className='text-textblack font-bold text-2xl'>
                  Cuéntanos sobre tu negocio
                </h1>
                {/* INPUT COMPANY */}
                <section className='mt-6'>
                  <label
                    className={`label-required ${
                      errors.supplier_name && 'span-alert'
                    }`}>
                    Razón social
                  </label>
                  <div>
                    <input
                      autoComplete='off'
                      type='text'
                      className={`uppercase py-2 pl-2 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                        errors.supplier_name && 'input-danger'
                      }`}
                      {...register('supplier_name', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                          maxLength: 30,
                        },
                        pattern: {
                          value: /[a-zA-Z]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.supplier_name && (
                      <span className='span-alert'>
                        {errors.supplier_name.message}
                      </span>
                    )}
                  </div>
                </section>
                {/* INPUT PHONE */}
                <section className='flex space-x-6 justify-between items-center mt-5'>
                  <div className='w-2/5'>
                    <label
                      className={`label-required ${
                        errors.supplier_phone && 'span-alert'
                      }`}>
                      Telefono
                    </label>
                    <div>
                      <input
                        autoComplete='off'
                        type='number'
                        className={`py-2 pl-2 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                          errors.supplier_phone && 'input-danger'
                        }`}
                        {...register('supplier_phone', {
                          required: {
                            value: true,
                            message: 'El campo es requerido',
                            maxLength: 10,
                            message: 'El telefono es de 10 digitos',
                          },
                        })}
                      />
                      {errors.supplier_phone && (
                        <span className='span-alert'>
                          {errors.supplier_phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* INPUT EMAIL */}
                  <div className='w-3/5'>
                    <label
                      className={`label-required ${
                        errors.supplier_email && 'span-alert'
                      }`}>
                      Correo electrónico
                    </label>
                    <div>
                      <input
                        autoComplete='off'
                        type='email'
                        className={`lowercase py-2 pl-2 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                          errors.supplier_email && 'input-danger'
                        }`}
                        {...register('supplier_email', {
                          required: {
                            value: true,
                            message: 'El campo es requerido',
                            max: 25,
                            min: 5,
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'El formato no es correcto',
                          },
                        })}
                      />
                      {errors.supplier_email && (
                        <span className='span-alert'>
                          {errors.supplier_email.message}
                        </span>
                      )}
                    </div>
                  </div>
                </section>
              </section>
            )}
            {page === 1 && (
              <section>
                {/* OPTION USER TYPE */}
                <div>
                  <h1 className='text-textblack font-bold text-2xl'>
                    Cuéntanos sobre tu negocio
                  </h1>
                </div>
                <div className='mt-7 w-4/5'>
                  <label
                    className={`label-required ${
                      errors.supplier_type && 'span-alert'
                    }`}>
                    ¿Que tipo de proveedor eres?
                  </label>
                  <div>
                    <select
                      className={`mt-2 py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                        errors.supplier_type && 'input-danger'
                      }`}
                      {...register('supplier_type', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}>
                      <option value=''>Selecciona una opción</option>
                      <option value='pedrera'>Pedrera</option>
                    </select>
                    {errors.supplier_type && (
                      <span className='span-alert'>
                        {errors.supplier_type.message}
                      </span>
                    )}
                  </div>
                </div>
              </section>
            )}
            {page === 2 && (
              <section>
                {/* COUNTRY */}
                <div>
                  <h1 className='text-textblack font-bold text-2xl'>
                    ¿Cuál es tu país?
                  </h1>
                </div>
                <div className='mt-7 w-4/5'>
                  <label className={`${errors.supplier_country}`}></label>
                  <div>
                    <select
                      className={`mt-2 py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                        errors.supplier_country && 'input-danger'
                      }`}
                      {...register('supplier_country', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}>
                      <option value=''>Selecciona un país</option>
                      <option value='1'>Mexico</option>
                    </select>
                    {errors.supplier_country && (
                      <span className='span-alert'>
                        {errors.supplier_country.message}
                      </span>
                    )}
                  </div>
                </div>
              </section>
            )}
            {page === 3 && (
              <section>
                <div>
                  {/* INPUT CONTACT NAME */}
                  <h1 className='text-textblack font-bold text-2xl'>
                    Información de persona de contacto (Ejecutivo)
                  </h1>
                </div>
                <section className='mt-1'>
                  <label
                    className={`label-required ${
                      errors.contact_name && 'span-alert'
                    }`}>
                    Nombre completo
                  </label>

                  <div>
                    <input
                      autoComplete='off'
                      type='text'
                      className={`capitalize py-2 pl-2 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                        errors.contact_name && 'input-danger'
                      }`}
                      {...register('contact_name', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                          maxLength: 30,
                        },
                        pattern: {
                          value: /[a-zA-Z]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.contact_name && (
                      <span className='span-alert'>
                        {errors.contact_name.message}
                      </span>
                    )}
                  </div>
                </section>
                <section className='mt-1'>
                  {/* INPUT POSITION */}
                  <label
                    className={`label-required ${
                      errors.contact_position && 'span-alert'
                    }`}>
                    Puesto
                  </label>

                  <div>
                    <input
                      autoComplete='off'
                      type='text'
                      className={`capitalize py-2 pl-2 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                        errors.contact_position && 'input-danger'
                      }`}
                      {...register('contact_position', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                          maxLength: 30,
                        },
                        pattern: {
                          value: /[a-zA-Z]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.contact_position && (
                      <span className='span-alert'>
                        {errors.contact_position.message}
                      </span>
                    )}
                  </div>
                </section>
                {/* INPUT PHONE */}
                <section className='flex space-x-6 justify-between items-center mt-1'>
                  <div className='w-2/5'>
                    <label
                      className={`label-required ${
                        errors.contact_phone && 'span-alert'
                      }`}>
                      Telefono
                    </label>
                    <div>
                      <input
                        autoComplete='off'
                        type='number'
                        className={`py-2 pl-2 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                          errors.contact_phone && 'input-danger'
                        }`}
                        {...register('contact_phone', {
                          required: {
                            value: true,
                            message: 'El campo es requerido',
                            maxLength: 10,
                            message: 'El telefono es de 10 digitos',
                          },
                        })}
                      />
                      {errors.contact_phone && (
                        <span className='span-alert'>
                          {errors.contact_phone.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* INPUT EMAIL */}
                  <div className='w-3/5'>
                    <label
                      className={`label-required ${
                        errors.contact_email && 'span-alert'
                      }`}>
                      Correo electrónico
                    </label>
                    <div>
                      <input
                        autoComplete='off'
                        type='email'
                        className={`lowercase py-2 pl-2 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                          errors.contact_email && 'input-danger'
                        }`}
                        {...register('contact_email', {
                          required: {
                            value: true,
                            message: 'El campo es requerido',
                            max: 25,
                            min: 5,
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'El formato no es correcto',
                          },
                        })}
                      />
                      {errors.contact_email && (
                        <span className='span-alert'>
                          {errors.contact_email.message}
                        </span>
                      )}
                    </div>
                  </div>
                </section>
              </section>
            )}
            {page === 4 && (
              <section>
                <div>
                  {/* OPTION SUPPLIER SOURCE */}
                  <h1 className='text-textblack font-bold text-2xl'>
                    ¿Como te enteraste de Hubmine?
                  </h1>
                </div>
                <div className='mt-7 w-4/5'>
                  <label className={`${errors.supplier_source}`}></label>
                  <div>
                    <select
                      className={`mt-2 py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                        errors.supplier_source && 'input-danger'
                      }`}
                      {...register('supplier_source', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                        },
                      })}>
                      <option value=''>Selecciona una opción</option>
                      <option value='facebook'>Facebook</option>
                    </select>
                    {errors.supplier_source && (
                      <span className='span-alert'>
                        {errors.supplier_source.message}
                      </span>
                    )}
                  </div>
                </div>
              </section>
            )}
            <div className='mt-10 w-full flex items-center space-x-44 xl:space-x-72'>
              {renderButton()}
              <p className='text-primary font-semibold text-xl'>
                {page + 1} / 5
              </p>
            </div>
            {/* <pre>{JSON.stringify(watch(), null, 4)}</pre> */}
          </form>
        </article>
        <article
          className='w-full flex relative justify-center items-center'
          style={{
            backgroundImage: `url(${imagePlant})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
            width: 600,
          }}>
          <div className='w-20 flex flex-col items-center'>
            <UserCarousel />
          </div>
        </article>
      </section>
    </>
  );
}

export default RequestJoin;
