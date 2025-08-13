import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ articles, visibleCount, onShowMoreArticles }) {
  return (
    <main className="main">
      <NewsCardList articles={articles} visibleCount={visibleCount} onShowMoreArticles={onShowMoreArticles} />
      <About />
    </main>
  );
}

export default Main;
