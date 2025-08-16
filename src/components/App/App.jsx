import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";

import { fetchNewsArticles } from "../../utils/newsApi.js";

function App() {
  const [articles, setArticles] = useState([]); // All articles
  const [visibleCount, setVisibleCount] = useState(3); // How many articles to show
  const [hasSearched, setHasSearched] = useState(false); // No search results yet
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error message
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <Header onSearch={handleSearch} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  articles={articles}
                  visibleCount={visibleCount}
                  onShowMoreArticles={onShowMoreArticles}
                  hasSearched={hasSearched}
                  isLoading={isLoading}
                  error={error}
                />
              }
            />
            <Route path="/saved-news" element={<SavedNews />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
