import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import About from './components/about/about.js'
import GlobelStyle from './components/globelStyle/globelstyle.js';
function App() {
  return (
    <GlobelStyle>
      <Header />
      <Banner />
      <About />
    </GlobelStyle>
  )
}

export default App;
