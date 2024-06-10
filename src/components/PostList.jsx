import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts/search?q=love")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };
  return (
    <div className="post-list">
      {postList.length === 0 && <Welcome onGetPostClick={handleGetPostClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
