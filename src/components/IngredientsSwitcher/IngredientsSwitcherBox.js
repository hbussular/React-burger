import React from "react";
import { Image } from "react-bootstrap";
import "./IngredientsSwitcherBox.css";

const IngredientsSwitcherBox = ({ name, picture, onClick }) => (
  <div className="ingredients-switcher-box" onClick={onClick}>
    <Image src={picture} fluid roundedCircle />
    <div className="ingredients-switcher-box__title">{name}</div>
  </div>
);

export default IngredientsSwitcherBox;
