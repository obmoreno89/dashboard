import React from 'react';

function ListSupplier() {
  return (
    <>
      <table className='w-full'>
        <thead>
          <tr className=''>
            <th className='text-header'>ID</th>
            <th className='text-header'>PROVEEDOR</th>
            <th className='text-header'>TELÉFONO</th>
            <th className='text-header'>PAÍS</th>
            <th className='text-header'>ESTADO</th>
          </tr>
        </thead>
        <tbody>
          <tr className=' w-20 text-center bg-secondary rounded-3xl'>
            <td className=''>00000002</td>
            <td>Pedrera San Angel</td>
            <td>81X9XX4X05</td>
            <td>México</td>
            <td>Nuevo León</td>
          </tr>
          <tr className='text-center'>
            <td>00000001</td>
            <td>Triturados El Roble</td>
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
