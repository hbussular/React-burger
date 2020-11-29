import React, { useContext } from "react";
import Choices from "./Choices";
import { get } from "lodash";

import { breadIngredients } from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesBread = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });
  const currentIngredient =
    get(state, "ingredients.bread") || breadIngredients[0];

  return (
    <Choices
      title="Escolha o pão"
      ingredients={breadIngredients}
      onBack={() => navToNextPage("startup")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("meat")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: { bread: ingredient } })
      }
      currentIngredient={currentIngredient}
    />
  );
};

export default ChoicesBread;
