export default function ContactList({ contacts, children }) {
  return (
    <>
      {children}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </>
  );
}
