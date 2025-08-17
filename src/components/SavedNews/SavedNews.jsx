import "./SavedNews.css";
import Navigation from "../Navigation/Navigation.jsx";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  articles,
  // visibleCount,
  // onShowMoreArticles,
  isLoading,
  error,
  isLoggedIn,
  userName,
  onSignIn,
  onSignOut,
}) {
  return (
    <>
      <Navigation
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        isSavedNews={true}
      />
      <header className="saved-news__header">
        <div className="saved-news__header-container">
          <div className="saved-news__content">
            <h2 className="saved-news__title">Saved articles</h2>
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
          // visibleCount={visibleCount}
          // onShowMoreArticles={onShowMoreArticles}
          isLoading={isLoading}
          error={error}
          isSavedNews={true}
        />
    </>
  );
}
export default SavedNews;
