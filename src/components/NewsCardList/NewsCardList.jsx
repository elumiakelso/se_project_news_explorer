import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        <h2 className="news-card-list__title">Search results</h2>
        <ul className="news-card-list__list">
          <NewsCard
            title="Everyone Needs a Special 'Sit Spot' in Nature"
            image="https://reactjs.org/logo-og.png"
            description="Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..."
            source="React Blog"
          />
          <NewsCard
            title="JavaScript Trends 2025"
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            description="Discover the latest trends in JavaScript for 2025."
            source="JavaScript Weekly"
          />
          <NewsCard
            title="Frontend Best Practices"
            image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            description="Tips and tricks for building modern web apps."
            source="Frontend Masters"
          />
        </ul>
      </div>
    </section>
  );
}

export default NewsCardList;
