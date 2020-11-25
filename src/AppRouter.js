import React, { useState } from "react";
import Startup from "./pages/Startup/Startup";
import Choices from "./components/ChoicesLayout";

const ingredients2 = [
  [
    {
      name: "Mostard",
      pictureUrl: ""
    },
    {
      name: "ketchup",
      pictureUrl: ""
    },
    {
      name: "Maionese",
      pictureUrl: ""
    }
  ],
  [
    {
      name: "Picles",
      pictureUrl: ""
    }
  ]
];

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState("startup");

  switch (currentPage) {
    case "startup":
      return <Startup onNext={() => setCurrentPage("bread")} />;
    case "bread":
      return (
        <Choices
          title="Escolha o pão"
          ingredients={ingredients2}
          onBack={() => setCurrentPage("startup")}
          onClose={() => setCurrentPage("startup")}
          onNext={() => setCurrentPage("meat")}
        />
      );
    case "meat":
      return (
        <Choices
          title="Escolha a carne"
          ingredients={ingredients2}
          onBack={() => setCurrentPage("bread")}
          onClose={() => setCurrentPage("startup")}
          onNext={() => setCurrentPage("salad")}
        />
      );
    case "salad":
      return (
        <Choices
          title="Escolha a salada"
          ingredients={ingredients2}
          onBack={() => setCurrentPage("meat")}
          onClose={() => setCurrentPage("startup")}
          onNext={() => console.log("proxima tela!")}
        />
      );
    default:
      break;
  }
};

export default AppRouter;
