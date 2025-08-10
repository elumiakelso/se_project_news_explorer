import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';

function Header() {
  return <header className="header">
    <Navigation />
    <section className="header__container">
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__subtitle">Find the latest news on any topic and save them in your personal account.</p>
    </section>
    <SearchForm />
  </header>;
}

export default Header;