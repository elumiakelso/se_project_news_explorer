import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({
  articles,
  visibleCount,
  onShowMoreArticles,
  hasSearched,
  isLoading,
  error,
  isLoggedIn,
  isSavedNews,
  onSaveArticle,
  onDeleteArticle,
  savedArticles,
}) {
  return (
    <main className="main">
      {hasSearched && (
        <NewsCardList
          articles={articles}
          visibleCount={visibleCount}
          onShowMoreArticles={onShowMoreArticles}
          isLoading={isLoading}
          error={error}
          isLoggedIn={isLoggedIn}
          isSavedNews={isSavedNews}
          onSaveArticle={onSaveArticle}
          onDeleteArticle={onDeleteArticle}
          savedArticles={savedArticles}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
