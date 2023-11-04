export default function Filter({ onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Find your contact by name</p>
        <input type="text" name="filter" onChange={onChange} />
      </label>
    </form>
  );
}
