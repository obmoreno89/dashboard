import React from 'react';

function ListSupplier() {
  function hola() {
    console.log('hola');
  }

  return (
    <>
      <table className='w-full mt-4'>
        <thead>
          <tr className='h-5'>
            <th className='text-header'>ID</th>
            <th className='text-header'>PROVEEDOR</th>
            <th className='text-header'>TELÉFONO</th>
            <th className='text-header'>PAÍS</th>
            <th className='text-header'>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onClick={hola}
            className=' w-full h-10 border-y-2 border-gray1 text-center cursor-pointer text-textblack hover:bg-secondary'>
            <td>00000002</td>
            <td>Pedrera San Angel</td>
            <td>81X9XX4X05</td>
            <td>México</td>
            <td>Nuevo León</td>
          </tr>
          <tr className=' w-full h-10 border-y-2 border-gray1 text-center cursor-pointer text-textblack hover:bg-secondary'>
            <td className=''>00000002</td>
            <td>Pedrera San Angel</td>
            <td>81X9XX4X05</td>
            <td>México</td>
            <td>Nuevo León</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ListSupplier;
