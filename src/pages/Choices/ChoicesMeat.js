import React, { useContext } from "react";
import Choices from "./Choices";

import * as mockIngredients from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesMeat = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

  return (
    <Choices
      title="Escolha o ponto da carne"
      ingredients={mockIngredients.meatIngredients}
      onBack={() => navToNextPage("bread")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("souce")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: ingredient })
      }
    />
  );
};

export default ChoicesMeat;
