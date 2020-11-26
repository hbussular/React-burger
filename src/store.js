import React, { createContext, useReducer } from "react";

const initialState = {
  currentPage: "startup",
  ingredients: [],
  customerAddress: null,
  weatherAddress: null
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
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

  return <Provider value={{ state, dispatch }}>{children(state)}</Provider>;
};

export { store, StateProvider };
