import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const calculatorContext = createContext();

export const useCalc = () => {
  return useContext(calculatorContext);
};

export default function CalculatorContext({ children }) {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <calculatorContext.Provider
      value={{ currentOperand, previousOperand, operation, dispatch }}
    >
      {children}
    </calculatorContext.Provider>
  );
}
