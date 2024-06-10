import React, { useContext } from "react";
import PostList from "./PostList";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card">
      <button
        className="cancel-button"
        onClick={() => deletePost(post.id)}
        aria-label="Close"
      >
        &times;
      </button>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <a href="#" className="btn btn-primary">
          Reactions: {post.reactions.likes}
        </a>
        <div>
          <small>Tags: {post.tags.join(", ")}</small>
        </div>
      </div>
    </div>
  );
};

export default Post;
