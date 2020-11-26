import React from "react";
import IngredientsSwitcherBox from "./IngredientsSwitcherBox";

import "./IngredientsSwitcher.css";

const IngredientsSwitcher = ({ ingredients, onIngredientSelect }) => {
  return (
    <div className="ingredients-switcher">
      {ingredients.map((subGroup, idx) =>
        subGroup.map((ingredient, idy) => (
          <div
            className="ingredients-switcher__box"
            key={`ingredient-${idx}-${idy}`}
          >
            <IngredientsSwitcherBox
              name={ingredient.shortName}
              picture={ingredient.picture}
              onClick={() => onIngredientSelect(ingredient)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default IngredientsSwitcher;
