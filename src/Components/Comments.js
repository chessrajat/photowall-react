import React from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../Redux/Actions/CommentActions";

const Comments = ({ comments, postId }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    dispatch(addComment(comment, postId));
    e.target.elements.comment.value = "";
  };

  return (
    <div className="comment">
      {comments.map((comment, index) => {
        return <p key={index}>{comment}</p>;
      })}
      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" name="comment" placeholder="Comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
