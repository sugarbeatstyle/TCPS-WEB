import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-dark text-white text-center">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="mb-4">Contact</h2>
          <p className="lead mb-4">
            お問い合わせは下記のリンクよりご連絡ください。
          </p>
          <Button
            variant="outline-light"
            size="lg"
            href="https://x.com/maychan1996" // お問い合わせフォームのリンクをXのリンクに設定
            target="_blank"
            rel="noopener noreferrer"
            className="mb-5"
          >
            お問い合わせフォーム
          </Button>

          <div className="social-icons mt-4">
            <a href="https://x.com/maychan1996" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-2 social-icon-hover">
              <i className="fab fa-twitter"></i> {/* X (Twitter) */}
            </a>
            <a href="https://www.instagram.com/tokyo_chill_pop_style/" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-2 social-icon-hover">
              <i className="fab fa-instagram"></i> {/* Instagram */}
            </a>
            <a href="https://www.youtube.com/channel/UCH-qg9XV6pcni1Zc7NonIhw" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-2 social-icon-hover">
              <i className="fab fa-youtube"></i> {/* YouTube */}
            </a>
            <a href="https://note.com/maychan_sheep/m/m4f953b4f1557" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-2 social-icon-hover">
              <i className="fas fa-sticky-note"></i> {/* note (Font Awesome 6.x fas fa-sticky-note) */}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default ContactSection;