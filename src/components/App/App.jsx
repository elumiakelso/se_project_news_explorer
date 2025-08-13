import { useState } from 'react';

import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

import { fetchNewsArticles } from '../../utils/newsApi.js';

function App() {
  const [articles, setArticles] = useState([]); // All articles
  const [visibleCount, setVisibleCount] = useState(3); // How many to show
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error message

  const handleSearch = (query) => {
    setIsLoading(true);
    setError(null);

    fetchNewsArticles(query)
      .then (data => {
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          setError("No articles found for this query.");
        }
      })
      .catch(err => {
        setError("An error occurred while fetching articles.");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onShowMoreArticles = () => {
    // setVisibleCount(prev => prev + 3);
    setVisibleCount(visibleCount + 3);
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header onSearch={handleSearch} />
        <Main articles={articles} visibleCount={visibleCount} onShowMoreArticles={onShowMoreArticles} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
