import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/ContactsForm';
import { Filter } from 'components/Filter';

export function App() {
  
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const id = nanoid();
      const key = localStorage.key(i);
      const contact = {
        name: key,
        number: localStorage.getItem(key),
        id: id,
      };
      storedContacts.push(contact);
    }
    setContacts(storedContacts);
  }, []);

  const createContact = (evt) => {
    evt.preventDefault();
    const temporalName = evt.target.elements.name.value;
    const temporalNumber = evt.target.elements.number.value;
    if (
      !contacts.filter((check) =>
        check.name.toLowerCase().includes(temporalName.toLowerCase()) ||
        check.number.includes(temporalNumber)
      ).length
    ) {
      const id = nanoid();
      const contact = {
        name: temporalName,
        number: temporalNumber,
        id: id,
      };
      localStorage.setItem(temporalName, temporalNumber);
      setContacts((prevContacts) => [...prevContacts, contact]);
    } else {
      alert(evt.target.elements.name.value + ' already in contacts');
      return 0;
    }
  };

  const deleteItem = (e) => {
    const updatedContacts = contacts.filter((el) => el.id !== e.target.parentNode.id);
    localStorage.removeItem(e.target.parentNode.textContent.slice(0, -16));
    setContacts(updatedContacts);
  };

  return (
    <>
      <Contacts createContact={createContact} />
      <Filter contacts={contacts} deleteItem={deleteItem} />
    </>
  );
}