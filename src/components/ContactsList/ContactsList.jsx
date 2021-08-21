import React from 'react';
import s from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '../../redux/contacts/contactActions';
import { getVisibleContacts } from '../../redux/contacts/contactsSelectors';
// import { IoIosContact } from 'react-icons/io';
import { TiDeleteOutline } from 'react-icons/ti';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(contactActions.deleteContact(id));

  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <p className={s.contactDescription}>
            {/* <IoIosContact className={s.icon} /> */}
            {name}: {number}
          </p>
          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            <TiDeleteOutline className={s.icon} />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactsList;