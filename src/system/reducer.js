import { SET_BUSSY } from './action';

const initState = {
  bussy: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BUSSY:
      return {
        ...state,
        bussy: payload,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
