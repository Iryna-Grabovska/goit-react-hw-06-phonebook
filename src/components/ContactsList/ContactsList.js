import s from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { deleteContact } from 'store/contactsSlice';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filterContact = useSelector(state => state.filterContact);

  const visibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <>
      <ul>
        {visibleContacts().map(({ id, name, number }) => (
          <li key={id} className={s.contactsListItem}>
            <span> {name}: </span>
            <span>{number}</span>
            <button
              className={s.contactListBtn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactsList;
