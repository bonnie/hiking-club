import React from 'react'

const Review = function(props) {
  return (
    <div>
      <h2>Rating: {props.rating} </h2>
      <p>Comment: {props.comment} </p>
    </div>
  );
}

export default Review;
