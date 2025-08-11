import './Main.css';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
  return (
    <main className="main">
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;