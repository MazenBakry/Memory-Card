import React from "react";
import over from "./GameOver.module.scss";

export default function GameOver({ status, playAgain, rerenderApp }) {
  const { score, isOver } = status.current;

  let text = null;
  if (score < 12 && isOver) {
    text = (
      <div className={over.text}>
        Game is over. <br />
        Your score is {score}
      </div>
    );
  } else if (score === 12 && isOver) {
    text = (
      <div className={over.text}>
        You have got a great memory!
        <br /> You remembered all cards {score} <br />
      </div>
    );
  }

  if ((score < 12 && isOver) || (score === 12 && isOver))
    return (
      <div className={over.bg}>
        <div className={over.gameOver}>
          {text}
          <button
            type="button"
            onClick={() => {
              playAgain(status);
              rerenderApp([]);
            }}
          >
            Play again
          </button>
        </div>
      </div>
    );
}
