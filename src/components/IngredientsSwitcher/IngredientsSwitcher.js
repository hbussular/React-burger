import React from "react"
import { Carousel } from "react-bootstrap"
import { CarouselItem, Row, Col } from "react-bootstrap"

import IngredientsSwitcherBox from "./IngredientsSwitcherBox"

import "./IngredientsSwitcher.css"

const IngredientsSwitcher = ({ ingredients }) => {
  return (
    <div className="ingredients-switcher">
      <Carousel indicators={false} slide={false} interval={null}>
        {ingredients.map((subGroup, idx) => (
          <CarouselItem key={`sg-ingredients-${idx}`}>
            <Row>
              {subGroup.map((ingredient, idy) => (
                <Col xs={4} md={4} key={`ingredient-${idy}`}>
                  <IngredientsSwitcherBox name={ingredient.name} picture={ingredient.picture} />
                </Col>
              ))}
            </Row>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  )
}

export default IngredientsSwitcher
