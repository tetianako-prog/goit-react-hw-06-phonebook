import React from 'react';
import { v4 } from 'uuid';
import ContactList from './Contacts';
import ContactForm from './Form';
import Filter from './Filter';

const App = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </>
);

export default App;
