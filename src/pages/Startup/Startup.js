import React from "react"
import { Image } from "react-bootstrap"

import Layout from "../../components/Layout/Layout"
import Button from "../../components/Button/PrimaryButton"

import logo from "../../assets/images/logo.svg"
import "./Startup.css"

const Startup = () => (
  <Layout>
    <div className="startup">
      <div className="startup__image-container">
        <Image src={logo} className="startup__logo" fluid />
      </div>
      <div className="startup__button-container">
        <Button block>Realizar Pedido</Button>
      </div>
    </div>
  </Layout>
)

export default Startup
