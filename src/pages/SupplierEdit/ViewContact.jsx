import React, { useState } from 'react';
import iconDash from '../../assets/iconDash';

function ViewContact() {
  const [prueba, setPrueba] = useState(true);

  return (
    <>
      {prueba ? (
        <section className='w-full flex justify-between items-center border-b-2 border-gray h-16'>
          <div className='flex ml-4 space-x-2'>
            <div className='flex justify-center items-center w-10 h-10 rounded-full bg-primary text-textwhite cursor-pointer '>
              <h6>OB</h6>
            </div>
            <div>
              <h4 className='text-sm font-semibold'>Omar Barragán</h4>
              <h5 className='text-xs font-normal text-textgray'>Gerente</h5>
            </div>
          </div>
          <div className='mr-8'>
            <button onClick={() => setPrueba(!prueba)}>
              <img src={iconDash.arrow1Right} alt='Flecha lado derecho ' />
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default ViewContact;
