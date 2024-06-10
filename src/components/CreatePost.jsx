import React, { useRef } from "react";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

export default function CreatePost() {
  const { addPost } = useContext(PostListContext);
  const userIdE = useRef();
  const titleE = useRef();
  const bodyE = useRef();
  const postReactionsE = useRef();
  const tagsE = useRef();

  const handleSubmit = (event) => {
    event.preventDefault;
    const userId = userIdE.current.value;
    const title = titleE.current.value;
    const body = bodyE.current.value;
    const postReactions = postReactionsE.current.value;
    const tags = tagsE.current.value.split(" ");

    // after get all value
    userIdE.current.value = "";
    titleE.current.value = "";
    bodyE.current.value = "";
    postReactionsE.current.value = "";
    tagsE.current.value = "";

    addPost(userId, title, body, postReactions, tags);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card" style={{ width: "600px" }}>
        <div className="card-body">
          <h5 className="card-title">Create Post</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                ref={titleE}
                className="form-control"
                id="postTitle"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postBody" className="form-label">
                Body
              </label>
              <textarea
                type="text"
                ref={bodyE}
                className="form-control"
                id="postBody"
                rows="3"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postReactions" className="form-label">
                Reactions
              </label>
              <input
                type="number"
                ref={postReactionsE}
                className="form-control"
                id="postReactions"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postUserId" className="form-label">
                User ID
              </label>
              <input
                type="text"
                ref={userIdE}
                className="form-control"
                id="postUserId"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postTags" className="form-label">
                Tags (comma separated)
              </label>
              <input
                type="text"
                ref={tagsE}
                className="form-control"
                id="postTags"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
