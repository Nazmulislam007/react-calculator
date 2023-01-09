import React from 'react';
import ActionType from '../context/ActionType';

export default function DigitBtn({ digit, dispatch }) {
    return (
        <button onClick={() => dispatch({ type: ActionType.ADD_DIGIT, payload: digit })}>
            {digit}
        </button>
    );
}
