import { combineReducers } from "redux";
import commentReducer from "./CommentReducer";
import PostReducer from "./PostReducer";

const rootReducer = combineReducers({
  posts: PostReducer,
  comments: commentReducer,
});

export default rootReducer;
