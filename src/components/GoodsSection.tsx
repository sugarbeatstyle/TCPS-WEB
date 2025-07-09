import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const GoodsSection: React.FC = () => {
  const goodsItems = [
    {
      id: 1,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/sacoche/m/natural/18153154/1751960221-2700x2700.png.webp?h=9b7a651bb295f4e1802bb40f845c56b23458ffc4&printed=true',
      title: 'サコッシュ',
      description: 'TOKYO Chill Pop Styleオリジナルデザインのサコッシュです。',
    },
    {
      id: 2,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/acrylic-stand/50mm/clear/front/18153154/1751960221-2700x2700.png.webp?h=9b7a651bb295f4e1802bb40f845c56b23458ffc4&printed=true',
      title: 'アクリルスタンド',
      description: 'デスク周りを彩るアクリルスタンド。',
    },
    {
      id: 3,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/acrylic-keychain/50x50mm/clear/17582147/1744538558-1080x1080.png.webp?h=47f7f58c60e297b5111559a31f4c1a074563982d&printed=true',
      title: 'アクリルキーホルダー',
      description: 'バッグや鍵に付けられるキーホルダー。',
    },
    {
      id: 4,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/one-point-t-shirt/l/white/close-up/17582095/1744538156-1080x1080.png.webp?h=76585743a7bfc004a150861067c5f2feb5cbe5bb&printed=false',
      title: 'Tシャツ (ワンポイント)',
      description: 'シンプルなデザインのワンポイントTシャツ。',
    },
    {
      id: 5,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/zip-hoodie/s/white/front/17582095/1744538156-1080x1080.png.webp?h=76585743a7bfc004a150861067c5f2feb5cbe5bb&printed=true',
      title: 'ジップパーカー',
      description: '肌寒い時に羽織れるジップパーカー。',
    },
    {
      id: 6,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/thermo-tumbler/360ml/white/17582095/1744538156-1080x1080.png.webp?h=76585743a7bfc004a150861067c5f2feb5cbe5bb&printed=true',
      title: 'サーモタンブラー',
      description: '保温・保冷機能付きのタンブラー。',
    },
    {
      id: 7,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/acrylic-keychain/50x50mm/clear/17582095/1744538156-1080x1080.png.webp?h=76585743a7bfc004a150861067c5f2feb5cbe5bb&printed=true',
      title: 'アクリルキーホルダー (別デザイン)',
      description: '別デザインのアクリルキーホルダー。',
    },
    {
      id: 8,
      image: 'https://d1q9av5b648rmv.cloudfront.net/v3/500x500/t-shirt/s/white/front/18153154/1751960221-2700x2700.png.webp?h=9b7a651bb295f4e1802bb40f845c56b23458ffc4&printed=true',
      title: 'Tシャツ',
      description: '定番のTシャツ。',
    },
  ];

  return (
    <section id="goods" className="py-5 bg-dark text-white">
      <Container>
        <Fade direction="up" triggerOnce>
          <h2 className="text-center mb-4">Goods</h2>
          <Row className="g-4">
            {goodsItems.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 bg-secondary text-white border-0 goods-card">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button
              variant="outline-light"
              size="lg"
              href="https://suzuri.jp/TOKYO_Chill_Pop_Style/products"
              target="_blank"
              rel="noopener noreferrer"
            >
              SUZURIで全商品を見る
            </Button>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default GoodsSection;