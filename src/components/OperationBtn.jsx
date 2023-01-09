import React from "react";
import ActionType from "../context/ActionType";

export default function OperationBtn({ digit, dispatch }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ActionType.CHOOSE_OPERATION, payload: digit })
      }
    >
      {digit}
    </button>
  );
}
