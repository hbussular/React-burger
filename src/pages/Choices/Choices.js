import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons";
import Heading from "../../components/Heading/Heading";
import PrimaryButton from "../../components/Button/PrimaryButton";
import IngredientsSwitcher from "../../components/IngredientsSwitcher/IngredientsSwitcher";

import "./Choices.css";

const Choices = ({
  ingredients,
  title,
  onClose,
  onBack,
  onNext,
  onIngredientSelect
}) => {
  const [selectedIngrendient, setSelectedIngredients] = useState({});

  useEffect(() => {
    if (ingredients) {
      setSelectedIngredients(ingredients[0][0]);
    }

    return () => {};
  }, [ingredients]);

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
              src={selectedIngrendient.picture}
              className="choices__logo"
              fluid
            />
            <Heading type="h6">{selectedIngrendient.name}</Heading>
          </div>
        </div>
        <div className="choices__ingredients-container">
          <IngredientsSwitcher
            ingredients={ingredients}
            onIngredientSelect={ingredient =>
              setSelectedIngredients(ingredient)
            }
          />
        </div>
        <div className="choices__button-container">
          <PrimaryButton
            block
            onClick={() => {
              onIngredientSelect(selectedIngrendient);
              onNext();
            }}
          >
            Continuar
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default Choices;
