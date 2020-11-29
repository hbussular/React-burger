import React, { useContext } from "react";
import Choices from "./Choices";
import { get } from "lodash";

import * as mockIngredients from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesBread = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });
  const ingredients = get(state, "ingredients", []);

  return (
    <Choices
      title="Escolha o pão"
      ingredients={mockIngredients.breadIngredients}
      onBack={() => navToNextPage("startup")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("meat")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: ingredient })
      }
      selectedIngredient={ingredients[0] || mockIngredients.breadIngredients[0]}
    />
  );
};

export default ChoicesBread;
