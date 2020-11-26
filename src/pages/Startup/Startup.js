import React, { useContext } from "react";
import { Image } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { store } from "../../store.js";

import logo from "../../assets/images/logo.svg";
import "./Startup.css";

const Startup = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const navToNextPage = () => dispatch({ type: "navigate", data: "bread" });

  return (
    <Layout>
      <div className="startup">
        <div className="startup__image-container">
          <Image src={logo} className="startup__logo" fluid />
        </div>
        <div className="startup__button-container">
          <PrimaryButton block onClick={navToNextPage}>
            Iniciar Pedido
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default Startup;
