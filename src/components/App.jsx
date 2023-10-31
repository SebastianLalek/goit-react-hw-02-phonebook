import { Component } from "react";

import { nanoid } from "nanoid";


import ContactList from "./contacts/Contacts";
import Form from "./form/form";
import Section from "./section/section";

class Phonebook extends Component {
  
  state = {
    contacts: [],
    name: ''
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({[name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();

    const name = this.state.name;
    const number = this.state.number
    const id = this.state.id;
    
    const contact = {
      name: name,
      number:number,
      id: nanoid()
    }

    this.setState({
      contacts: [...this.state.contacts, contact]
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Section title="Phonebook">
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
      <ContactList contacts={this.state.contacts} />
      </Section>
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
