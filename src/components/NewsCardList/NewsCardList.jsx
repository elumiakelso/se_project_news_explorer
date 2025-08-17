import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";

import notfound from "../../assets/not-found_v1.svg";

function NewsCardList({
  articles,
  visibleCount,
  onShowMoreArticles,
  isLoading,
  error,
  isSavedNews
}) {
  return (
    <section className="news-card-list">
      <div className={`news-card-list__container ${isSavedNews ? "news-card-list__container--saved-news" : ""}`}>
        {isLoading && <Preloader />}
        {!isLoading &&
          error &&
          error != "No articles found for this query." && (
            <div className="news-card-list__error">
              <p className="news-card-list__error-message">
                Sorry, something went wrong during the request. Please try again
                later.
                {console.error(error)}
              </p>
            </div>
          )}
        {!isLoading &&
          articles.length === 0 &&
          error &&
          error == "No articles found for this query." && (
            <div className="news-card-list__not-found">
              <img
                src={notfound}
                alt="No results found"
                className="news-card-list__not-found__image"
              />
              <p className="news-card-list__not-found__title">Nothing found</p>
              <p className="news-card-list__not-found__message">
                Sorry, but nothing matched your search terms.
              </p>
            </div>
          )}
        {!isLoading && articles.length > 0 && (
          <>
            {!isSavedNews && (
              <h2 className="news-card-list__title">Search results</h2>
            )}
            <ul className="news-card-list__list">
              {console.log(articles.length)}
              {articles.slice(0, visibleCount).map((article, index) => (
                <NewsCard
                  key={index}
                  date={article.publishedAt}
                  title={article.title}
                  image={article.urlToImage}
                  description={article.description}
                  source={article.source.name}
                  url={article.url}
                  isSavedNews={isSavedNews}
                />
              ))}
            </ul>
            {visibleCount < articles.length && (
              <button
                className="news-card-list__button"
                onClick={onShowMoreArticles}
              >
                Show more
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
