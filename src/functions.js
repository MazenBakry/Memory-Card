import { CARDS } from "./assets/1cards";

export function shuffleCards() {
  const res = [];
  const cards = [...CARDS];
  while (cards.length) {
    const index = Math.floor(Math.random() * cards.length);
    res.push(cards.splice(index, 1));
  }
  return res.flat();
}

export function handleClick({ current, setCurrent, name, status }) {
  if (current.includes(name)) {
    setCurrent([]);
    status.current.isOver = true;
    return;
  }

  status.current.score++;
  setCurrent([...current, name]);
}

export function playAgain(status) {
  status.current = { score: 0, isOver: false };
}
