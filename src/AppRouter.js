import React, { useState } from "react";
import Startup from "./pages/Startup/Startup";
import ChoicesBread from "./pages/Choices/ChoicesBread";
import ChoicesMeat from "./pages/Choices/ChoicesMeat";
import ChoicesSalad from "./pages/Choices/ChoicesSalad";
import Destination from "./pages/Destination/Destination";

const INITIAL_STATE = {
  ingredients: [],
  address: null,
  weather: null
};

export const AppContext = React.createContext(INITIAL_STATE);

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState("destination");

  const [ingredients, setIngredients] = React.useState(
    INITIAL_STATE.ingredients
  );
  const [address, setAddress] = React.useState(INITIAL_STATE.address);
  const [weather, setWeather] = React.useState(INITIAL_STATE.weather);

  const setContext = (data, path) => {
    switch (path) {
      case "ingredients":
        setIngredients([...ingredients, data]);
        break;
      case "address":
        setAddress(data);
        break;
      case "weather":
        setWeather(data);
        break;
      default:
        break;
    }
  };

  return (
    <AppContext.Provider
      value={[{ address, weather, ingredients }, setContext]}
    >
      {(() => {
        switch (currentPage) {
          case "startup":
            return <Startup onNext={() => setCurrentPage("bread")} />;
          case "bread":
            return <ChoicesBread setCurrentPage={setCurrentPage} />;
          case "meat":
            return <ChoicesMeat setCurrentPage={setCurrentPage} />;
          case "salad":
            return <ChoicesSalad setCurrentPage={setCurrentPage} />;
          case "destination":
            return <Destination onNext={() => setCurrentPage("startup")} />;
          default:
            return null;
        }
      })()}
    </AppContext.Provider>
  );
};

export default AppRouter;
