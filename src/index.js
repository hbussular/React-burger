// arquivo de inicialização do projeto que pegará todos os nós e renderizar dentro da div root do index.html
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Startup from "./pages/Startup/Startup"
import reportWebVitals from "./reportWebVitals"
import Choices from "./pages/Choices/Choices"

ReactDOM.render(
  <React.StrictMode>
    <Choices />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
