import './Navigation.css';

function Navigation() {
  return (
  <nav className="nav">
    <div className="nav__container">
      <a href='/' className="nav__logo-link">NewsExplorer</a>
      <div className="nav__links">
        <a href='/' className="nav__item">Home</a>
        <button className="nav__button">Sign In</button>
      </div>
    </div>
  </nav>
  );
}

export default Navigation;