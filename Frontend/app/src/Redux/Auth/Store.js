import { TOGGLE_SIDEBAR, TOGGLE_UNFOLDABLE } from "../../Redux/Auth/actionTypes";
const initialState = {
  sidebarShow: true,
  sidebarUnfoldable: false,
};

const changeState = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarShow: !state.sidebarShow,
      };
    case TOGGLE_UNFOLDABLE:
      return {
        ...state,
        sidebarUnfoldable: !state.TOGGLE_UNFOLDABLE,
      };
    default:
      return state;
  }
};

const store = changeState;
export { store };
