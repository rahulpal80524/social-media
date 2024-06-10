import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currentPost, action) => {
  let newPost = currentPost;
  if (action.type === "DELETE_POST") {
    newPost = newPost.filter((post) => post.id != action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPost = [action.payload, ...currentPost];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPost = action.payload.posts;
  }
  return newPost;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userId, title, body, postReactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now,
        title: title,
        body: body,
        reactions: postReactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
