import { Component } from "react";


export class Contacts extends Component {

  
    render(){
        return(
            <>
            <h2>Phonebook</h2>
            <form onSubmit={evt=>{this.props.createContact(evt)}}>
              <label>Name</label><br/>
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              /><br/>
              <label>Number</label><br/>
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              /><br/>
              <button type="submit">Add contact</button>
            </form>
            </> 
        )
    }
}