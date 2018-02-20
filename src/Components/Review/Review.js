import React from 'react';
import './Review.scss';

const Review = function(props) {
  return (
    <div>
      <p>{props.comment} </p>
      <p>Rating: {props.rating} </p>
    </div>
  );
}

export default Review;
