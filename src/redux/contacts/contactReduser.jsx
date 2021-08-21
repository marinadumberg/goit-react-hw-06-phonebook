import { combineReducers } from 'redux';
import actions from './contactActions';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const addContact = (state, { payload }) => {
  if (state.find(contact => contact.number === payload.number)) {
    
    toast.error(`🤷🏼‍♀️ '${payload.number}' is in your list`);
    return state;
  }
  if (
    state.find(
      contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
    )
  ) {
    toast.error(` 🤷🏼‍♀️ '${payload.name}' is in your list`);
    return state;
  }
  toast.success(` ☎️ '${payload.name}' added to phonebook`);
  return [...state, payload];
};

const deleteContact = (state, { payload }) => {
  toast(` 🗑 Contact deleted`);
  return state.filter(cont => cont.id !== payload);
};

const contacts = createReducer([], {
  [actions.addContact]: addContact,
  [actions.deleteContact]: deleteContact,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});
export default combineReducers({
  contacts,
  filter,
});