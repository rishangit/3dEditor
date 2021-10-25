import { ADD_MESH, SET_SELECTED_MESH, UPDATE_MESH } from './action';

const initState = {
  meshList: [],
  selected: null,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_MESH:
      return {
        ...state,
        meshList: [...state.meshList, payload],
      };
    case SET_SELECTED_MESH:
      return {
        ...state,
        selected: payload,
      };

    case UPDATE_MESH:
      debugger
      const newList = state.meshList.map((item, inx) => {
        if (inx === state.selected) {
          return {...item, ...payload};
        } else return item;
      });
      debugger
      return {
        ...state,
        meshList: newList,
      };
    default:
      break;
  }
  return state;
};

export default reducer;
