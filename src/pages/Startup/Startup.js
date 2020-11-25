import React from "react";
import { Image } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import PrimaryButton from "../../components/Button/PrimaryButton";

import logo from "../../assets/images/logo.svg";
import "./Startup.css";

const Startup = ({ onNext }) => (
  <Layout>
    <div className="startup">
      <div className="startup__image-container">
        <Image src={logo} className="startup__logo" fluid />
      </div>
      <div className="startup__button-container">
        <PrimaryButton block onClick={onNext}>
          Realizar Pedido
        </PrimaryButton>
      </div>
    </div>
  </Layout>
);

export default Startup;
