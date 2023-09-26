import header from "./Header.module.scss";
import React from "react";

export default function Header({ best, current }) {
  return (
    <div className={header.header}>
      <div className={header.logo}>The Office</div>
      <div className={header.rules}>Don't click the same card twice</div>
      <div className={header.scores}>
        <div className={header.best}>Best: {best}</div>
        <div className={header.current}>Current: {current}</div>
      </div>
    </div>
  );
}
