import "./NewsCard.css";

function NewsCard({ date, title, image, description, source, url }) {
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
        <img src={image || '/favicon.svg'} alt={title} className="news-card__image" />
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
