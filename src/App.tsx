import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CreatorSection from './components/CreatorSection';
import SeasonSection from './components/SeasonSection';
import GoodsSection from './components/GoodsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import GameSection from './components/GameSection';

import './App.css';

const MainPage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <CreatorSection />
    <SeasonSection />
    <GoodsSection />
    <FAQSection />
    <GameSection />
    <ContactSection />
  </>
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;