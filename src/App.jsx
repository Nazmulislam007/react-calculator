/* eslint-disable consistent-return */
import './App.css';
import DigitBtn from './components/DigitBtn';
import OperationBtn from './components/OperationBtn';
import ActionType from './context/ActionType';
import { useCalc } from './context/CalculatorContext';

const INTEGER_FORMATE = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
});

function formatOperand(operand) {
    if (operand == null) return;
    const [integer, decimal] = operand.split('.');
    if (decimal == null) return INTEGER_FORMATE.format(integer);
    return `${INTEGER_FORMATE.format(integer)}.${decimal}`;
}

function App() {
    const { currentOperand, previousOperand, operation, dispatch } = useCalc();

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">
                    {formatOperand(previousOperand)} {operation}
                </div>
                <div className="current-operand">{formatOperand(currentOperand)}</div>
            </div>
            <button
                type="button"
                className="span-two"
                onClick={() => dispatch({ type: ActionType.CLEAR })}
            >
                AC
            </button>
            <button type="button" onClick={() => dispatch({ type: ActionType.DEL_SINGLE_DIGITS })}>
                DEL
            </button>
            <OperationBtn digit="÷" dispatch={dispatch} />
            <DigitBtn dispatch={dispatch} digit="1" />
            <DigitBtn dispatch={dispatch} digit="2" />
            <DigitBtn dispatch={dispatch} digit="3" />
            <OperationBtn digit="*" dispatch={dispatch} />
            <DigitBtn dispatch={dispatch} digit="4" />
            <DigitBtn dispatch={dispatch} digit="5" />
            <DigitBtn dispatch={dispatch} digit="6" />
            <OperationBtn digit="+" dispatch={dispatch} />
            <DigitBtn dispatch={dispatch} digit="7" />
            <DigitBtn dispatch={dispatch} digit="8" />
            <DigitBtn dispatch={dispatch} digit="9" />
            <OperationBtn digit="-" dispatch={dispatch} />
            <DigitBtn dispatch={dispatch} digit="." />
            <DigitBtn dispatch={dispatch} digit="0" />
            <button
                type="button"
                className="span-two"
                onClick={() => dispatch({ type: ActionType.EVALUATE })}
            >
                =
            </button>
        </div>
    );
}

export default App;
