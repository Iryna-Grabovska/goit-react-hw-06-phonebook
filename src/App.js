import { useEffect } from 'react';
// import React, { Component } from 'react';
// import { useDispatch } from 'react-redux';
// import { formSubmithandle } from 'store/contactsSlice';
import Section from './components/Section';
import Form from './components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
// import { configureStore } from './store/store';
// import shortid from 'shortid';
// console.log(configureStore);
export default function App() {
  // const [contacts, setContacts] = useState(
  //   [],
  //   //   // () => {
  //   //   // return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  //   //   // }
  // );
  // const [filter, setFilter] = useState('');

  // const addContacts = () => {
  //   dispatch(formSubmithandle([]));
  // };
  useEffect(() => {
    //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, []);

  // const formSubmithandle = data => {
  // data.id = shortid.generate();
  //   setContacts(contacts => [...contacts, data]);
  //   if (contacts.find(contact => contact.name === data.name)) {
  //     alert(`${data.name} is already on contacts`);
  //     return;
  //   }
  //   if (data.name === '') {
  //     alert(`please, write the name from the contacts`);
  //     return;
  //   }
  //   if (data.number === '') {
  //     alert(`please, write the name from the number`);
  //   }
  // };
  // const visibleContacts = () => {

  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const deleteContact = contactId => {
  //   // setContacts(prevState =>
  //   //   prevState.filter(contact => contact.id !== contactId),
  //   // );
  // };

  return (
    <>
      <Section title="Phonebook">
        <Form />
        {/* <Form onSubmit={addContacts} /> */}
      </Section>
      <Section title="Contacts">
        {/* <Filter value={filter} onChange={changeFilter} /> */}
        <Filter />
        <ContactsList
        // contacts={visibleContacts()}
        // onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
}
