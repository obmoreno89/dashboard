import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import iconDash from '../../assets/iconDash';

function FormSupplierEdit() {
  const [disabledEdit, setDisabledEdit] = useState(true);
  const [suppData, setSuppData] = useState([]);
  const navigate = useNavigate();
  const submit = (data) => console.log(data);

  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function buttonCancel(event) {
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

  useEffect(() => {
    const getSuppId = () => {
      fetch(`https://dev.hubmine.mx/api/suppliers/details?supplier-id=${id}`)
        .then((response) => response.json())
        .then((json) => {
          setSuppData(json);
        });
    };
    getSuppId();
  }, [id]);

  return (
    <>
      <section>
        <div className='flex h-20 w-full items-center p-8'>
          <div className='w-full flex items-center justify-end'>
            <button onClick={() => setDisabledEdit(!disabledEdit)}>
              <img src={iconDash.pencil} alt='lapiz' />
            </button>
          </div>
        </div>
        <section className='w-full flex justify-center'>
          <form onSubmit={handleSubmit(submit)} className='mt-5 p-3 w-3/5'>
            <fieldset disabled={disabledEdit}>
              {/* INPUT SUPPLIER */}
              <section>
                <label
                  className={`label-required ${
                    errors.supplier_name && 'span-alert'
                  }`}>
                  Nombre del proveedor
                </label>
                <div>
                  <input
                    defaultValue={suppData.map((data) => data.supplier_name)}
                    autoComplete='off'
                    type='text'
                    className={`uppercase py-3 pl-3 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
              <section className='flex space-x-6 justify-between items-center'>
                <div className='mt-3 w-2/5'>
                  <label
                    className={`label-required ${
                      errors.supplier_phone && 'span-alert'
                    }`}>
                    Telefono
                  </label>
                  <div>
                    <input
                      defaultValue={suppData.map((data) => data.supplier_phone)}
                      autoComplete='off'
                      type='number'
                      className={` py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
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
                <div className=' mt-3 w-3/5'>
                  <label
                    className={`label-required ${
                      errors.supplier_email && 'span-alert'
                    }`}>
                    Correo electrónico
                  </label>
                  <div>
                    <input
                      defaultValue={suppData.map((data) => data.supplier_email)}
                      autoComplete='off'
                      type='email'
                      className={`lowercase py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
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
              {/* CHECKBOX */}
              <section>
                <div className='flex space-x-12 mt-4'>
                  <div className='flex justify-center items-center space-x-2'>
                    <input
                      defaultChecked={suppData.map((data) => data.rent)}
                      type='checkbox'
                      className='w-5 h-5 accent-primary border-transparent'
                      {...register('rent', {})}
                    />
                    <label className='text-textblack'>Renta</label>
                  </div>
                  <div className='flex justify-center items-center space-x-3'>
                    <input
                      defaultChecked={suppData.map((data) => data.sale)}
                      type='checkbox'
                      className='w-5 h-5 accent-primary'
                      {...register('sale', {})}
                    />
                    <label className='text-textblack'>Vende</label>
                  </div>
                </div>
              </section>
              {/* INPUT FAX */}
              <section className='flex space-x-6 justify-between items-center'>
                <div className='mt-3 w-2/5'>
                  <label className={`${errors.supplier_fax && 'span-alert'}`}>
                    Fax
                  </label>
                  <div>
                    <input
                      defaultValue={suppData.map((data) => data.supplier_fax)}
                      autoComplete='off'
                      type='number'
                      className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                        errors.supplier_fax && 'input-danger'
                      }`}
                      {...register('supplier_fax', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                          maxLength: 13,
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.supplier_fax && (
                      <span className='span-alert'>
                        {errors.supplier_fax.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* INPUT RFC */}
                <div className='mt-3 w-3/5'>
                  <label
                    className={`label-required ${
                      errors.supplier_rfc && 'span-alert'
                    }`}>
                    RFC
                  </label>
                  <div>
                    <input
                      defaultValue={suppData.map((data) => data.supplier_rfc)}
                      autoComplete='off'
                      type='text'
                      className={`uppercase py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                        errors.supplier_rfc && 'input-danger'
                      }`}
                      {...register('supplier_rfc', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                          maxLength: 13,
                        },
                        pattern: {
                          value: /[a-zA-Z0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.supplier_rfc && (
                      <span className='span-alert'>
                        {errors.supplier_rfc.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* INPUT SOCIAL REASON */}
                <div className='mt-3 w-3/5'>
                  <label
                    className={`label-required ${
                      errors.supplier_social_reason && 'span-alert'
                    }`}>
                    Razon social del proveedor
                  </label>
                  <div>
                    <input
                      defaultValue={suppData.map(
                        (data) => data.supplier_social_reason
                      )}
                      autoComplete='off'
                      type='text'
                      className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                        errors.supplier_social_reason && 'input-danger'
                      }`}
                      {...register('supplier_social_reason', {
                        required: {
                          value: true,
                          message: 'El campo es requerido',
                          min: 13,
                        },
                        pattern: {
                          value: /[a-zA-Z0-9]/,
                          message: 'El formato no es correcto',
                        },
                      })}
                    />
                    {errors.supplier_social_reason && (
                      <span className='span-alert'>
                        {errors.supplier_social_reason.message}
                      </span>
                    )}
                  </div>
                </div>
              </section>
              {!disabledEdit && (
                <div className='w-full flex flex-row space-x-3 items-center justify-center h-40'>
                  <button type='submit' className='button-secondary bg-primary'>
                    Guardar
                  </button>
                  <button
                    onClick={buttonCancel}
                    className='button-secondary bg-danger'>
                    Cancelar
                  </button>
                </div>
              )}
            </fieldset>
          </form>
        </section>
      </section>
    </>
  );
}

export default FormSupplierEdit;