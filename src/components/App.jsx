import { Component } from "react";


import ContactList from "./contacts/Contacts";
import { nanoid } from "nanoid";

class Phonebook extends Component {
  
  state = {
    contacts: [],
    name: ''
  }

  inputId = () => nanoid();

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
<form onSubmit={this.handleSubmit}>
<input
  type="text"
  name="name"
  id={this.inputId()}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.handleChange}
/>
<button>Add contact</button>
</form>

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
