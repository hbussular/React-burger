import React, { useContext } from "react";
import Choices from "./Choices";

import * as mockIngredients from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesCheese = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

  return (
    <Choices
      title="Escolha o queijo"
      ingredients={mockIngredients.cheeseIngredients}
      onBack={() => navToNextPage("souce")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("destination")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: ingredient })
      }
    />
  );
};

export default ChoicesCheese;
