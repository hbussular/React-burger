import React, { useContext } from "react";
import Choices from "./Choices";

import * as mockIngredients from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesSouce = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

  return (
    <Choices
      title="Escolha o molho"
      ingredients={mockIngredients.souceIngredients}
      onBack={() => navToNextPage("meat")}
      onClose={() => navToNextPage("startup")}
      onNext={() => navToNextPage("cheese")}
      onIngredientSelect={ingredient =>
        dispatch({ type: "ingredients", data: ingredient })
      }
    />
  );
};

export default ChoicesSouce;
