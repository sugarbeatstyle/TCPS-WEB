import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const HeroSection: React.FC = () => {
  const backgroundImageUrl = 'https://assets.st-note.com/img/1751603684-8DAsoj6IOR1id5ZeCc9FKrLm.jpg?width=1200';

  return (
    <div
      id="home"
      className="hero-section d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
        }}
      ></div>
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Fade direction="down" triggerOnce>
          <h1 className="display-3 fw-bold">TOKYO Chill Pop Style</h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={500}>
          <p className="lead my-4">
            「毎日にちょっと効く、チルでPOPでごきげんな作業用BGM」
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <Button
              variant="outline-light"
              size="lg"
              href="https://www.youtube.com/channel/UCH-qg9XV6pcni1Zc7NonIhw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube"
            >
              <i className="fab fa-youtube me-2"></i>YouTube
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              href="https://open.spotify.com/intl-ja/artist/6u9MXYlNmE0V12wvcVvGTs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spotify"
            >
              <i className="fab fa-spotify me-2"></i>Spotify
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              href="https://music.apple.com/us/artist/tokyo-chill-pop-style/1803974577"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-music"
            >
              <i className="fab fa-apple me-2"></i>Apple Music
            </Button>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default HeroSection;
