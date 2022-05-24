import React from 'react';
import iconDash from '../../assets/iconDash';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function AddContact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function saveContact() {
    Swal.fire({
      imageUrl: iconDash.warning,
      imageHeight: 100,
      imageWidth: 100,
      text: '¿Esta seguro que desea guardar el contacto?',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0DB1AC',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF5859',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Operación exitosa!',
          'Se guardo correctamente el contacto',
          'success'
        );

        // navigate('/dash');
      }
    });
  }

  function buttonQuestion() {
    Swal.fire({
      imageUrl: iconDash.warning,
      imageHeight: 100,
      imageWidth: 100,
      text: '¿Esta seguro que desea cancelar el registro?',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0DB1AC',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF5859',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        return navigate('/dashboard');
      }
    });
  }
  return (
    <>
      <section className='w-full flex justify-between border-b-2 border-gray h-16 '>
        <div className='text-textgray1 font-medium ml-4 flex items-center'>
          <h4>Nuevo contacto</h4>
        </div>
        <div className='flex space-x-3 mr-8 items-center'>
          <button
            onClick={saveContact}
            className='rounded-md w-6 h-6 bg-primary flex items-center justify-center'>
            <img src={iconDash.checkButton} alt='check' />
          </button>
          <button
            onClick={buttonQuestion}
            className='rounded-md w-6 h-6 bg-danger flex items-center justify-center'>
            <img src={iconDash.cancelButton} alt='X' />
          </button>
        </div>
      </section>
      <section className='w-full flex flex-col items-center justify-center'>
        <div className='mt-5'>
          <button className='w-24 h-24 rounded-full bg-primary text-textwhite cursor-pointer '>
            OB
          </button>
        </div>
        <form className='mt-7 w-3/4'>
          {/* INPUT NAME */}
          <div>
            <label className={`label-required ${errors.name && 'span-alert'}`}>
              Nombre
            </label>
            <input
              autoComplete='off'
              type='text'
              className={`py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.name && 'input-danger'
              }`}
              {...register('name', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.name && (
              <span className='span-alert'>{errors.name.message}</span>
            )}
          </div>
          {/* INPUT POSITION */}
          <div className='mt-2'>
            <label
              className={`label-required ${errors.position && 'span-alert'}`}>
              Puesto
            </label>
            <input
              autoComplete='off'
              type='text'
              className={` py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.position && 'input-danger'
              }`}
              {...register('position', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.position && (
              <span className='span-alert'>{errors.position.message}</span>
            )}
          </div>
          {/* INPUT PHONE */}
          <div className='mt-2'>
            <label className={`label-required ${errors.phone && 'span-alert'}`}>
              Telefono
            </label>
            <input
              autoComplete='off'
              type='number'
              className={` py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.phone && 'input-danger'
              }`}
              {...register('phone', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.phone && (
              <span className='span-alert'>{errors.phone.message}</span>
            )}
          </div>
          {/* INPUT EMAIL */}
          <div className='mt-2'>
            <label className={`label-required ${errors.email && 'span-alert'}`}>
              Correo electrónico
            </label>
            <input
              autoComplete='off'
              type='email'
              className={` py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.email && 'input-danger'
              }`}
              {...register('email', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.email && (
              <span className='span-alert'>{errors.email.message}</span>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default AddContact;
