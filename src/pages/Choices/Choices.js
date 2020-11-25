import React, { useState, useContext } from "react";
import { Image } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons";
import Heading from "../../components/Heading/Heading";
import PrimaryButton from "../../components/Button/PrimaryButton";
import IngredientsSwitcher from "../../components/IngredientsSwitcher/IngredientsSwitcher";
import { AppContext } from "../../AppRouter";

import "./Choices.css";

const Choices = ({ ingredients, title, onClose, onBack, onNext }) => {
  const [selectedIngrendient, setSelectedIngredients] = useState({});
  const [_, setContext] = useContext(AppContext);

  return (
    <Layout
      headerComponent={() => (
        <HeaderWithTwoButtons onClose={onClose} onBack={onBack} />
      )}
    >
      <div className="choices">
        <div className="choices__title-container">
          <Heading type="h3">{title}</Heading>
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
              setContext(selectedIngrendient, "ingredients");
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
