import React from 'react';
import { useForm } from 'react-hook-form';

function UserCountry({ setFormData, formData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h1 className='text-textblack font-bold text-2xl'>¿Cuál es tu país?</h1>
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
          </select>
          {errors.country_id && (
            <span className='span-alert'>{errors.country_id.message}</span>
          )}
        </div>
      </div>
    </>
  );
}

export default UserCountry;
