import React from "react";
import Choices from "./Choices";
import * as mockIngredients from "../../mocks/ingredients";

const ChoicesSalad = ({ setCurrentPage }) => (
  <Choices
    title="Escolha a salada"
    ingredients={mockIngredients.saladIngredients}
    onBack={() => setCurrentPage("meat")}
    onClose={() => setCurrentPage("startup")}
    onNext={() => setCurrentPage("destination")}
  />
);

export default ChoicesSalad;
