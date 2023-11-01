import { Component } from "react";

import { nanoid } from "nanoid";


import ContactList from "./contacts/Contacts";
import Form from "./form/form";
import Section from "./section/section";
import Filter from "./filter/filter";

class Phonebook extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
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

  // filter = () => {

  // }

  render() {
    return (
      <div>
        <Section title="Phonebook">
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
      <ContactList contacts={this.state.contacts}>
        <Filter onChange={this.filter} />
      </ContactList>
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
