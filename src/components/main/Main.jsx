import React, { useEffect, useState } from "react";
import main from "./Main.module.scss";
import Card from "./card/Card";
import { handleClick } from "../../functions";

export default function Main({ status, cards, ...restProps }) {
  return (
    <div className={main.main}>
      <div className={main.bgImage}></div>
      <div className={main.board}>
        {cards.map(({ image, name }, i) => (
          <Card
            status={status}
            image={image}
            name={name}
            key={i}
            handleClick={handleClick}
            restProps={restProps}
          />
        ))}
      </div>
    </div>
  );
}
