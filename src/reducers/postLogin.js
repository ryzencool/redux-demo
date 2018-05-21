import { POST_LOGIN } from "../actions/types";

const initialState = {
  item: {}
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case POST_LOGIN: 
    return {
      ...state, 
      items: action.payload
    }
    default:
      return state;
  }
}
