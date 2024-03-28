const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        type="text"
        name="searchBox"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </>
  );
};

export default SearchBox;
