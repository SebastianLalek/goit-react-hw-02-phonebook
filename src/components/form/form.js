import { nanoid } from 'nanoid';

export default function Form({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        id={nanoid()}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
      <button>Add contact</button>
    </form>
  );
}
