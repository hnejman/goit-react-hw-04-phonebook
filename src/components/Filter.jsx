import PropTypes from 'prop-types';
import { ContactList } from './ContactList';
import { useState } from 'react';

export const Filter = ({contacts, deleteItem}) => {
  
  const [searchBy, search] = useState('');

    return (
      <div>
        <h2>Contacts</h2>
        <input type="text" onChange={evt=>{
          search(evt.target.value);
          }} />
        <ContactList 
        contacts={contacts} 
        searchBy={searchBy} 
        deleteItem={deleteItem}/>
      </div>
    );
}

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  deleteItem: PropTypes.func.isRequired
  }