import React, { createContext, useReducer } from "react";

const initialState = {
  currentPage: "startup",
  ingredients: [],
  customerAddress: null,
  weatherAddress: null
};

const store = createContext(initialState);
const { Provider } = store;

/**
 * O stateProvider é responsável por gerenciar os dados da aplicação
 */

const StateProvider = ({ children }) => {
  // O state contem os dados da aplicação, enquanto o dispatch direciona paraqual local a ação e o dado deve ser enviada no SwitchCase
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "navigate":
        return {
          ...state,
          currentPage: action.data
        };
      case "ingredients":
        return {
          ...state,
          ingredients: [...state.ingredients, action.data]
        };
      case "coords":
        return {
          ...state,
          customerAddress: action.data
        };
      case "weather":
        return {
          ...state,
          weatherAddress: action.data
        };
      default:
        throw new Error();
    }
  }, initialState);

  // O Provider é o componente Pai que vai permitir que os outros componentes filhos tenham acesso ao estado da aplicação
  return <Provider value={{ state, dispatch }}>{children(state)}</Provider>;
};

export { store, StateProvider };
