import { Component } from "react";


import ContactList from "./contacts/Contacts";
import Form from "./form/form";

class Phonebook extends Component {
  
  state = {
    contacts: [],
    name: ''
  }

  handleChange = e => {
    const {name, value, id} = e.target;
    this.setState({[name]: value, id:id})
  }

  handleSubmit = e => {
    e.preventDefault();

    const name =this.state.name;
    const id = this.state.id;
    
    const contact = {
      name: name,
      id: id
    }

    this.setState({
      contacts: [...this.state.contacts, contact]
    })
  }

  render() {
    return (
      <div>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />

      <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook />
    </div>
  );
};
