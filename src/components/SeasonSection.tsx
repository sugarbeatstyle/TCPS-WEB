import React, { useState } from 'react';
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';
import { Fade } from 'react-awesome-reveal';

const SeasonSection: React.FC = () => {
  const [key, setKey] = useState('season1');

  const opts = {
    height: '200',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[1].length === 11) ? match[1] : '';
  };

  const season1Videos = [
    "https://www.youtube.com/watch?v=Ce0TbKUd0oY",
    "https://www.youtube.com/watch?v=2GuRUoMSy6s",
    "https://www.youtube.com/watch?v=gdxbCOgKPDk",
    "https://www.youtube.com/watch?v=Q63h-Skolzc",
  ];

  const musicBoxVideos = [
    "https://www.youtube.com/watch?v=clUjZ7bi31U",
    "https://www.youtube.com/watch?v=CuL1WpeKgq0",
  ];

  const turnToSmileVideos = [
    "https://youtu.be/Qdr-H3MSwEY",
    "https://youtu.be/RrLG4HRXnTA",
    "https://youtu.be/FLcxMUj5Igw",
    "https://youtu.be/8FyYiSyXx5U",
  ];

  return (
    <section id="season" className="py-5 bg-dark text-white">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="text-center mb-4">Season</h2>
          <Tabs
            id="season-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k as string)}
            className="mb-3 justify-content-center"
            variant="pills"
          >
            <Tab eventKey="season1" title="1stシーズン">
              <div className="text-center mb-3">
                <p className="lead">
                  2025年3月から6月にかけてリリースされた10作品とベスト盤4作品。ハイトーンの女性ボーカルが特徴のチルポップやlofi系の楽曲をお楽しみください。
                </p>
              </div>
              <Row className="justify-content-center">
                {season1Videos.map((url, index) => (
                  <Col key={index} xs={12} md={6} lg={6} className="mb-4">
                    <div className="video-container">
                      <YouTube videoId={getYouTubeId(url)} opts={opts} />
                    </div>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="musicbox" title="Music Box">
              <div className="text-center mb-3">
                <p className="lead">
                  「ふたを開けたら、音が始まった」をコンセプトにしたMusic Boxシリーズ。ポモドーロ・テクニックに基づき、「25分の作業用BGM + 5分の休憩」を3セット繰り返す90分の構成です。
                </p>
              </div>
              <Row className="justify-content-center">
                {musicBoxVideos.map((url, index) => (
                  <Col key={index} xs={12} md={6} lg={6} className="mb-4">
                    <div className="video-container">
                      <YouTube videoId={getYouTubeId(url)} opts={opts} />
                    </div>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="turntosmile" title="Turn to Smile">
              <div className="text-center mb-3">
                <p className="lead">
                  作業中、勉強中、家事の途中に「あなたの今日に、小さなご機嫌を。」キュートでPOPな音楽シリーズです。
                </p>
              </div>
              <Row className="justify-content-center">
                {turnToSmileVideos.map((url, index) => (
                  <Col key={index} xs={12} md={6} lg={6} className="mb-4">
                    <div className="video-container">
                      <YouTube videoId={getYouTubeId(url)} opts={opts} />
                    </div>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </Fade>
      </Container>
    </section>
  );
};

export default SeasonSection;
