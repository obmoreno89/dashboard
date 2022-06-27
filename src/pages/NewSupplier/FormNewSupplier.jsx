import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import iconDash from '../../assets/iconDash';
import Cookies from 'universal-cookie';

function FormNewSupplier() {
  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState('');
  const [st, setSt] = useState([]);
  const [stateId, setStateId] = useState('');
  const [city, setCity] = useState([]);

  const cookies = new Cookies();
  const supplierId = cookies.get('id');

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const handleCountry = (event) => {
    const getCountryId = event.target.value;
    setCountryId(getCountryId);
  };

  const handleState = (event) => {
    const getStateId = event.target.value;
    setStateId(getStateId);
  };

  function newSupplier(data) {
    Swal.fire({
      imageUrl: iconDash.warning,
      imageHeight: 100,
      imageWidth: 100,
      text: `¿Esta seguro que desea guardar el registro?`,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0DB1AC',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF5859',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        newSupp(data);
        reset();
      }
    });
  }

  function buttonQuestion(event) {
    event.preventDefault();
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

  async function newSupp(data) {
    fetch(`https://dev.hubmine.mx/api/suppliers/create/${supplierId}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      // reset();
      if (response.msg !== 'Ok') {
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: 'Los datos del proveedor se guardaron correctamente',
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

  useEffect(() => {
    const getCountry = async () => {
      const resCountry = await fetch(
        'https://dev.hubmine.mx/api/suppliers/list-countries'
      );
      const rescon = await resCountry.json();
      setCountry(await rescon);
    };
    getCountry();
  }, []);

  useEffect(() => {
    const getState = async () => {
      const resState = await fetch(
        `https://dev.hubmine.mx/api/suppliers/list-states?country-id=${countryId}`
      );
      const resst = await resState.json();
      setSt(await resst);
    };
    getState();
  }, [countryId]);

  useEffect(() => {
    const getCity = async () => {
      const resCity = await fetch(
        `https://dev.hubmine.mx/api/suppliers/list-cities?state-id=${stateId}`
      );
      const rCity = await resCity.json();
      setCity(await rCity);
    };
    getCity();
  }, [stateId]);

  return (
    <>
      <form onSubmit={handleSubmit(newSupplier)} className='mt-5 p-3 w-3/5'>
        <fieldset>
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
                  type='checkbox'
                  className='w-5 h-5 accent-primary border-transparent'
                  {...register('rent', {})}
                />
                <label className='text-textblack'>Renta</label>
              </div>
              <div className='flex justify-center items-center space-x-3'>
                <input
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
          {/* INPUT CONTACT NAME */}
          <section className='mt-3'>
            <label
              className={`label-required ${
                errors.contact_name && 'span-alert'
              }`}>
              Nombre completo del contacto
            </label>
            <div>
              <input
                autoComplete='off'
                type='text'
                className={`capitalize py-3 pl-3 w-full rounded-lg text-2xl text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
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
                <span className='span-alert'>
                  {errors.contact_name.message}
                </span>
              )}
            </div>
          </section>
          {/* INPUT CONTACT PHONE */}
          <section className='flex space-x-6 justify-between items-center'>
            <div className='mt-3 w-2/5'>
              <label
                className={`label-required ${
                  errors.contact_phone && 'span-alert'
                }`}>
                Telefono
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='number'
                  className={` py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
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
                  <span className='span-alert'>
                    {errors.contact_phone.message}
                  </span>
                )}
              </div>
            </div>
            {/* INPUT CONTACT EMAIL */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${
                  errors.contact_email && 'span-alert'
                }`}>
                Correo electrónico
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='email'
                  className={`lowercase py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
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
                  <span className='span-alert'>
                    {errors.contact_email.message}
                  </span>
                )}
              </div>
            </div>
            {/* INPUT CONTACT POSITION */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${
                  errors.contact_position && 'span-alert'
                }`}>
                Puesto del contacto
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='text'
                  className={`capitalize py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
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
            </div>
          </section>

          {/* INPUT COUNTRY */}
          <section className='flex space-x-6 justify-between items-center'>
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${
                  errors.country_id && 'span-alert'
                }`}>
                País
              </label>
              <div>
                <select
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                    errors.country_id && 'input-danger'
                  }`}
                  {...register('country_id', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}
                  onChange={(e) => handleCountry(e)}>
                  <option value=''>Selecciona</option>
                  {country.map((countryList) => (
                    <option key={countryList.id} value={countryList.id}>
                      {countryList.country}
                    </option>
                  ))}
                </select>
                {errors.country_id && (
                  <span className='span-alert'>
                    {errors.country_id.message}
                  </span>
                )}
              </div>
            </div>
            {/* INPUT STATE */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.state_id && 'span-alert'}`}>
                Estado
              </label>
              <div>
                <select
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                    errors.state_id && 'input-danger'
                  }`}
                  {...register('state_id', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}
                  onChange={(e) => handleState(e)}>
                  <option value=''>Selecciona</option>
                  {st.map((stateList) => (
                    <option key={stateList.id} value={stateList.id}>
                      {stateList.state}
                    </option>
                  ))}
                </select>
                {errors.state_id && (
                  <span className='span-alert'>{errors.state_id.message}</span>
                )}
              </div>
            </div>
            {/* INPUT CITY */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.city_id && 'span-alert'}`}>
                Ciudad
              </label>
              <div>
                <select
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary ${
                    errors.city_id && 'input-danger'
                  }`}
                  {...register('city_id', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                    },
                  })}>
                  <option value=''>Selecciona</option>
                  {city.map((cityList) => (
                    <option key={cityList.id} value={cityList.id}>
                      {cityList.city}
                    </option>
                  ))}
                </select>
                {errors.city_id && (
                  <span className='span-alert'>{errors.city_id.message}</span>
                )}
              </div>
            </div>
            {/* INPUT POSTAL CODE */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${
                  errors.postal_code && 'span-alert'
                }`}>
                Codigo postal
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='number'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.postal_code && 'input-danger'
                  }`}
                  {...register('postal_code', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                      maxLength: 15,
                    },
                  })}
                />
                {errors.postal_code && (
                  <span className='span-alert'>
                    {errors.postal_code.message}
                  </span>
                )}
              </div>
            </div>
          </section>
          {/* INPUT DIRECTION */}
          <section className='mt-3'>
            <label
              className={`label-required ${errors.direction && 'span-alert'}`}>
              Dirección
            </label>
            <div className=''>
              <input
                autoComplete='off'
                type='text'
                className={` py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                  errors.direction && 'input-danger'
                }`}
                {...register('direction', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                    maxLength: 50,
                  },
                })}
              />
              {errors.direction && (
                <span className='span-alert'>{errors.direction.message}</span>
              )}
            </div>
          </section>
          {/* INPUT EXTERIOR NUM */}
          <section className='flex space-x-6 justify-between items-center'>
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${
                  errors.exterior_num && 'span-alert'
                }`}>
                Numero exterior
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='number'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.exterior_num && 'input-danger'
                  }`}
                  {...register('exterior_num', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                      maxLength: 15,
                    },
                  })}
                />
                {errors.exterior_num && (
                  <span className='span-alert'>
                    {errors.exterior_num.message}
                  </span>
                )}
              </div>
            </div>
            {/* INPUT INTERIOR NUM */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${
                  errors.interior_num && 'span-alert'
                }`}>
                Numero interior
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='number'
                  className={` py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.interior_num && 'input-danger'
                  }`}
                  {...register('interior_num', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                      maxLength: 15,
                    },
                  })}
                />
                {errors.interior_num && (
                  <span className='span-alert'>
                    {errors.interior_num.message}
                  </span>
                )}
              </div>
            </div>
            {/* INPUT COLONY */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.colony && 'span-alert'}`}>
                Colonia
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='text'
                  className={`capitalize py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.colony && 'input-danger'
                  }`}
                  {...register('colony', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                      maxLength: 25,
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.colony && (
                  <span className='span-alert'>{errors.colony.message}</span>
                )}
              </div>
            </div>
            {/* INPUT LOCALITY */}
            <div className='mt-3 w-3/5'>
              <label
                className={`label-required ${errors.locality && 'span-alert'}`}>
                Localidad
              </label>
              <div>
                <input
                  autoComplete='off'
                  type='text'
                  className={`capitalize py-1 pl-3 w-full rounded-lg text-lg text-textblack border border-gray outline-none focus:outline-none focus:border-primary  ${
                    errors.locality && 'input-danger'
                  }`}
                  {...register('locality', {
                    required: {
                      value: true,
                      message: 'El campo es requerido',
                      maxLength: 15,
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: 'El formato no es correcto',
                    },
                  })}
                />
                {errors.locality && (
                  <span className='span-alert'>{errors.locality.message}</span>
                )}
              </div>
            </div>
          </section>
          {/* INPUT OBSERVATIONS */}
          <section className='mt-3'>
            <label
              className={`label-required ${
                errors.observations && 'span-alert'
              }`}>
              Observaciones
            </label>
            <div>
              <input
                autoComplete='off'
                type='text'
                className={` py-1 pl-3 w-full rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                  errors.observations && 'input-danger'
                }`}
                {...register('observations', {
                  required: {
                    value: true,
                    message: 'El campo es requerido',
                    maxLength: 50,
                  },
                })}
              />
              {errors.observations && (
                <span className='span-alert'>
                  {errors.observations.message}
                </span>
              )}
            </div>
            {/* INPUT LONGITUDE */}
            <section className='flex justify-between items-center'>
              <div className='mt-3'>
                <label
                  className={`label-required ${
                    errors.longitude && 'span-alert'
                  }`}>
                  Longitud
                </label>
                <div>
                  <input
                    autoComplete='off'
                    type='number'
                    className={` py-1 pl-3 flex flex-col rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                      errors.longitude && 'input-danger'
                    }`}
                    {...register('longitude', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                        maxLength: 10,
                      },
                    })}
                  />
                  {errors.longitude && (
                    <span className='span-alert'>
                      {errors.longitude.message}
                    </span>
                  )}
                </div>
              </div>
              {/* INPUT LATITUDE */}
              <div className='mt-3'>
                <label
                  className={`label-required ${
                    errors.latitude && 'span-alert'
                  }`}>
                  Latitud
                </label>
                <div>
                  <input
                    autoComplete='off'
                    type='number'
                    className={`flex flex-col py-1 pl-3 rounded-lg text-lg border text-textblack border-gray outline-none focus:outline-none focus:border-primary  ${
                      errors.latitude && 'input-danger'
                    }`}
                    {...register('latitude', {
                      required: {
                        value: true,
                        message: 'El campo es requerido',
                      },
                    })}
                  />
                  {errors.latitude && (
                    <span className='span-alert'>
                      {errors.latitude.message}
                    </span>
                  )}
                </div>
              </div>
            </section>
          </section>
          <div className='w-full flex flex-row space-x-3 items-center justify-center h-40'>
            <button type='submit' className='button-secondary bg-primary'>
              Guardar
            </button>
            <button
              onClick={buttonQuestion}
              className='button-secondary bg-danger'>
              Cancelar
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default FormNewSupplier;
