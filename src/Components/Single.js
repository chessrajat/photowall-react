import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { removePost } from "../Redux/Actions/PostActions";
import Comments from "./Comments";
import Photo from "./Photo";

const Single = ({ posts, comments, removePhoto, loading }) => {
  const params = useParams();
  const id = params.id;

  const post = posts.find((post) => post.id === Number(id));

  const comment = comments[id] || [];
  const index = posts.findIndex((post) => post.id === Number(id));
  if (loading) {
    return <div className="loader">...loading</div>;
  } else if (post) {
    return (
      <div className="single-photo">
        <Photo
          post={post}
          removePhoto={removePhoto}
          index={index}
          comments={comments}
        />
        <Comments comments={comment} postId={id} />
      </div>
    );
  } else {
    return <h1> ... No post found</h1>;
  }
};

export default Single;
