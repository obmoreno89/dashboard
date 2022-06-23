import React, { useState } from 'react';
import logo from '../../assets/logo';
import iconDash from '../../assets/iconDash';
import imagePlant from '../../assets/img/imagePlant.png';
import { useForm } from 'react-hook-form';

function RequestJoin() {
  const [page, setPage] = useState(0);

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

  const onsubmit = (data) => console.log(data);

  return (
    <>
      <nav className='w-full h-20 border-b-2 border-gray'>
        <div className='nav-container'>
          <img className='w-12' src={logo.logo} alt='logo hubmine' />
          <h1 className='title-hub'>
            Hub<span className='span-mine'>mine</span>
          </h1>
        </div>
      </nav>
      {page === 5 ? (
        <h1>hola</h1>
      ) : (
        <>
          <section className='w-full h-96 flex'>
            <article className='p-20 w-full'>
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
              <form onSubmit={handleSubmit(onsubmit)}>
                {page === 0 && (
                  <section className='w-full flex flex-col justify-center'>
                    <h1 className='text-textblack font-bold text-2xl'>
                      Cuéntanos sobre tu negocio
                    </h1>
                    {/* INPUT USER */}
                    <section className='mt-6'>
                      <label
                        className={`label-required ${
                          errors.supplier_name && 'span-alert'
                        }`}>
                        Nombre completo o Razón social
                      </label>
                      <div>
                        <input
                          autoComplete='off'
                          type='text'
                          className={`capitalize py-2 pl-2 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
                          errors.country_id && 'span-alert'
                        }`}>
                        ¿Que tipo de proveedor eres?
                      </label>
                      <div>
                        <select
                          className={`mt-2 py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                            errors.country_id && 'input-danger'
                          }`}
                          {...register('country_id', {
                            required: {
                              value: true,
                              message: 'El campo es requerido',
                            },
                          })}>
                          <option value=''>Selecciona una opción</option>
                          <option value='1'>Venta de material</option>
                        </select>
                        {errors.country_id && (
                          <span className='span-alert'>
                            {errors.country_id.message}
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
                      <label className={`${errors.country_id}`}></label>
                      <div>
                        <select
                          className={`mt-2 py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                            errors.country_id && 'input-danger'
                          }`}
                          {...register('country_id', {
                            required: {
                              value: true,
                              message: 'El campo es requerido',
                            },
                          })}>
                          <option value=''>Selecciona un país</option>
                          <option value='1'>mexico</option>
                        </select>
                        {errors.country_id && (
                          <span className='span-alert'>
                            {errors.country_id.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </section>
                )}
                {page === 3 && (
                  <section>
                    <div>
                      <h1 className='text-textblack font-bold text-2xl'>
                        Información de persona de contacto (Ejecutivo)
                      </h1>
                    </div>
                    <section className='mt-1'>
                      <label
                        className={`label-required ${
                          errors.supplier_name && 'span-alert'
                        }`}>
                        Nombre completo o Razón social
                      </label>
                      {/* INPUT USER NAME */}
                      <div>
                        <input
                          autoComplete='off'
                          type='text'
                          className={`capitalize py-2 pl-2 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
                    <section className='mt-1'>
                      <label
                        className={`label-required ${
                          errors.supplier_name && 'span-alert'
                        }`}>
                        Puesto
                      </label>
                      {/* INPUT POSITION */}
                      <div>
                        <input
                          autoComplete='off'
                          type='text'
                          className={`capitalize py-2 pl-2 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
                    <section className='flex space-x-6 justify-between items-center mt-1'>
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
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
                {page === 4 && (
                  <section>
                    <div>
                      <h1 className='text-textblack font-bold text-2xl'>
                        ¿Como te enteraste de Hubmine?
                      </h1>
                    </div>
                    <div className='mt-7 w-4/5'>
                      <label className={`${errors.country_id}`}></label>
                      <div>
                        <select
                          className={`mt-2 py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                            errors.country_id && 'input-danger'
                          }`}
                          {...register('country_id', {
                            required: {
                              value: true,
                              message: 'El campo es requerido',
                            },
                          })}>
                          <option value=''>Selecciona una opción</option>
                          <option value='1'>Facebook</option>
                        </select>
                        {errors.country_id && (
                          <span className='span-alert'>
                            {errors.country_id.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </section>
                )}
                <pre>{JSON.stringify(watch(), null, 4)}</pre>
              </form>
            </article>
            <article
              className='w-full flex relative transform -translate-y-20 justify-center items-center'
              style={{
                backgroundImage: `url(${imagePlant})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: 775,
                width: 600,
              }}>
              <div className='flex flex-col items-center'>
                <img src={logo.truck} alt='Escavadora' />
                <p className='w-80 text-center text-lg text-textwhite font-semibold mt-2'>
                  Eleva tus ganancias vendiendo tus productos desde nuestra
                  aplicación. completa el formulario de pre-registro.
                </p>
              </div>
            </article>
          </section>
          <div className='pl-20 w-3/4 flex items-center space-x-96'>
            {!isValid ? (
              <div className='flex space-x-4 '>
                <button
                  disabled={!isValid}
                  onClick={pageNext}
                  type='submit'
                  className='bg-whiteGreen text-primary w-80  p-3 rounded-lg  text-lg cursor-pointer'>
                  Siguiente
                </button>
              </div>
            ) : (
              <div className='flex space-x-4 '>
                <button
                  onClick={pageNext}
                  type='submit'
                  className='bg-primary text-textwhite w-80  p-3 rounded-lg text-lg cursor-pointer'>
                  Siguiente
                </button>
              </div>
            )}
            <p className='text-primary font-semibold text-xl'>{page + 1} / 5</p>
          </div>
        </>
      )}
    </>
  );
}

export default RequestJoin;
