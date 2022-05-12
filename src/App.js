import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import About from './components/about/about.js';
import Services from './components/services/services.js';
import GlobelStyle from './components/globelStyle/globelstyle.js';
import Freequote from './components/freequote/freequote.js';
import Portfolio from './components/portfolio/portfolio.js';
import Blog from './components/blog/blog.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WOW from "wowjs";
import 'animate.css';
import {useEffect} from 'react'
function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <GlobelStyle>
      <Header />
      <Banner />
      <About />
      <Services />
      <Freequote />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </GlobelStyle>
  )
}
export default App;
