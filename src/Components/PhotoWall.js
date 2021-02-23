import React from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo";

function PhotoWall(props) {
  return (
    <div>
      <Link to="/addphoto">
        <button className="addIcon">+</button>
      </Link>

      <div className="photoGrid">
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              removePhoto={props.removePhoto}
              index={index}
              comments={props.comments}
            />
          ))}
      </div>
    </div>
  );
}

export default PhotoWall;
