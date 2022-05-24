import { useState } from 'react';
import pencil from '../../assets/iconDash';
import FormNewSupplier from '../NewSupplier/FormNewSupplier';

function FormSupplierEdit() {
  const [disabledEdit, setDisabledEdit] = useState(true);
  return (
    <>
      <div className='w-full h-14 flex justify-end items-center'>
        <button
          onClick={() => setDisabledEdit(!disabledEdit)}
          className='relative right-10'>
          <img src={pencil.pencil} alt='lapiz' />
        </button>
      </div>
      <section className='w-full flex justify-center'>
        <FormNewSupplier
          disabledEdit={disabledEdit}
          setDisabledEdit={setDisabledEdit}
        />
      </section>
    </>
  );
}

export default FormSupplierEdit;
