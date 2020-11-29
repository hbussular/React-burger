import React from "react";
import IngredientsSwitcherBox from "./IngredientsSwitcherBox";
import { isEqual } from "lodash";

import "./IngredientsSwitcher.css";

const IngredientsSwitcher = ({
  ingredients,
  onIngredientSelect,
  selectedIngredient = {}
}) => {
  return (
    <div className="ingredients-switcher">
      {ingredients.map((subGroup, idx) =>
        subGroup.map((ingredient, idy) => (
          <div
            className={[
              "ingredients-switcher__box",
              isEqual(selectedIngredient, selectedIngredient) &&
                "ingredients-switcher__box--selected"
            ]}
            key={`ingredient-${idx}-${idy}`}
          >
            <IngredientsSwitcherBox
              name={ingredient.shortName}
              picture={ingredient.picture}
              onClick={() => onIngredientSelect(ingredient)}
              isSelected={selectedIngredient}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default IngredientsSwitcher;
