import React from "react";
import Choices from "./Choices";
import * as mockIngredients from "../../mocks/ingredients";

const ChoicesBread = ({ setCurrentPage }) => (
  <Choices
    title="Escolha o pão"
    ingredients={mockIngredients.breadIngredients}
    onBack={() => setCurrentPage("startup")}
    onClose={() => setCurrentPage("startup")}
    onNext={() => setCurrentPage("meat")}
  />
);

export default ChoicesBread;
