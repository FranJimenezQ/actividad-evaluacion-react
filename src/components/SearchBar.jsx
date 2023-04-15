import './SearchBar.css'

function SearchBar({ keyword, onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="div-search mb-3">
      <input
        className="BarStyle form-control"
        key="search-bar"
        value={keyword}
        placeholder={"Search by author name..."}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
