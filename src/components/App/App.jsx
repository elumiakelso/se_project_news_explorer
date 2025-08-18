import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

import { fetchNewsArticles } from "../../utils/newsApi.js";

function App() {
  const [articles, setArticles] = useState([]); // All articles
  const [visibleCount, setVisibleCount] = useState(3); // How many articles to show
  const [hasSearched, setHasSearched] = useState(false); // No search results yet
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error message
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const mockSavedArticles = [
    {
      title: "Test Article 1",
      image: "https://via.placeholder.com/400x272",
      description: "This is a test description.",
      source: "Test Source",
      url: "https://example.com",
      publishedAt: "2025-08-16T12:00:00Z",
    },
    {
      title: "Test Article 2",
      image: "https://via.placeholder.com/400x272",
      description: "Another test description.",
      source: "Another Source",
      url: "https://example.com/2",
      publishedAt: "2025-08-15T10:00:00Z",
    },
    {
      title: "Test Article 1",
      image: "https://via.placeholder.com/400x272",
      description: "This is a test description.",
      source: "Test Source",
      url: "https://example.com",
      publishedAt: "2025-08-16T12:00:00Z",
    },
    {
      title: "Test Article 2",
      image: "https://via.placeholder.com/400x272",
      description: "Another test description.",
      source: "Another Source",
      url: "https://example.com/2",
      publishedAt: "2025-08-15T10:00:00Z",
    },
  ];

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setUserName("User"); // Replace with actual user name from login response
  };

  const onClose = () => {
    setActiveModal("");
  };

  const handleLoginModalSubmit = ({ email, password }) => {
    Promise.resolve({ userName: email })
    .then((res) => {
      setIsLoggedIn(true);
      setUserName(res.userName);
      onClose();
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserName(null);
  };

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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    onSearch={handleSearch}
                    isLoggedIn={isLoggedIn}
                    userName={userName}
                    onSignIn={handleSignIn}
                    onSignOut={handleSignOut}
                    onLoginClick={handleLoginClick}
                    onRegisterClick={handleRegisterClick}
                  />
                  <Main
                    articles={articles}
                    visibleCount={visibleCount}
                    onShowMoreArticles={onShowMoreArticles}
                    hasSearched={hasSearched}
                    isLoading={isLoading}
                    error={error}
                  />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    isLoggedIn={true}
                    userName={userName}
                    onSignOut={handleSignOut}
                    onLoginClick={handleLoginClick}
                    onRegisterClick={handleRegisterClick}
                    articles={mockSavedArticles}
                    // visibleCount={visibleCount}
                    // onShowMoreArticles={onShowMoreArticles}
                    isLoading={isLoading}
                    error={error}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
        <LoginModal
            isOpen={activeModal === "login"}
            onClose={onClose}
            onLoginModalSubmit={handleLoginModalSubmit}
            onAltAction={handleRegisterClick}
          />
      </div>
    </BrowserRouter>
  );
}

export default App;
