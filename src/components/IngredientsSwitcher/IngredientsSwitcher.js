import React from "react"
import { Carousel } from "react-bootstrap"
import { CarouselItem, Row, Col } from "react-bootstrap"

import IngredientsSwitcherBox from "./IngredientsSwitcherBox"

import "./IngredientsSwitcher.css"

const ingredients2 = [
  [
    {
      name: "Mostard",
      pictureUrl: ""
    },
    {
      name: "ketchup",
      pictureUrl: ""
    },
    {
      name: "Maionese",
      pictureUrl: ""
    }
  ],
  [
    {
      name: "Picles",
      pictureUrl: ""
    }
  ]
]

const IngredientsSwitcher = ({ ingredientsData }) => {
  return (
    <div className="ingredients-switcher">
      <Carousel indicators={false}>
        {ingredients2.map(subGroup => (
          <CarouselItem>
            <Row>
              {subGroup.map(ingredient => (
                <Col xs={4} md={4}>
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
