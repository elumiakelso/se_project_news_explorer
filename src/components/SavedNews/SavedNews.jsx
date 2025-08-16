import Navigation from "../Navigation/Navigation.jsx";
import "./SavedNews.css";

function SavedNews() {
  return (
    <>
      <Navigation isLoggedIn={true} userName="John Doe" />
      <section className="saved-news">
        <h2>Saved News</h2>
        <p>This is the Saved News page.</p>
      </section>
    </>
  );
}
export default SavedNews;