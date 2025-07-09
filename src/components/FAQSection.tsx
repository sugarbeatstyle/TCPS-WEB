import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-5 bg-dark text-white">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="text-center mb-4">FAQ</h2>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Q1：チャンネルのBGMは、動画制作や配信で利用できますか？</Accordion.Header>
              <Accordion.Body>
                はい、個人利用・商用利用問わず、クレジット表記を条件に無料でご利用いただけます。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Q2：楽曲のリクエストはできますか？</Accordion.Header>
              <Accordion.Body>
                現在、個別の楽曲リクエストは受け付けておりませんが、コメント欄やSNSでご意見をいただければ、今後の制作の参考にさせていただきます。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Q3：チャンネルの更新頻度はどのくらいですか？</Accordion.Header>
              <Accordion.Body>
                現在、不定期更新です。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Q4：楽曲のダウンロードはできますか？</Accordion.Header>
              <Accordion.Body>
                楽曲はYouTubeの他、SpotifyやApple Musicなどの音楽ストリーミングサービスで聴くことができます。ダウンロード販売は現在行っておりません。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Q5:コラボレーションは可能ですか？</Accordion.Header>
              <Accordion.Body>
                はい、可能です。お問い合わせフォームより詳細をご連絡ください。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Q6:オリジナルの曲を作って欲しいのですが？</Accordion.Header>
              <Accordion.Body>
                はい、可能です。<a href="https://coconala.com/services/3631293" target="_blank" rel="noopener noreferrer" className="text-info">こちら</a>で承っております。
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Fade>
      </Container>
    </section>
  );
};

export default FAQSection;