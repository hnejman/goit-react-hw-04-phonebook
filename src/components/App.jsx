import { useState, useEffect } from 'react';
import { ContactsForm } from './ContactsForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';

export function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log("component mounted");  
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    console.log("component rendered")
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (contacts.length === 0) {
      localStorage.removeItem('contacts')
    }
  }, [contacts]);

  const createContact = evt => {
    evt.preventDefault();
    const temporalName = evt.target.elements.name.value;
    const temporalNumber = evt.target.elements.number.value;
    if (
      !contacts.filter(
        check => check.name.toLowerCase() === temporalName.toLowerCase()
      ).length
    ) {
      const id = nanoid();
      const contact = {
        name: temporalName,
        number: temporalNumber,
        id: id,
      };
      setContacts(prevContacts => [...prevContacts, contact]);
    } else {
      alert(evt.target.elements.name.value + ' already in contacts');
    }
    evt.target.reset();
  };

  const deleteItem = e => {
    const updatedContacts = contacts.filter(
      el => el.id !== e.target.parentNode.id
    );
    setContacts(updatedContacts);
  };

  return (
    <>
      <ContactsForm createContact={createContact} />
      <Filter contacts={contacts} deleteItem={deleteItem} />
    </>
  );
}
