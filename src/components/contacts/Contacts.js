export default function ContactList({ contacts, children, onClick }) {
  return (
    <>
      {children}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button id={contact.id} onClick={onClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
