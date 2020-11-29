import React, { useContext } from "react";
import { get } from "lodash";

import Layout from "../../components/Layout/Layout";
import PrimaryButton from "../../components/Button/PrimaryButton";

import { store } from "../../store.js";
import { getDeliveryTime } from "../../utils/weather";

import "./Confirmation.css";

const Confirmation = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

  return (
    <Layout>
      <div className="confirmation">
        <div className="confirmation__title-container">
          <div className="confirmation__title">Pedido confirmado!</div>
        </div>
        <span className="confirmation__subtitle">Ingredientes:</span>
        <hr />
        <ul className="confirmation__ul-entrega">
          {<li>{get(state, "ingredients.bread.name", null)}</li>}
          {<li>{get(state, "ingredients.meat.name", null)}</li>}
          {<li>{get(state, "ingredients.souce.name", null)}</li>}
          {<li>{get(state, "ingredients.cheese.name", null)}</li>}
        </ul>
        <span className="confirmation__subtitle">Entrega:</span>
        <hr />
        <ul className="confirmation__ul-entrega">
          <li>
            <strong>Condição do tempo: </strong>
            {get(state, "weatherAddress.condition", null)},{" "}
            {get(state, "weatherAddress.temperature", null)} °C.
          </li>
          <li>
            <strong>Tempo de entrega: </strong>
            {getDeliveryTime({
              temperature: get(state, "weatherAddress.temperature", null),
              weather: get(state, "weatherAddress.condition", null),
              estimatedTime: 30
            })}
            {" minutos."}
          </li>
        </ul>
        <div className="confirmation__button-container">
          <PrimaryButton block onClick={() => navToNextPage("startup")}>
            Fechar
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;
