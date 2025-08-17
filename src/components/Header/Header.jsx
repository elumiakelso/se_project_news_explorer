import { useLocation } from "react-router-dom";

import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function Header({ onSearch, isLoggedIn, userName, onSignIn, onSignOut }) {
  const location = useLocation();

  return (
    <header className="header">
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
      />
        <div className="header__content">
          <div className="header__container">
            <h1 className="header__title">What's going on in the world?</h1>
            <p className="header__subtitle">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
          </div>
          <SearchForm onSearch={onSearch} />
        </div>
    </header>
  );
}

export default Header;
