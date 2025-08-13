import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, visibleCount, onShowMoreArticles }) {
  const totalArticles = articles.length;

  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        <h2 className="news-card-list__title">Search results</h2>
        <ul className="news-card-list__list">
          {articles.slice(0, visibleCount).map((article, index) => (
            <NewsCard
              key={index}
              date={article.publishedAt}
              title={article.title}
              image={article.urlToImage}
              description={article.description}
              source={article.source.name}
              url={article.url}
            />
          ))}
        </ul>
        {visibleCount < totalArticles && (
          <button className="news-card-list__button" onClick={onShowMoreArticles}>
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
