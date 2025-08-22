import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (evt) => {
    setSearchValue(evt.target.value);
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchValue) {
      setErrorMessage("Please enter a search term");
      return;
    }
    onSearch(searchValue);
  };

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <label htmlFor="news-search" className="search-form__label">
        Search news
      </label>
      <input
        id="news-search"
        name="news-search"
        type="search"
        className="search-form__input"
        placeholder="Enter topic"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
