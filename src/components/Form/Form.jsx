import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import contactActions from '../../redux/contacts/contactActions';
import s from './Form.module.css';
// import { IoIosPersonAdd } from 'react-icons/io';

const FormHooks = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const nameInputId = shortid.generate();
  const numInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(contactActions.addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          <input
            className={s.formInput}
            placeholder="Name"
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
          />
        </label>

        <label htmlFor={numInputId}>
          <input
            className={s.formInput}
            placeholder="Tel"
            id={numInputId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
        </label>
        <button className={s.formBtn} type="submit">
          {/* <IoIosPersonAdd className={s.icon} /> */}
          Add contact
        </button>
      </form>
    </div>
  );
};

export default FormHooks;