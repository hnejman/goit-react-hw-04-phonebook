import PropTypes from 'prop-types';
import { ContactList } from './ContactList';
import { Component } from 'react';

export class Filter extends Component {
  state = {
    searchBy : ""
  }

constructor(){
  super();
  this.search.bind(this);
}

  search = evt =>{
    const searchBy = evt.target.value;
    this.setState(()=>({
      searchBy : searchBy
    }))
  };

  render(){
    return (
      <div>
        <h2>Contacts</h2>
        <input type="text" onChange={evt=>{
          this.search(evt)
          }} />
        <ContactList 
        contacts={this.props.contacts} 
        searchBy={this.state.searchBy} 
        deleteItem={this.props.deleteItem}/>
      </div>
    );
  }
}

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  searchBy: PropTypes.string,
  deleteItem: PropTypes.func
  }