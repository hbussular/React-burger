import React, { useState } from "react"

import ChoicesScreen from "./components/ChoicesLayout"
import "./Choices.css"

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
]

const Choices = () => {
  const [currentPage, setCurrentPage] = useState("bread")

  switch (currentPage) {
    case "bread":
      return <ChoicesScreen title="Escolha o pão" ingredients={ingredients2} onBack={() => console.log("Voltar!")} onClose={() => console.log("fechar!")} onNext={() => setCurrentPage("meat")} />
    case "meat":
      return <ChoicesScreen title="Escolha a carne" ingredients={ingredients2} onBack={() => setCurrentPage("bread")} onClose={() => console.log("fechar!")} onNext={() => setCurrentPage("salad")} />
    case "salad":
      return <ChoicesScreen title="Escolha a salada" ingredients={ingredients2} onBack={() => setCurrentPage("meat")} onClose={() => console.log("fechar!")} onNext={() => console.log("proxima tela!")} />
    default:
      break
  }
}

export default Choices
