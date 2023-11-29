import React from "react";
import Loading from "./Loading";
const LoadComments = (props) => {
  if (props.commentsIsLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return props.comments.map((comment) => {
      return (
        <div key={comment.id}>
          <h5>{comment.author}</h5>
          <p>{comment.comment}</p>
          <p>Rating: {comment.rating}</p>
          <p>{comment.date}</p>
        </div>
      );
    });
  }
};

export default LoadComments;
