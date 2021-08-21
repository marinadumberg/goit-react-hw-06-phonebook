export const getContacts = state => state.phoneBook.contacts;

export const getFilter = state => state.phoneBook.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizeContacts = filter.toLowerCase();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizeContacts) ||
      contact.number.includes(filter),
  );
};