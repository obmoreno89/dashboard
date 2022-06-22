import iconDash from '../../assets/iconDash';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

function EditContact({
  setFormAddContact,
  formAddContact,
  contactId,
  setEditUp,
  sectionContact,
  setSectionContact,
}) {
  let idOfContact = contactId.map((id) => {
    return id.id;
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleEdit = () => setFormAddContact(!formAddContact);

  const handleShow = () => setSectionContact(!sectionContact);

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
        updateContact(data);
        handleEdit();
        handleShow();
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
        handleEdit();
        handleShow();
      }
    });
  }

  const updateContact = (data) => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/contact/update/${idOfContact}/`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    ).then((response) => {
      if (response.status === 200) {
        Swal.fire(
          'Operación exitosa!',
          'El contacto se actualizo correctamente',
          'success'
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text: 'Nuestro servidor por el momento no esta disponible',
        });
      }
      setEditUp(true);
    });
  };

  return (
    <>
      <section className='w-full flex justify-between border-b-2 border-gray h-16 '>
        <div className='text-textgray1 font-medium ml-4 flex items-center'>
          <h4>Editar contacto</h4>
        </div>
        <div className='flex space-x-3 mr-6 items-center'>
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
        <div className='mt-5'>
          <div className='w-24 h-24 rounded-full bg-primary text-textwhite flex justify-center items-center'>
            <h1 className='capitalize text-3xl'>
              {contactId.map((nameContact) => {
                return nameContact.contact_name[0];
              })}
            </h1>
          </div>
        </div>
        <form className='mt-7 w-3/4'>
          {/* INPUT NAME */}
          <div>
            <label className={`label-required ${errors.name && 'span-alert'}`}>
              Nombre
            </label>
            <input
              defaultValue={contactId.map((data) => data.contact_name)}
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
              defaultValue={contactId.map((data) => data.contact_position)}
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
              defaultValue={contactId.map((data) => data.contact_phone)}
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
              defaultValue={contactId.map((data) => data.contact_email)}
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

export default EditContact;
