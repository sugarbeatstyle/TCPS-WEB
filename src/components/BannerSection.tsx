
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface BannerSectionProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <section id="banner" className="py-5">
      <Container>
        <Row>
          <Col md={8} lg={6} className="text-center mx-auto">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt={altText} className="img-fluid banner-hover" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSection;
