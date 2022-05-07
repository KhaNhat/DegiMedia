import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import About from './components/about/about.js';
import Services from './components/services/services.js';
import GlobelStyle from './components/globelStyle/globelstyle.js';
import Freequote from './components/freequote/freequote.js';
import Portfolio from './components/portfolio/portfolio.js';
import Blog from './components/blog/blog.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <GlobelStyle>
      <Header />
      <Banner />
      <About />
      <Services />
      <Freequote />
      <Portfolio />
      <Blog />
    </GlobelStyle>
  )
}

export default App;
