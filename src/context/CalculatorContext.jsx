import React, { createContext, useContext, useMemo, useReducer } from 'react';
import reducer from './reducer';

const calculatorContext = createContext();

export const useCalc = () => useContext(calculatorContext);

export default function CalculatorContext({ children }) {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

    const value = useMemo(
        () => ({ currentOperand, previousOperand, operation, dispatch }),
        [currentOperand, operation, previousOperand]
    );

    return <calculatorContext.Provider value={value}>{children}</calculatorContext.Provider>;
}
