import React from 'react';
import Swal from 'sweetalert2';
import iconDash from '../../assets/iconDash';

function DeleteContact({
  setSectionContact,
  sectionContact,
  contactId,
  setEditUp,
}) {
  function ContactDelete(id) {
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
        handleDeleteContact(id);
        handleShow();
      }
    });
  }

  const handleDeleteContact = (id) => {
    const requestInit = {
      method: 'DELETE',
    };

    fetch(
      `https://dev.hubmine.mx/api/suppliers/contact/delete/${id}/`,
      requestInit
    ).then((response) => {
      if (response.status !== 404) {
        Swal.fire(
          'Operación exitosa!',
          'Se elimino correctamente el contacto',
          'success'
        );
      } else {
        Swal.fire(
          'No se puede eliminar',
          'Al parecer tenemos problemas con nuestro servidor',
          'error'
        );
      }
      setEditUp(true);
    });
  };

  const handleShow = () => setSectionContact(!sectionContact);

  return (
    <>
      <button
        button='button'
        onClick={() =>
          ContactDelete(
            contactId.map((id) => {
              return id.id;
            })
          )
        }>
        <img className='w-4' src={iconDash.trashCanGrey} alt='bote de basura' />
      </button>
    </>
  );
}

export default DeleteContact;
