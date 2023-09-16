import { PLAY } from "../context/context";

const reducer = (state, action) => {
  if (action.type === PLAY) {
    return { ...state, isPlaying: !state.isPlaying };
  }
  throw new Error(`No Matching  ${action.type} action type`);
};

export default reducer;
