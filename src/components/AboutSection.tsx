import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-dark text-white">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="text-center mb-4">About</h2>
          <p className="lead text-center mb-3">
            「毎日にちょっと効く、チルでPOPでごきげんな作業用BGM」をテーマに、チルポップやlofi系の洋楽BGMを配信中。
          </p>
          <p className="lead text-center mb-3">
            勉強、リモートワーク、家事、ドライブ、リラックスしたい夜など、様々なシーンであなたの生活に寄り添います。
          </p>
          <p className="lead text-center mb-3">
            ハイトーンの女性ボーカルが特徴のチルポップやlofiキュート系の曲が特徴です。
          </p>

          <div className="season-block mb-4 p-4 rounded">
            <h4 className="text-center mb-2">第1シーズン</h4>
            <p className="lead text-center mb-0">
              「この音で今日が変わる」
              <br />
              感情に寄り添う作業用BGM10作品とベスト盤4作品。
            </p>
          </div>

          <div className="season-block mb-4 p-4 rounded">
            <h4 className="text-center mb-2">第2シーズン</h4>
            <p className="lead text-center mb-0">
              「ふたを開けたら、音が始まった」
              <br />
              インストゥルメンタルの【Music Box】5作品。
            </p>
          </div>

          <div className="season-block p-4 rounded">
            <h4 className="text-center mb-2">第3シーズン</h4>
            <p className="lead text-center mb-0">
              「あなたの今日に、小さなご機嫌を。」
              <br />
              『Turn to Smile』シリーズ展開中。
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default AboutSection;