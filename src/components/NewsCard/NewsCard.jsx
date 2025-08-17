import "./NewsCard.css";

function NewsCard({
  date,
  title,
  image,
  description,
  source,
  url,
  isSavedNews,
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <li className="news-card">
      <a href={url}>
        <img
          src={image || "/favicon.svg"}
          alt={title}
          className="news-card__image"
        />
        {isSavedNews ? (
          <>
            <div className="news-card__keyword-label">Keyword</div>
            <button className="news-card__remove-button"></button>
            <div role="tooltip" className="news-card__tooltip">
              Remove from saved
            </div>
          </>
        ) : (
          <>
            <button className="news-card__save-button"></button>
            <div role="tooltip" className="news-card__tooltip">
              Sign in to save articles
            </div>
          </>
        )}
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
