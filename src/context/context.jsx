/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useRef, useState } from "react";
import reducer from "../reducers/app_reducer";

// actions
export const PLAY = "PLAY";

const AppContext = createContext(null);

const initialState = {
  isPlaying: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const animationRef = useRef(null);
  const handlePlay = () => {
    dispatch({ type: PLAY });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePlay,
        duration,
        setDuration,
        animationRef,
        audioRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
