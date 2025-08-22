import { Link } from "react-router-dom";
import "./Navigation.css";
import menuIconWhite from "../../assets/menu-icon-white.svg";
import menuIconBlack from "../../assets/menu-icon-black.svg";
import modalCloseIcon from "../../assets/modal-close-icon.svg";

// import logoutIconWhite from "../../assets/logout-icon-white.svg";
// import logoutIconDark from "../../assets/logout-icon-black.svg";

function Navigation({
  isLoggedIn,
  userName,
  onSignIn,
  onSignOut,
  onLoginClick,
  onRegisterClick,
  isSavedNews,
  isMobileMenuOpened,
  toggleMobileMenu,
}) {
  return (
    <nav className={`nav${isSavedNews ? " nav--saved-news" : ""}`}>
      <div className="nav__container">
        <Link to="/" className="nav__logo-link">
          NewsExplorer
        </Link>
        <button
          className="nav__menu-button"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <img
            src={isSavedNews ? menuIconBlack : menuIconWhite}
            alt="Open menu"
            className="nav__menu-icon"
          />
        </button>
        <div className="nav__links nav__links--desktop">
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
                  className={`nav__button-icon${
                    isSavedNews ? " nav--saved-news" : ""
                  }`}
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
            <button className="nav__button" onClick={onLoginClick}>
              Sign In
            </button>
          )}
        </div>
      </div>
      {/* Mobile drawer (only visible when open) */}
      <div
        className={`nav__drawer${
          isMobileMenuOpened ? " nav__drawer--open" : ""
        } ${isLoggedIn || isSavedNews ? "nav__drawer--signed-in" : "nav__drawer--signed-out"}`}
      >
        <div className="nav__drawer-header">
          <Link to="/" className="nav__logo-link" onClick={toggleMobileMenu}>
            NewsExplorer
          </Link>
          <button
            className="nav__close-button"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <img src={modalCloseIcon} alt="Close menu"className="nav__menu-icon" />
          </button>
        </div>
        <ul className="nav__drawer-list">
          <li>
            <Link to="/" className="nav__drawer-item" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/saved-news" className="nav__drawer-item" onClick={toggleMobileMenu}>
                Saved News
              </Link>
            </li>
          )}
          <li>
            {isLoggedIn ? (
              <button
                className="nav__button"
                onClick={() => {
                  onSignOut();
                  toggleMobileMenu();
                }}
              >
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
            ) : (
              <button
                className="nav__button"
                onClick={() => {
                  onLoginClick();
                  toggleMobileMenu();
                }}
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
        {/* Close button (visible in mobile when menu is open) */}
        <button
          className="nav__close-button"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <img src={modalCloseIcon} alt="Close menu" className="nav__menu-icon" />
        </button>
      </div>
      {isMobileMenuOpened && (
        <div className="nav__overlay" onClick={toggleMobileMenu}></div>
      )}
    </nav>
  );
}

export default Navigation;
