import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="SearchBar">
      <h3>Where to?</h3>

      <div className="SearchBar__options">
        <div className="searchForm">
          <label> Starting Location</label>
          <input type="text" />
        </div>

  
        <div className="searchForm">
          <label> Select Dates </label>
            <input type="date" />
        </div>

        <div className="searchForm">
        <input className="searchForm__date" type="date" />
        </div>

        <div className="searchForm">
          <label> Travelers </label>
          <select>
            <option> Adults </option>
            <option> Adults </option>
          </select>
        </div>

        <div className="searchForm">
          <button> Search </button>
        </div>

      </div>
    </div>
  );
}

export default SearchBar;
