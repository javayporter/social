import React from "react";

export const Suggestions = ({ heading, actionA, actionB, name, imgSrc }) => {
  return (
    <div className="container">
      <span>{heading}</span>
      <div className="item">
        <div className="user-info">
          <img src={imgSrc} alt="" />
          <span>{name}</span>
        </div>
        <div className="buttons">
          <button>{actionA}</button>
          <button>{actionB}</button>
        </div>
      </div>
      <div className="item">
        <div className="user-info">
          <img src={imgSrc} alt="" />
          <span>{name}</span>
        </div>
        <div className="buttons">
          <button>{actionA}</button>
          <button>{actionB}</button>
        </div>
      </div>
    </div>
  );
};
