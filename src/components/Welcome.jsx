import React from "react";

export default function Welcome({ onGetPostClick }) {
  return (
    <center>
      <h1 className="text-center">There are no posts</h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-primary"
      >
        Get Posts from server
      </button>
    </center>
  );
}
