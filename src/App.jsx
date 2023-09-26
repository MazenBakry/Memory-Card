import { useState, useEffect, useRef } from "react";
import app from "./App.module.scss";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/footer/Footer";
import { playAgain, shuffleCards } from "./functions";
import GameOver from "./components/gameOver/GameOver";

function App() {
  const [best, setBest] = useState(0);
  const [current, setCurrent] = useState([]);
  const [cards, setCards] = useState(shuffleCards());

  const status = useRef({ score: 0, isOver: false });

  useEffect(() => {
    setCards(shuffleCards());
    if (best < current.length) {
      setBest(current.length);
    }
    if (status.current.score === 12) {
      status.current.isOver = true;
    }
  }, [current]);

  return (
    <div className={app.app}>
      <Header best={best} current={current.length} />
      <Main
        status={status}
        cards={cards}
        best={best}
        setBest={setBest}
        current={current}
        setCurrent={setCurrent}
      />
      <Footer />
      <GameOver
        status={status}
        playAgain={playAgain}
        rerenderApp={setCurrent}
      />
    </div>
  );
}

export default App;
