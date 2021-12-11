import s from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { deleteContact, visibleContacts } from 'store/contactsSlice';
import shortid from 'shortid';

const ContactsList = () => {
  const visibleContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  // shortid.generate();
  // const { filter, items } = useSelector(state => state.contacts);
  // const visibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase().trim();

  //   return items.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );
  // };
  // const contacts = dispatch(visibleContacts);
  const contacts = visibleContacts;
  console.log(contacts);
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
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
