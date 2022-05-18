import React from 'react';
import { useForm } from 'react-hook-form';

function FormNewSupplier() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form className='mt-10 p-3 w-1/2'>
        <label className={`label-required ${errors.email && 'span-alert'}`}>
          Correo Electrónico
        </label>
        <div className=''>
          <input
            autoComplete='off'
            type='email'
            className={` py-3 pl-3 w-full rounded-lg text-2xl border border-gray outline-none focus:outline-none focus:border-primary  ${
              errors.email && 'input-danger'
            }`}
            {...register('email', {
              required: {
                value: true,
                message: 'El campo es requerido',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'El formato no es correcto',
              },
            })}
          />
          {errors.email && (
            <span className='span-alert'>{errors.email.message}</span>
          )}
        </div>
        <div>
          <label class='inline-flex items-center mt-3'>
            <input
              type='checkbox'
              class='form-checkbox h-5 w-5 text-teal-600'
              checked
            />
            <span class='ml-2 text-gray-700'>label</span>
          </label>
        </div>
        <div>
          <label class='inline-flex items-center mt-3'>
            <input
              type='checkbox'
              class='form-checkbox h-5 w-5 text-teal-600'
              checked
            />
            <span class='ml-2 text-gray-700'>label</span>
          </label>
        </div>
      </form>
    </>
  );
}

export default FormNewSupplier;
