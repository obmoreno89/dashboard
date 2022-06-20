import React from 'react';
import Swal from 'sweetalert2';
import iconDash from '../../assets/iconDash';

function DeleteContact({ setDeleteContact, deleteContact }) {
  function deleteContact() {
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
          'Se eliminó correctamente el contacto',
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
        return setDeleteContact(!deleteContact);
      }
    });
  }

  return (
    <>
      <section className='w-full flex justify-between border-b-2 border-gray h-16 '>
        <div className='text-textgray1 font-medium ml-4 flex items-center'>
          <h4>Eliminar Contacto</h4>
        </div>
        <div className='flex space-x-3 mr-8 items-center'>
          <button
            onClick={deleteContact}
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
    </>
  );
}

export default DeleteContact;
