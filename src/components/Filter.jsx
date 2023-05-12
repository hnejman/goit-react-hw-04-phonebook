import { Component } from 'react';

export class Filter extends Component {
  state = {
    contacts: [],
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
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={evt=>{
          this.search(evt)
          }} />
        <ul>
        { 
          this.props.contacts.map(ele => {
            console.log(ele.id)
            if(ele.name.toLowerCase().includes(this.state.searchBy.toLowerCase()) ||
            ele.number.includes(this.state.searchBy)){
            return(
              <li key={ele.id} id={ele.id}>
                {ele.name + ': ' + ele.number}
                <button onClick={e=>{this.props.deleteItem(e)}}>delete</button>
              </li>)
            }else{
              return "";
            }
          })}
        </ul> 
      </>
    );
  }
}
