import React from "react";
import { Image } from "react-bootstrap";
import "./IngredientsSwitcherBox.css";

const IngredientsSwitcherBox = ({ name, picture, onClick }) => (
  <div className="ingredients-switcher-box" onClick={onClick}>
    <Image src={"https://place-hold.it/300x500"} fluid />
  </div>
);

export default IngredientsSwitcherBox;
