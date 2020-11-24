import React from "react"
import { Image } from "react-bootstrap"

import Layout from "../../components/Layout/Layout"
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons"
import Heading from "../../components/Heading/Heading"
import Button from "../../components/Button/PrimaryButton"
import IngredientsSwitcher from "../../components/IngredientsSwitcher/IngredientsSwitcher"

import logo from "../../assets/images/logo.svg"
import "./Choices.css"

const Choices = () => (
  <Layout headerComponent={() => <HeaderWithTwoButtons />}>
    <div className="choices">
      <div className="choices__title-container">
        <Heading type="h3">Titulo</Heading>
      </div>
      <div className="choices__image-container">
        <Image src={logo} className="choices__logo" fluid />
      </div>
      <div className="choices__ingredients-container">
        <IngredientsSwitcher />
      </div>
      <div className="choices__button-container">
        <Button block>Continuar</Button>
      </div>
    </div>
  </Layout>
)

export default Choices
