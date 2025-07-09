import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const CreatorSection: React.FC = () => {
  const creatorImageUrl = 'https://assets.st-note.com/img/1751616034-XWaJBhbG5mdwNLxT8OsEeIiY.png';

  return (
    <section id="creator" className="py-5 bg-dark text-white">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="text-center mb-4">Creator</h2>
          <Row className="justify-content-center">
            <Col xs={12} md={8} className="text-center mb-4">
              <Image src={creatorImageUrl} fluid roundedCircle style={{ maxWidth: '300px' }} />
            </Col>
            <Col xs={12} md={8} className="text-center">
              <p className="lead">
                TOKYO Chill Pop Styleは、音楽への共通の情熱を持つ仲間たちによって生まれました。
                学生時代の友人との再会をきっかけに、大人になって変化した価値観の中でも、
                「音楽が好き」という純粋な思いが新たな繋がりを生み出すことを実感。
                このチャンネルは、そんな音楽を通じた繋がりを大切に、皆さんの日常に寄り添うBGMを届けたいという願いから始まりました。
              </p>
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default CreatorSection;