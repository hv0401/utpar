
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Body from './components/Body/Body';
import Services from './components/Services/Services';
import Resources from './components/Resources/Resources';

function App() {
  return (
    <>
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </HashRouter>
      <Footer />
      {/* <div style={{ width: '100vw', marginTop: '-20px', padding: '0' }}>
        <Header className="sticky-header" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
        <Footer />
      </div> */}

    </>
  );
}

export default App;
