import React from "react"
import Layout from "../../components/Layout/Layout"
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons"
import Button from "../../components/Button/PrimaryButton"
import { Image } from "react-bootstrap"
import "./Choices.css"
import logo from "../../assets/images/logo.svg"
import CarouselBootstrap from "../../components/Carousel/CarouselBootstrap"

const Choices = () => (
  <Layout headerComponent={() => <HeaderWithTwoButtons />}>
    <div className="choices">
      <div className="choices__image-container">
        <Image src={logo} className="choices__logo" fluid />
      </div>
      <div>
        <CarouselBootstrap className="choices__carousel"></CarouselBootstrap>
      </div>
      <div className="choices__button-container">
        <Button block>Continuar</Button>
      </div>
    </div>
  </Layout>
)

export default Choices
