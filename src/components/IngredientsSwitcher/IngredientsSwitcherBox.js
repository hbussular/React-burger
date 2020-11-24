import React from "react"
import { Image } from "react-bootstrap"
import "./IngredientsSwitcherBox.css"

const IngredientsSwitcherBox = ({ name, picture }) => (
  <div className="ingredients-switcher-box">
    <Image src={"https://place-hold.it/300x500"} fluid />
  </div>
)

export default IngredientsSwitcherBox
