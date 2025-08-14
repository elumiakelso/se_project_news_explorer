import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ articles, visibleCount, onShowMoreArticles, hasSearched, isLoading, error }) {
  return (
    <main className="main">
      {hasSearched && (
        <NewsCardList
          articles={articles}
          visibleCount={visibleCount}
          onShowMoreArticles={onShowMoreArticles}
          isLoading={isLoading}
          error={error}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
