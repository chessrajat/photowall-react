import React from "react";
import { Link } from "react-router-dom";

function Photo(props) {
  const { post, removePhoto, comments } = props;
  return (
    <div>
      <figure className="figure">
        <Link to={`/single/${post.id}`}>
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>

        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button onClick={() => removePhoto(props.index, post.id)}>
            Remove
          </button>
        </div>
        <Link to={`/single/${post.id}`} className="button">
          <div className="comment-count">
            <div className="speech-bubble"></div>
            {comments[post.id] ? comments[post.id].length : 0}
          </div>
        </Link>
      </figure>
    </div>
  );
}

export default Photo;
