import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <div className="page__content">
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
