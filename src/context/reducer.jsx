import ActionType from './ActionType';

const evaluate = (state) => {
    const { previousOperand, currentOperand, operation } = state;
    const prev = parseFloat(previousOperand);
    const curnt = parseFloat(currentOperand);
    if (Number.isNaN(prev) || Number.isNaN(curnt)) return '';
    let computation = '';

    switch (operation) {
        case '+':
            computation = prev + curnt;
            break;
        case '÷':
            computation = prev / curnt;
            break;
        case '*':
            computation = prev * curnt;
            break;
        case '-':
            computation = prev - curnt;
            break;
        default:
            break;
    }

    return computation.toString();
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ActionType.ADD_DIGIT:
            if (payload === '0' && state.currentOperand === '0') return state;
            if (payload === '.' && state.currentOperand?.includes('.')) return state;
            if (state.overwrite)
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: payload,
                };
            return {
                ...state,
                currentOperand: `${state.currentOperand || ''}${payload}`,
            };
        case ActionType.DEL_SINGLE_DIGITS:
            if (state.currentOperand == null) return state;
            if (state.overwrite)
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null,
                };
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            };
        case ActionType.CHOOSE_OPERATION:
            if (state.previousoperand == null && state.currentOperand == null) return state;

            if (state.previousOperand == null)
                return {
                    ...state,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                    operation: payload,
                };

            if (state.currentOperand == null)
                return {
                    ...state,
                    operation: payload,
                };

            return {
                ...state,
                previousOperand: evaluate(state),
                currentOperand: null,
                operation: payload,
            };
        case ActionType.CLEAR:
            return {};
        case ActionType.EVALUATE:
            if (
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            )
                return state;

            return {
                ...state,
                previousOperand: null,
                operation: null,
                overwrite: true,
                currentOperand: evaluate(state),
            };
        default:
            return state;
    }
};

export default reducer;
