import React from 'react';
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-3">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} TOKYO Chill Pop Style. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
