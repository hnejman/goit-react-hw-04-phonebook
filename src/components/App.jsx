import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';

export class App extends Component {

  state = {
    contacts: []
  }

componentDidMount(){
  const contacts = [];
  for (let i = 0; i < localStorage.length; i++){  
   const id = nanoid(); 
   let key = localStorage.key(i);
   const contact = {
     name: key,
     number: localStorage.getItem(key),
     id: id
   }
   contacts.push(contact);
  };
  this.setState({contacts});
}

  createContact = evt => {
    evt.preventDefault();
    const temporalName = evt.target.elements.name.value;
    const temporalNumber = evt.target.elements.number.value;
    if (
        !this.state.contacts.filter(check => {
          return (
            check.name
              .toLowerCase()
              .includes(temporalName.toLowerCase()) ||
            check.number.includes(temporalNumber)
          );
        }).length
    ) {
      const id = nanoid();
      const contact = {
        name: temporalName,
        number: temporalNumber,
        id: id,
      };
      localStorage.setItem(temporalName, temporalNumber);
      this.setState(prev => ({
        contacts: prev.contacts.concat(contact)
      }));
    } else {
      alert(evt.target.elements.name.value + ' already in contacts');
      return 0;
    }
  }

  deleteItem = e => {
    const contacts = this.state.contacts.filter(el => {
      return el.id !== e.target.parentNode.id;
    });
    localStorage.removeItem( e.target.parentNode.textContent.slice(0, -16));
    this.setState({ contacts });
  };

  render() {
    return (
      <>
        <Contacts createContact={this.createContact}/>
        <Filter contacts={this.state.contacts} deleteItem={this.deleteItem}/>
      </>
    );
  }
}
