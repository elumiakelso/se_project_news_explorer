import { useState } from "react";

import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

import { fetchNewsArticles } from "../../utils/newsApi.js";

function App() {
  const [articles, setArticles] = useState([]); // All articles
  const [visibleCount, setVisibleCount] = useState(3); // How many articles to show
  const [hasSearched, setHasSearched] = useState(false); // No search results yet
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error message

  const handleSearch = (query) => {
    setHasSearched(true);
    setIsLoading(true);
    setError(null);

    fetchNewsArticles(query)
      .then((data) => {
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          setError("No articles found for this query.");
          setArticles([]);
        }
      })
      .catch((err) => {
        setError("An error occurred while fetching articles.");
        console.error(err);
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onShowMoreArticles = () => {
    setVisibleCount(visibleCount + 3);
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header onSearch={handleSearch} />
        <Main
          articles={articles}
          visibleCount={visibleCount}
          onShowMoreArticles={onShowMoreArticles}
          hasSearched={hasSearched}
          isLoading={isLoading}
          error={error}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
