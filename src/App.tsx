import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CreatorSection from './components/CreatorSection';
import SeasonSection from './components/SeasonSection';
import BannerSection from './components/BannerSection';
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
      <BannerSection 
        imageUrl="https://assets.st-note.com/img/1753235226-uhnkgH2ErzdX4qjtUTwsRlQo.png"
        linkUrl="https://royal-pisces-bdd.notion.site/Discography-TOKYO-Chill-Pop-Style-234b09b35af980a2b0d9c954b4c4eecd"
        altText="Discography Banner"
      />
      <GoodsSection />
      <FAQSection />
      <GameSection /> {/* Add GameSection here */}
      <BannerSection 
        imageUrl="https://assets.st-note.com/img/1753236126-tb6dOTl0ZkWPUEIJyVe9XHiL.png"
        linkUrl="https://note.com/maychan_sheep/m/m4f953b4f1557"
        altText="Note Banner"
      />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;