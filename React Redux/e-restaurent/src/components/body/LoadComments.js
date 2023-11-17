import React from "react";

const LoadComments = ({ comments }) => {
  const previewComments = comments.map((c) => {
    return (
      <div key={c.id}>
        <h5>{c.author}</h5>
        <p>{c.comment}</p>
        <p>{c.rating}</p>
        <p>{c.date}</p>
      </div>
    );
  });
  return <div>{previewComments}</div>;
};

export default LoadComments;
