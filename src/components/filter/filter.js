export default function Filter(filter) {
  return (
    <form>
      <label>
        <p>Find your contact by name</p>
        <input type="text" name="name" onChange={filter} />
      </label>
    </form>
  );
}
