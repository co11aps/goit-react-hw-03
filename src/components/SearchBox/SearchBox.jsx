const SearchBox = ({ value, onFilter, onReset }) => {
  return (
    <>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        type="text"
        name="searchBox"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        ref={focus}
      />
      <button onClick={onReset}>Reset</button>
    </>
  );
};

export default SearchBox;
