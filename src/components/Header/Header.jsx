import { useLocation } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function Header({ onSearch, isLoggedIn, userName, onSignIn, onSignOut }) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  return (
    <header className={isSavedNews ? "header header--saved-news" : "header"}>
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        isSavedNews={isSavedNews}
      />
      {!isSavedNews && (
        <div className="header__content">
          <section className="header__container">
            <h1 className="header__title">What's going on in the world?</h1>
            <p className="header__subtitle">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
          </section>
          <SearchForm onSearch={onSearch} />
        </div>
      )}
      {isSavedNews && (
        <div className="header--saved-news__content">
          <section className="header--saved-news__container">
            <h2 className="header--saved-news__title">Saved articles</h2>
            <p className="header--saved-news__subtitle">
              Elise, you have 5 saved articles
            </p>
            <p className="header--saved-news__keywords">
              By keywords: <span className="header--saved-news__keywords header--saved-news__keywords--bold">Nature, Yellowstone, and 2 other</span>
            </p>
          </section>
        </div>
      )}
    </header>
  );
}

export default Header;
