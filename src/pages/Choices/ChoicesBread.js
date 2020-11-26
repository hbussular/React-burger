import React, { useContext } from "react";
import Choices from "./Choices";

import * as mockIngredients from "../../mocks/ingredients";
import { store } from "../../store.js";

const ChoicesBread = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

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
    />
  );
};

export default ChoicesBread;
