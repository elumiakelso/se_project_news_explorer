import "./NewsCard.css";

function NewsCard({
  article,
  date,
  title,
  image,
  description,
  source,
  url,
  keyword,
  isLoggedIn,
  isSavedNews,
  isSaved,
  onSaveArticle,
  onDeleteArticle,
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleRemove = () => {
    onDeleteArticle(article._id);
  };

  const handleSave = () => {
    onSaveArticle(article);
  };

  return (
    <li className="news-card">
      <div className="news-card__actions">
        {isSavedNews ? (
          <>
            <div className="news-card__keyword-label">
              {keyword || article.keyword}
            </div>
            <button
              className="news-card__remove-button"
              onClick={handleRemove}
            ></button>
            <div role="tooltip" className="news-card__tooltip">
              Remove from saved
            </div>
          </>
        ) : (
          <>
            <button
              className={`news-card__save-button${isLoggedIn ? " news-card__save-button_active" : ""}${isSaved ? " news-card__save-button_saved" : ""}`}
              onClick={handleSave}
              disabled={!isLoggedIn}
            ></button>
            {!isLoggedIn && (
            <div role="tooltip" className="news-card__tooltip">
              Sign in to save articles
            </div>
            )}
          </>
        )}
      </div>
      <a href={url}>
        <img
          src={image || "/favicon.svg"}
          alt={title}
          className="news-card__image"
        />
        <div className="news-card__content">
          <p className="news-card__date">{formatDate(date)}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__description">{description}</p>
          <p className="news-card__source">{source}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
