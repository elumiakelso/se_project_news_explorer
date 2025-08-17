import { Link } from "react-router-dom";
import "./Navigation.css";

// import logoutIconWhite from "../../assets/logout-icon-white.svg";
// import logoutIconDark from "../../assets/logout-icon-black.svg";

function Navigation({ isLoggedIn, userName, onSignIn, onSignOut, isSavedNews }) {
  return (
    <nav className={`nav${isSavedNews ? " nav--saved-news" : ""}`}>
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
                <svg
                  className={`nav__button-icon${isSavedNews ? " nav--saved-news" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
                    fill="currentColor"
                  />
                </svg>
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
