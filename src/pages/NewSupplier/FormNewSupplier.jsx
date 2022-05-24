import { useForm } from 'react-hook-form';

function FormNewSupplier({ disabledEdit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form className='mt-5 p-3 w-3/5'>
        <fieldset disabled={disabledEdit}>
          {/* INPUT PROVEEDOR */}
          <section>
            <label className={`label-required ${errors.name && 'span-alert'}`}>
              Nombre del proveedor
            </label>
            <div className=''>
              <input
                autoComplete='off'
                type='text'
                className={` py-3 pl-3 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
          </section>
          <section>
            <div className='flex space-x-12 mt-4'>
              <div className='flex justify-center items-center space-x-2'>
                <input
                  type='checkbox'
                  className='w-5 h-5 accent-primary border-transparent'
                />
                <label className='text-textblack'>Renta</label>
              </div>
              <div className='flex justify-center items-center space-x-3'>
                <input type='checkbox' className='w-5 h-5 accent-primary' />
                <label className='text-textblack'>Vende</label>
              </div>
            </div>
          </section>
          {/* INPUT TELEFONO */}
          <section className='flex space-x-6 justify-between items-center'>
            <div className='mt-3 w-2/5'>
              <label
                className={`label-required ${errors.phone && 'span-alert'}`}>
                Telefono
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='number'
                  className={` py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.phone && 'input-danger'
                  }`}
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                      maxLength: 10,
                    },
                    pattern: {
                      value: /[0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.phone && (
                  <span className='span-alert'>{errors.phone.message}</span>
                )}
              </div>
            </div>
            {/* INPUT CORREO ELECTRONICO */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.email && 'span-alert'}`}>
                Correo electrónico
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='email'
                  className={` py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
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
                {errors.phone && (
                  <span className='span-alert'>{errors.email.message}</span>
                )}
              </div>
            </div>
          </section>
          {/* INPUT FAX */}
          <section className='flex space-x-6 justify-between items-center'>
            <div className='mt-3 w-2/5'>
              <label className={`label-required ${errors.fax && 'span-alert'}`}>
                Fax
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='number'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.fax && 'input-danger'
                  }`}
                  {...register('fax', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                      maxLength: 10,
                    },
                    pattern: {
                      value: /[0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.fax && (
                  <span className='span-alert'>{errors.fax.message}</span>
                )}
              </div>
            </div>
            {/* INPUT RFC */}
            <div className='mt-3 w-3/5'>
              <label className={`label-required ${errors.rfc && 'span-alert'}`}>
                RFC
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='text'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.rfc && 'input-danger'
                  }`}
                  {...register('rfc', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[A-Z0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.phone && (
                  <span className='span-alert'>{errors.rfc.message}</span>
                )}
              </div>
            </div>
          </section>
          {/* INPUT COMPAMY */}
          <section className='mt-3'>
            <label
              className={`label-required ${errors.company && 'span-alert'}`}>
              Razón Social
            </label>
            <div className=''>
              <input
                autoComplete='off'
                type='text'
                className={` py-1 pl-3 w-full rounded-lg text-textblack text-lg border border-gray outline-none focus:outline-none focus:border-primary  ${
                  errors.company && 'input-danger'
                }`}
                {...register('company', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /^[A-Za-z.]+/,
                    message: 'El formato no es correcto',
                  },
                })}
              />
              {errors.name && (
                <span className='span-alert'>{errors.company.message}</span>
              )}
            </div>
          </section>
          {/* INPUT COUNTRY */}
          <section className='flex space-x-6 justify-between items-center'>
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.country && 'span-alert'}`}>
                País
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='text'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.country && 'input-danger'
                  }`}
                  {...register('country', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.country && (
                  <span className='span-alert'>{errors.country.message}</span>
                )}
              </div>
            </div>
            {/* INPUT STATE */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.state && 'span-alert'}`}>
                Estado
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='text'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.state && 'input-danger'
                  }`}
                  {...register('state', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.state && (
                  <span className='span-alert'>{errors.state.message}</span>
                )}
              </div>
              {/* INPUT CITY */}
            </div>
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.city && 'span-alert'}`}>
                Ciudad
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='text'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.city && 'input-danger'
                  }`}
                  {...register('city', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                    pattern: {
                      value: /[A-Z0-9]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.city && (
                  <span className='span-alert'>{errors.city.message}</span>
                )}
              </div>
            </div>
          </section>
          {/* INPUT ADDRESS */}
          <section className='mt-3'>
            <label
              className={`label-required ${errors.address && 'span-alert'}`}>
              Dirección
            </label>
            <div className=''>
              <input
                autoComplete='off'
                type='text'
                className={` py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                  errors.address && 'input-danger'
                }`}
                {...register('address', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                  },
                  pattern: {
                    value: /^[A-Za-z0-9.-]+/,
                    message: 'El formato no es correcto',
                  },
                })}
              />
              {errors.address && (
                <span className='span-alert'>{errors.address.message}</span>
              )}
            </div>
          </section>
        </fieldset>
      </form>
    </>
  );
}

export default FormNewSupplier;

// value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
