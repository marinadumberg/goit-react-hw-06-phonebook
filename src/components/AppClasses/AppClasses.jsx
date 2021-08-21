import React, { Component } from 'react';
import Section from '../Section/Section';
import FormHooks from '../Form/FormClasses';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';


export default class App extends Component {
  state = {

  };

  isInList = (contact, contacts) =>
    contacts.find(cont =>
      cont.name.toLocaleLowerCase().includes(contact.name.toLocaleLowerCase()),
    );

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <FormHooks />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      </div>
    );
  }
}