import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'; // Import Image
import { Fade } from 'react-awesome-reveal';

interface CardType {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const initialImages = [
  'https://assets.st-note.com/img/1752018003-HoN3Z2EfDG0lvxcO8UuwTMYr.png',
  'https://assets.st-note.com/img/1752018011-Hhr3z1dEy7YwvpQLMmfcqO2t.png',
  'https://assets.st-note.com/img/1752018016-ImKU3cynOajb0wsMgWR2Vlux.png',
  'https://assets.st-note.com/img/1752018021-hF28tcfyeWOv9IT35XlkpCsB.png',
  'https://assets.st-note.com/img/1752018027-6rKCzDBhRjMoA0X5Yma2JZVN.png',
  'https://assets.st-note.com/img/1752018032-N8rTSmq0sWu6D73J1xhCQ4jt.png',
  'https://assets.st-note.com/img/1752018058-LKCrsIgBcTaHRhVPeYXyk514.png',
  'https://assets.st-note.com/img/1752018068-fovVCbhyILuUwGKZ7apX1Mki.png',
  'https://assets.st-note.com/img/1752018077-BfGUkrQjRAFEO6H54CMuPxWc.png',
  'https://assets.st-note.com/img/1752018084-MGBSY6K7ufwVEQrZ8X1cO9aN.png',
  'https://assets.st-note.com/img/1752018088-tVbQUmYF19X7MRl50cH8fxWq.png',
  'https://assets.st-note.com/img/1752018094-Bw26GI4lS0TUxKcm8W5QpuaO.png',
];

const cardBackImage = 'https://assets.st-note.com/img/1752018181-w1Fo8Br4cedNYaynXvg5I7AU.png';
const gameTitleImage = 'https://assets.st-note.com/production/uploads/images/187471461/rectangle_large_type_2_a54a7d9566030aa851dafe15f96b4534.png?width=1200';

const GameSection: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startGame = () => {
    const shuffledCards = [...initialImages, ...initialImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameWon(false);
    setGameStarted(true);
    setTimeElapsed(0);
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1);
    }, 1000);
  };

  const resetGame = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
    setGameStarted(false);
    setCards([]); // Clear cards to show start button
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameWon(false);
    setTimeElapsed(0);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard && secondCard && firstCard.image === secondCard.image) {
        setMatchedCards(prev => [...prev, firstId, secondId]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      setGameWon(true);
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    }
  }, [matchedCards, cards]);

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleCardClick = (id: number) => {
    const clickedCard = cards.find(card => card.id === id);

    if (
      !clickedCard ||
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      flippedCards.length === 2
    ) {
      return;
    }

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards(prev => [...prev, id]);
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="game" className="py-5 bg-dark text-white text-center">
      <Container>
        <Fade direction="up" triggerOnce>
          <div className="mb-4">
            <h2 className="mb-3">Memory Game</h2> {/* Moved h2 above Image */}
            <Image src={gameTitleImage} alt="Memory Game Title" fluid style={{ maxWidth: '400px' }} />
          </div>
          {!gameStarted ? (
            <div className="game-intro">
              <p className="lead mb-3">
                同じ絵柄のカードを2枚見つけてペアにしましょう！
                <br />
                すべてのペアを見つけるまでの手数と時間を競います。
              </p>
              <Button variant="outline-light" onClick={startGame} size="lg">
                ゲームスタート
              </Button>
            </div>
          ) : gameWon ? (
            <div>
              <h3>おめでとうございます！</h3>
              <p>クリアまでにかかった手数: {moves}</p>
              <p>クリアタイム: {formatTime(timeElapsed)}</p>
              <Button variant="outline-light" onClick={resetGame}>
                もう一度プレイ
              </Button>
            </div>
          ) : (
            <div>
              <p>手数: {moves} | タイム: {formatTime(timeElapsed)}</p>
              <Row className="justify-content-center">
                {cards.map(card => (
                  <Col key={card.id} xs={4} sm={3} md={2} className="mb-3">
                    <div
                      className={`memory-card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
                      onClick={() => handleCardClick(card.id)}
                    >
                      <div className="card-inner">
                        <div className="card-front">
                          <img src={card.image} alt="card-front" className="img-fluid" />
                        </div>
                        <div className="card-back">
                          <img src={cardBackImage} alt="card-back" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <Button variant="outline-light" onClick={resetGame} className="mt-4">
                ゲームをリセット
              </Button>
            </div>
          )}
        </Fade>
        <div className="text-center mt-5">
          <a href="https://note.com/maychan_sheep/m/m4f953b4f1557" target="_blank" rel="noopener noreferrer">
            <img src="https://assets.st-note.com/img/1753236126-tb6dOTl0ZkWPUEIJyVe9XHiL.png" alt="Game Banner" className="img-fluid game-banner" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default GameSection;