import React from "react";

import Startup from "./pages/Startup/Startup";
import ChoicesBread from "./pages/Choices/ChoicesBread";
import ChoicesMeat from "./pages/Choices/ChoicesMeat";
import ChoicesSouce from "./pages/Choices/ChoicesSouce";
import ChoicesCheese from "./pages/Choices/ChoicesCheese";
import Destination from "./pages/Destination/Destination";
import Confirmation from "./pages/Confirmation/Confirmation";

import { StateProvider } from "./store.js";

const AppRouter = () => (
  <StateProvider>
    {state => {
      console.log(state);
      switch (state.currentPage) {
        case "startup":
          return <Startup />;
        case "bread":
          return <ChoicesBread />;
        case "meat":
          return <ChoicesMeat />;
        case "souce":
          return <ChoicesSouce />;
        case "cheese":
          return <ChoicesCheese />;
        case "destination":
          return <Destination />;
        case "confirmation":
          return <Confirmation />;
        default:
          return null;
      }
    }}
  </StateProvider>
);

export default AppRouter;
