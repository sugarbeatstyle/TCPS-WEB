import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { Fade } from 'react-awesome-reveal';

interface VideoItemProps {
  videoId: string;
  title: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ videoId, title }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Col md={6} className="mb-4">
      <Fade direction="up" triggerOnce>
        <div className="video-container">
          <YouTube videoId={videoId} opts={opts} />
          <h5 className="mt-2">{title}</h5>
        </div>
      </Fade>
    </Col>
  );
};

const VideoGallery: React.FC = () => {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Never Gonna Give You Up' },
    { id: 'M7lc1UVf-VE', title: 'React Hooks Tutorial' },
    { id: 'k_okcNVz60o', title: 'Vite React App Setup' },
    { id: 'F_Riqjdh2oM', title: 'Bootstrap 5 Tutorial' },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Latest Videos</h2>
      <Row>
        {videos.map((video) => (
          <VideoItem key={video.id} videoId={video.id} title={video.title} />
        ))}
      </Row>
    </Container>
  );
};

export default VideoGallery;
