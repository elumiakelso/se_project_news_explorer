import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, userName, onSignIn, onSignOut }) {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link to="/" className="nav__logo-link">
          NewsExplorer
        </Link>
        <div className="nav__links">
          <Link to="/" className="nav__item">
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/saved-news" className="nav__item">
                Saved News
              </Link>
              <button className="nav__button" onClick={onSignOut}>
                {userName || "User"}
              </button>
            </>
          ) : (
            <button className="nav__button" onClick={onSignIn}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
