
import { v4 as unId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contacts/Add', ({ name, number }) => {
  return {
    payload: {
      id: unId(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/ChangeFilter');

const configs = {addContact, deleteContact, changeFilter}



export default configs;