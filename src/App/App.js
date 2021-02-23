import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, useHistory } from "react-router-dom";
import AddPhoto from "../Components/AddPhoto";
import PhotoWall from "../Components/PhotoWall";
import Single from "../Components/Single";
import Title from "../Components/Title";
import {
  startLoadingPost,
  startRemovingPost,
} from "../Redux/Actions/PostActions";

function App() {
  const [loading, setLoading] = useState(true);

  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const history = useHistory();

  const removePhoto = (removedindex, id) => {
    dispatch(startRemovingPost(removedindex, id));
    history.push("/");
  };

  useEffect(() => {
    dispatch(startLoadingPost()).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Link to="/" className="title">
        <Title />
      </Link>
      <Route path="/" exact>
        <div>
          <PhotoWall
            posts={posts}
            removePhoto={removePhoto}
            comments={comments}
          />
        </div>
      </Route>
      <Route path="/addphoto">
        <AddPhoto />
      </Route>
      <Route path="/single/:id">
        <Single
          loading={loading}
          posts={posts}
          comments={comments}
          removePhoto={removePhoto}
        />
      </Route>
    </div>
  );
}

export default App;
