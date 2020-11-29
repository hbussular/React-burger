import React from "react";
import IngredientsSwitcherBox from "./IngredientsSwitcherBox";
import { isEqual } from "lodash";
import cx from "classnames";

import "./IngredientsSwitcher.css";

const IngredientsSwitcher = ({
  ingredients,
  onIngredientSelect,
  selectedIngredient = {}
}) => {
  return (
    <div className="ingredients-switcher">
      {ingredients.map((ingredient, idx) => {
        const isSelected = isEqual(ingredient, selectedIngredient);
        return (
          <div
            className={cx("ingredients-switcher__box", {
              "ingredients-switcher__box--selected": isSelected
            })}
            key={`ingredient-${idx}`}
          >
            <IngredientsSwitcherBox
              name={ingredient.shortName}
              picture={ingredient.picture}
              onClick={() => onIngredientSelect(ingredient)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default IngredientsSwitcher;
