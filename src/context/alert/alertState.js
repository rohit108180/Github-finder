import React, { useReducer } from "react";
import alertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";
import alertContext from "./alertContext";

const AlertState = (props) => {
  const intialstate = null;

  const[state, dispatch] = useReducer(alertReducer, intialstate);

  // setAlert
  const setAlert = (msg, type) => {
    setAlertState({ msg: msg, type: type });

    setTimeout(() => setAlertState(null), 2000);
  };

  //setAlertState

  const setAlertState = (payload) => {
    dispatch({ type: SET_ALERT, payload: payload });
  };

  return (
    <alertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;


