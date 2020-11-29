import React, { useContext } from "react";
import Choices from "./Choices";
import { get } from "lodash";

import { cheeseIngredients } from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesCheese = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });
  const currentIngredient =
    get(state, "ingredients.cheese") || cheeseIngredients[0];

  return (
    <Choices
      title="Escolha o queijo"
      ingredients={cheeseIngredients}
      onBack={() => navToNextPage("souce")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("destination")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: { cheese: ingredient } })
      }
      currentIngredient={currentIngredient}
    />
  );
};

export default ChoicesCheese;
