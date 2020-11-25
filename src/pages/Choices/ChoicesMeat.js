import React from "react";
import Choices from "./Choices";
import * as mockIngredients from "../../mocks/ingredients";

const ChoicesMeat = ({ setCurrentPage }) => (
  <Choices
    title="Escolha o ponto da carne"
    ingredients={mockIngredients.meatIngredients}
    onBack={() => setCurrentPage("bread")}
    onClose={() => setCurrentPage("startup")}
    onNext={() => setCurrentPage("salad")}
  />
);

export default ChoicesMeat;
