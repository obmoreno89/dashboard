import React from 'react';
import iconDash from '../../assets/iconDash';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

function AddContact({ setPlusContact, plusContact }) {
  const { id } = useParams();
  const cookies = new Cookies();
  const userName = cookies.get('first_name');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  function saveContact(data) {
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
        newContact(data);
        reset();
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
        return setPlusContact(!plusContact);
      }
    });
  }

  async function newContact(data) {
    fetch(`https://dev.hubmine.mx/api/suppliers/contact/create/${id}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: 'Los datos del contacto se guardaron correctamente',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text: 'Nuestro servidor por el momento no esta disponible',
        });
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
            onClick={handleSubmit(saveContact)}
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
        <div className='mt-5 w-24 h-24 rounded-full bg-primary flex justify-center items-center'>
          <h1 className='text-textwhite text-3xl'>{`${userName[0]}`}</h1>
        </div>
        <form className='mt-7 w-3/4'>
          {/* INPUT NAME */}
          <div>
            <label className={`label-required ${errors.name && 'span-alert'}`}>
              Nombre completo
            </label>
            <input
              autoComplete='off'
              type='text'
              className={`py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
              <span className='span-alert'>{errors.contact_name.message}</span>
            )}
          </div>
          {/* INPUT POSITION */}
          <div className='mt-2'>
            <label
              className={`label-required ${
                errors.contact_position && 'span-alert'
              }`}>
              Puesto
            </label>
            <input
              autoComplete='off'
              type='text'
              className={` py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.contact_position && 'input-danger'
              }`}
              {...register('contact_position', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                  maxLength: 20,
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
          {/* INPUT PHONE */}
          <div className='mt-2'>
            <label
              className={`label-required ${
                errors.contact_phone && 'span-alert'
              }`}>
              Telefono
            </label>
            <input
              autoComplete='off'
              type='number'
              className={` py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
              <span className='span-alert'>{errors.contact_phone.message}</span>
            )}
          </div>
          {/* INPUT EMAIL */}
          <div className='mt-2'>
            <label
              className={`label-required ${
                errors.contact_email && 'span-alert'
              }`}>
              Correo electrónico
            </label>
            <input
              autoComplete='off'
              type='email'
              className={` py-2 pl-2 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                errors.contact_email && 'input-danger'
              }`}
              {...register('contact_email', {
                required: {
                  value: true,
                  message: 'El campo es requerido',
                  maxLength: 30,
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'El formato no es correcto',
                },
              })}
            />
            {errors.contact_email && (
              <span className='span-alert'>{errors.contact_email.message}</span>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default AddContact;
