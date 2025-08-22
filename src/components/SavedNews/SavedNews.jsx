import "./SavedNews.css";
import Navigation from "../Navigation/Navigation.jsx";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  articles,
  isLoading,
  error,
  isLoggedIn,
  userName,
  onSignIn,
  onSignOut,
  onLoginClick,
  onRegisterClick,
  onDeleteArticle,
  isMobileMenuOpened,
  toggleMobileMenu,
}) {
  return (
    <>
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        isSavedNews={true}
        isMobileMenuOpened={isMobileMenuOpened}
        toggleMobileMenu={toggleMobileMenu}
      />
      <header className="saved-news__header">
        <div className="saved-news__header-container">
          <div className="saved-news__content">
            <h1 className="saved-news__title">Saved articles</h1>
            <p className="saved-news__subtitle">
              Elise, you have 5 saved articles
            </p>
            <p className="saved-news__keywords">
              By keywords:{" "}
              <span className="saved-news__keywords saved-news__keywords--bold">
                Nature, Yellowstone, and 2 other
              </span>
            </p>
          </div>
        </div>
      </header>
        <NewsCardList
          articles={articles}
          isLoading={isLoading}
          error={error}
          isSavedNews={true}
          isLoggedIn={isLoggedIn}
          onDeleteArticle={onDeleteArticle}
        />
    </>
  );
}
export default SavedNews;
