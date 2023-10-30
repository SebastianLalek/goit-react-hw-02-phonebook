import { Component } from "react";

import ContactList from "./contacts/Contacts";

class Phonebook extends Component {
  
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <ContactList contacts={this.state.contacts} />
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
