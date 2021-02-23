import { ADD_COMMENT } from "../Constants";

export const addComment = (comment, postId) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
    postId: postId,
  };
};
