import React, { useEffect, useState } from 'react';
import iconDash from '../../assets/iconDash';
import EditContact from './EditContact';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ViewContact({ setSearchContact, searchContact }) {
  const [sectionContact, setSectionContact] = useState(true);
  const [formAddContact, setFormAddContact] = useState(true);
  const [contactList, setContactList] = useState([]);
  const [contact, setContact] = useState([]);
  const [searchCont, setSearchCont] = useState('');
  const [contactId, setContactId] = useState([]);
  const [editUp, setEditUp] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  const handleShow = () => setSectionContact(!sectionContact);

  const handleEdit = () => setFormAddContact(!formAddContact);

  const handleSearch = () => setSearchContact(!searchContact);

  const handleChange = (event) => {
    setSearchCont(event.target.value);
    filter(event.target.value);
  };

  const filter = (mineOfSearch) => {
    let searchResult = contactList.filter((element) => {
      if (
        element.contact_name
          .toString()
          .toLowerCase()
          .includes(mineOfSearch.toLowerCase())
      ) {
        return element;
      }
    });
    setContact(searchResult);
  };

  function ContactDelete(id) {
    Swal.fire({
      imageUrl: iconDash.warning,
      imageHeight: 100,
      imageWidth: 100,
      text: `¿Esta seguro que desea eliminar el proveedor?`,
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#0DB1AC',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#FF5859',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        handleDeleteContact(id);
        navigate('/dashboard/dashboard');
      }
    });
  }

  useEffect(() => {
    const getContactList = () => {
      fetch(
        `https://dev.hubmine.mx/api/suppliers/contact/list?supplier-id=${id}`
      )
        .then((response) => response.json())
        .then((json) => {
          setContactList(json);
          setContact(json);
        });
    };
    getContactList();
    setEditUp(false);
  }, [editUp]);

  const getContactId = (id) => {
    fetch(
      `https://dev.hubmine.mx/api/suppliers/contact/details?contact-id=${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setContactId(json);
      });
  };

  const handleDeleteContact = (id) => {
    const requestInit = {
      method: 'DELETE',
    };

    fetch(
      `https://dev.hubmine.mx/api/suppliers/contact/delete/${id}/`,
      requestInit
    ).then((response) => {
      if (response.status !== 404) {
        Swal.fire(
          'Operación exitosa!',
          'Se elimino correctamente el contacto',
          'success'
        );
      } else {
        Swal.fire(
          'No se puede eliminar',
          'Al parecer tenemos problemas con nuestro servidor',
          'error'
        );
      }
    });
  };

  return (
    <>
      {!searchContact && (
        <nav className='flex items-center border-b-2 border-gray h-16'>
          <div className='ml-3 flex'>
            <button onClick={handleSearch}>
              <img src={iconDash.arrowLeft} alt='flecha izquierda' />
            </button>
          </div>
          <div className='w-36 xl:w-64 ml-4'>
            <span className='span-image'>
              <img src={iconDash.search} alt='lupa' />
            </span>
            <input
              value={searchCont}
              autoComplete='off'
              type='text'
              className='input-primary '
              placeholder='Buscar...'
              onChange={handleChange}
            />
          </div>
        </nav>
      )}
      {!contact.length ? (
        <div className='flex justify-center items-center h-2/4'>
          <h1 className='text-textgray font-bold text-2xl'>Sin contactos</h1>
        </div>
      ) : sectionContact ? (
        <>
          {contact.map((contactList) => (
            <section
              key={contactList.id}
              className='w-full flex justify-between items-center border-b-2 border-gray h-16'>
              <div className='flex ml-4 space-x-3'>
                <div className='flex justify-center items-center w-10 h-10 rounded-full bg-primary text-textwhite'>
                  <h6 className='uppercase'>{contactList.contact_name[0]}</h6>
                </div>
                <div>
                  <h4 className='capitalize text-sm font-semibold'>
                    {contactList.contact_name}
                  </h4>
                  <h5 className='capitalize text-xs font-normal text-textgray'>
                    {contactList.contact_position}
                  </h5>
                </div>
              </div>
              <div className='mr-8'>
                <button
                  onClick={() => {
                    getContactId(contactList.id);
                    handleShow();
                  }}>
                  <img src={iconDash.arrow1Right} alt='Flecha lado derecho ' />
                </button>
              </div>
            </section>
          ))}
        </>
      ) : (
        <section>
          <div className='w-full flex justify-between items-center border-b-2 border-gray h-16'>
            <button className='ml-4' onClick={handleShow}>
              <img src={iconDash.arrowLeft} alt='flecha izquierda' />
            </button>
            <div className='mr-8'>
              <button onClick={handleEdit} className='mr-6'>
                <img src={iconDash.pencil} alt='lapiz' />
              </button>
              <button
                onClick={() =>
                  ContactDelete(
                    contactId.map((id) => {
                      return id.id;
                    })
                  )
                }>
                <img
                  className='w-4'
                  src={iconDash.trashCanGrey}
                  alt='bote de basura'
                />
              </button>
            </div>
          </div>
          <section className='w-full flex flex-col items-center justify-center'>
            {formAddContact ? (
              <section className='mt-5 flex flex-col justify-center items-center'>
                <div className='w-24 h-24 rounded-full bg-primary flex justify-center items-center'>
                  <h1 className='text-textwhite uppercase text-4xl'>
                    {contactId.map(
                      (contactData) => contactData.contact_name[0]
                    )}
                  </h1>
                </div>
                <div className='mt-5 flex flex-col justify-center items-center'>
                  <h1 className='text-textblack font-bold text-xl capitalize'>
                    {contactId.map((contactData) => contactData.contact_name)}
                  </h1>
                  <h3 className='text-textblack font-semibold text-lg capitalize'>
                    {contactId.map(
                      (contactData) => contactData.contact_position
                    )}
                  </h3>
                </div>
                <div className='flex space-x-3 mt-10 w-72'>
                  <figure className='ml-5'>
                    <img src={iconDash.phone} alt='' />
                  </figure>
                  <article>
                    <p className='text-textblack'>
                      {contactId.map(
                        (contactData) => contactData.contact_phone
                      )}
                    </p>
                  </article>
                </div>
                <div className='flex space-x-3 mt-5 w-72 items-center'>
                  <figure className='ml-5'>
                    <img src={iconDash.emailGray} alt='' />
                  </figure>
                  <article>
                    <p className='text-textblack'>
                      {contactId.map(
                        (contactData) => contactData.contact_email
                      )}
                    </p>
                  </article>
                </div>
              </section>
            ) : (
              <EditContact
                setEditUp={setEditUp}
                contactId={contactId}
                setFormAddContact={setFormAddContact}
                formAddContact={formAddContact}
                setSectionContact={setSectionContact}
                sectionContact={sectionContact}
              />
            )}
          </section>
        </section>
      )}
    </>
  );
}

export default ViewContact;
