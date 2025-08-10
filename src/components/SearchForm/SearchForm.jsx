import './SearchForm.css';

function SearchForm() {
  return (
  <form className="search-form" role="search">
      <label htmlFor="news-search" className="search-form__label">Search news</label>
      <input
        id="news-search"
        name="news-search"
        type="search"
        className="search-form__input"
        placeholder="Enter topic"
      />
      <button type="submit" className="search-form__button">Search</button>
    </form>
  );
}

export default SearchForm;