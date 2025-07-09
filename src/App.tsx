import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CreatorSection from './components/CreatorSection';
import SeasonSection from './components/SeasonSection';
import GoodsSection from './components/GoodsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import GameSection from './components/GameSection'; // Import GameSection
import './App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <CreatorSection />
      <SeasonSection />
      <GoodsSection />
      <FAQSection />
      <GameSection /> {/* Add GameSection here */}
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;