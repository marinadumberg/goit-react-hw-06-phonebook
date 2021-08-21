import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { getFilter } from '../../redux/contacts/contactsSelectors';
import contactActions from '../../redux/contacts/contactActions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      <input
        className={s.filterInput}
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={e => dispatch(contactActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;