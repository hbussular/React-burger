import React, { useContext } from "react";
import Choices from "./Choices";
import { get } from "lodash";

import { souceIngredients } from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesSouce = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });
  const currentIngredient =
    get(state, "ingredients.souce") || souceIngredients[0];

  return (
    <Choices
      title="Escolha o molho"
      ingredients={souceIngredients}
      onBack={() => navToNextPage("meat")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("cheese")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: { souce: ingredient } })
      }
      currentIngredient={currentIngredient}
    />
  );
};

export default ChoicesSouce;
