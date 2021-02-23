import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { startAddingPost } from "../Redux/Actions/PostActions";

function AddPhoto(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: link,
    };
    if (link && description) {
      dispatch(startAddingPost(post));
      history.push("/");
    }
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Description" name="description" />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

export default AddPhoto;
