import { ADD_POST, LOAD_PHOTOS, REMOVE_POST } from "../Constants";

const p = [];

const PostReducer = (state = p, action) => {
  switch (action.type) {
    case REMOVE_POST:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    case ADD_POST:
      return [action.payload, ...state];
    case LOAD_PHOTOS:
      return [...action.posts];
    default:
      return state;
  }
};

export default PostReducer;
