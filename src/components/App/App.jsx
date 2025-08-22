import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  getItems,
  saveArticle,
  deleteArticle,
  checkResponse,
} from "../../utils/api.js";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "./../RegisterModal/RegisterModal";
import RegisterConfirmationModal from "../RegisterConfirmationModal/RegisterConfirmationModal.jsx";
import * as auth from "../../utils/auth.js";
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
  const [isRegisterConfirmationOpen, setIsRegisterConfirmationOpen] =
    useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  // const [token, setToken] = useState(null);

  // const mockSavedArticles = [
  //   {
  //     title: "Test Article 1",
  //     image: "https://via.placeholder.com/400x272",
  //     description: "This is a test description.",
  //     source: "Test Source",
  //     url: "https://example.com",
  //     publishedAt: "2025-08-16T12:00:00Z",
  //   },
  //   {
  //     title: "Test Article 2",
  //     image: "https://via.placeholder.com/400x272",
  //     description: "Another test description.",
  //     source: "Another Source",
  //     url: "https://example.com/2",
  //     publishedAt: "2025-08-15T10:00:00Z",
  //   },
  //   {
  //     title: "Test Article 1",
  //     image: "https://via.placeholder.com/400x272",
  //     description: "This is a test description.",
  //     source: "Test Source",
  //     url: "https://example.com",
  //     publishedAt: "2025-08-16T12:00:00Z",
  //   },
  //   {
  //     title: "Test Article 2",
  //     image: "https://via.placeholder.com/400x272",
  //     description: "Another test description.",
  //     source: "Another Source",
  //     url: "https://example.com/2",
  //     publishedAt: "2025-08-15T10:00:00Z",
  //   },
  // ];

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setUserName(res.userName);
  };

  const onClose = () => {
    setActiveModal("");
    setIsRegisterConfirmationOpen(false);
  };

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      return;
    }
    saveArticle(article)
      .then((savedArticle) => {
        setSavedArticles((prev) => [...prev, savedArticle]);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (articleId) => {
    deleteArticle(articleId)
      .then(() => {
        setSavedArticles((prev) =>
          prev.filter((item) => item._id !== articleId)
        );
      })
      .catch(console.error);
  };

  const handleLoginModalSubmit = (email, password) => {
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          return auth.checkToken(res.token);
        }
        throw new Error("No token received");
      })
      .then((userData) => {
        // setCurrentUser(userData);
        setUserName(userData.data.name);
        onClose();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegisterModalSubmit = (email, password, userName) => {
    auth
      .register(email, password, userName)
      .then((res) => {
        onClose();
        setIsRegisterConfirmationOpen(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegisterConfirmation = () => {
    setIsRegisterConfirmationOpen(false);
    setActiveModal("login");
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
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

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      auth
        .checkToken(jwt)
        .then((userData) => {
          setIsLoggedIn(true);
          // setCurrentUser(userData);
          setUserName(userData.data.name);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    // Add this to load example saved articles on mount
    getItems().then((items) => setSavedArticles(items));
  }, []);

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
                    isLoggedIn={isLoggedIn}
                    savedArticles={savedArticles}
                    onSaveArticle={handleSaveArticle}
                    onDeleteArticle={handleDeleteArticle}
                  />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews
                    articles={savedArticles}
                    isLoading={isLoading}
                    error={error}
                    isLoggedIn={true}
                    userName={userName}
                    onSignIn={handleSignIn}
                    onSignOut={handleSignOut}
                    onLoginClick={handleLoginClick}
                    onRegisterClick={handleRegisterClick}
                    onDeleteArticle={handleDeleteArticle}
                    // articles={mockSavedArticles}
                    // visibleCount={visibleCount}
                    // onShowMoreArticles={onShowMoreArticles}
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
        <RegisterModal
          isOpen={activeModal === "register"}
          onClose={onClose}
          onRegisterModalSubmit={handleRegisterModalSubmit}
          onAltAction={handleLoginClick}
        />
        <RegisterConfirmationModal
          isOpen={isRegisterConfirmationOpen}
          onClose={onClose}
          onRegisterConfirmation={handleRegisterConfirmation}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
