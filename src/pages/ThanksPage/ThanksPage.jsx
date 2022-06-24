import React from 'react';
import logo from '../../assets/logo';
import imagePlantLg from '../../assets/img/imagePlantLg.png';
import { useNavigate } from 'react-router-dom';

function ThanksPage() {
  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/dashboard');
  };
  return (
    <section
      className='flex flex-col justify-center items-center'
      style={{
        backgroundImage: `url(${imagePlantLg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
      }}>
      <figure>
        <img className='w-96' src={logo.hubmineLogoWhite} alt='logo' />
      </figure>
      <article className='flex flex-col justify-center items-center mt-5'>
        <h1 className='text-textwhite text-3xl font-bold'>
          Gracias por llenar el formulario
        </h1>
        <p className='mt-2 text-textwhite text-xl'>
          El equipo de hubmine se pondra en contacto.
        </p>
      </article>
      <div className='mt-4'>
        <button
          onClick={returnHome}
          type='button'
          className='bg-secondary font-bold text-primary w-80  p-3 rounded-lg text-xl cursor-pointer'>
          Pagina principal
        </button>
      </div>
    </section>
  );
}

export default ThanksPage;
