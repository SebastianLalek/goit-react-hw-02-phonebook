import css from './filter.module.css';

export default function Filter({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label className={css.label}>
        <p>Find your contact by name</p>
        <input type="text" name="filter" onChange={onChange} />
      </label>
    </form>
  );
}
