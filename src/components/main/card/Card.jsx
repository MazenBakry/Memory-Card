import React from "react";
import card from "./Card.module.scss";

export default function Card({ status, image, name, handleClick, restProps }) {
  return (
    <div
      className={card.card}
      onClick={() => handleClick({ ...restProps, name, status })}
    >
      <div className={card.image}>
        <img src={image} alt={name} />
      </div>
      <div className={card.text}>{name}</div>
    </div>
  );
}
