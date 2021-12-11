import s from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { deleteContact, visibleContacts } from 'store/contactsSlice';

const ContactsList = () => {
  // const visibleContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  // const contacts = visibleContacts;
  console.log(contacts);
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.contactsListItem}>
            <span> {name}: </span>
            <span>{number}</span>
          </li>
        ))}
      </ul>
      <button
        className={s.contactListBtn}
        type="button"
        onClick={() => dispatch(deleteContact)}
      >
        Delete
      </button>
    </>
  );
};
export default ContactsList;

// const { filter, items } = useSelector(state => state.contacts);
// const visibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase().trim();

//   return items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };
// const contacts = dispatch(visibleContacts);
