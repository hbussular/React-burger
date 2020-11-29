import React, { useContext } from "react";
import Choices from "./Choices";
import { get } from "lodash";

import { meatIngredients } from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesMeat = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });
  const currentIngredient =
    get(state, "ingredients.meat") || meatIngredients[0];

  return (
    <Choices
      title="Escolha o ponto da carne"
      ingredients={meatIngredients}
      onBack={() => navToNextPage("bread")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("souce")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: { meat: ingredient } })
      }
      currentIngredient={currentIngredient}
    />
  );
};

export default ChoicesMeat;
