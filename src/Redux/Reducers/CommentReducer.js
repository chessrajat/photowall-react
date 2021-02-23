import { ADD_COMMENT } from "../Constants";

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      if (state[action.postId]) {
        return {
          ...state,
          [action.postId]: [action.payload, ...state[action.postId]],
        };
      } else {
        return { ...state, [action.postId]: [action.payload] };
      }

    default:
      return state;
  }
};

export default commentReducer;
