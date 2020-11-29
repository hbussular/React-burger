import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons";
import Heading from "../../components/Heading/Heading";
import PrimaryButton from "../../components/Button/PrimaryButton";
import IngredientsSwitcher from "../../components/IngredientsSwitcher/IngredientsSwitcher";

import "./Choices.css";
import { get } from "lodash";

const Choices = ({
  ingredients,
  title,
  onClose,
  onBack,
  onNext,
  onIngredientSelect,
  currentIngredient
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState(
    currentIngredient
  );

  useEffect(() => {
    onIngredientSelect(selectedIngredient);

    return () => {};
  }, [selectedIngredient]);

  return (
    <Layout
      headerComponent={() => (
        <HeaderWithTwoButtons onClose={onClose} onBack={onBack} />
      )}
    >
      <div className="choices">
        <div className="choices__title-container">
          <div className="choices__title">{title}</div>
        </div>
        <div className="choices__image-container">
          <div>
            <Image
              src={get(selectedIngredient, "picture", null)}
              className="choices__logo"
              fluid
            />
            <Heading type="h6">{get(selectedIngredient, "name", null)}</Heading>
          </div>
        </div>
        <div className="choices__ingredients-container">
          <IngredientsSwitcher
            ingredients={ingredients}
            onIngredientSelect={ingredient => setSelectedIngredient(ingredient)}
            selectedIngredient={selectedIngredient}
          />
        </div>
        <div className="choices__button-container">
          <PrimaryButton block onClick={onNext}>
            Continuar
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default Choices;
