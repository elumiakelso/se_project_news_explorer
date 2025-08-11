import "./NewsCard.css";

function NewsCard({ title, image, description, source }) {
  return (
    <li className="news-card">
      <a href="#">
        <img src={image} alt={title} className="news-card__image" />
        <div className="news-card__content">
          <p className="news-card__date">{new Date().toLocaleDateString()}</p>
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source}</p>
      </div>
      </a>
    </li>
  );
}

export default NewsCard;
