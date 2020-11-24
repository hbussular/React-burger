import React from "react"
import { Image } from "react-bootstrap"

import Layout from "../../../components/Layout/Layout"
import HeaderWithTwoButtons from "../../../components/Header/HeaderWithTwoButtons"
import Heading from "../../../components/Heading/Heading"
import PrimaryButton from "../../../components/Button/PrimaryButton"
import IngredientsSwitcher from "../../../components/IngredientsSwitcher/IngredientsSwitcher"

import logo from "../../../assets/images/logo.svg"
import "./ChoicesLayout.css"

const ChoicesLayout = ({ ingredients, title, onClose, onBack, onNext }) => (
  <Layout headerComponent={() => <HeaderWithTwoButtons onClose={onClose} onBack={onBack} />}>
    <div className="choices">
      <div className="choices__title-container">
        <Heading type="h3">{title}</Heading>
      </div>
      <div className="choices__image-container">
        <Image src={logo} className="choices__logo" fluid />
      </div>
      <div className="choices__ingredients-container">
        <IngredientsSwitcher ingredients={ingredients} />
      </div>
      <div className="choices__button-container">
        <PrimaryButton block onClick={onNext}>
          Continuar
        </PrimaryButton>
      </div>
    </div>
  </Layout>
)

export default ChoicesLayout
