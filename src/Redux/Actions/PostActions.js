import { ADD_POST, LOAD_PHOTOS, REMOVE_POST } from "../Constants";
import { db } from "../../Utils/Firebase";

export const removePost = (index) => {
  return {
    type: REMOVE_POST,
    payload: index,
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const loadPost = (posts) => {
  return {
    type: LOAD_PHOTOS,
    posts,
  };
};

export const startAddingPost = (post) => {
  return async (dispatch) => {
    return db
      .collection("photos")
      .doc(post.id.toString())
      .set(post)
      .then(() => {
        dispatch(addPost(post));
      });
  };
};

export const startLoadingPost = () => {
  return async (dispatch) => {
    return db
      .collection("photos")
      .get()
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
          posts.push(doc.data());
        });
        dispatch(loadPost(posts));
      });
  };
};

export const startRemovingPost = (index, id) => {
  return async (dispatch) => {
    return db
      .collection("photos")
      .doc(id.toString())
      .delete()
      .then(() => {
        dispatch(removePost(index));
      });
  };
};
