import React from 'react';
import './Review.scss';

const Review = function(props) {
  console.log('review props', props);
  return (
    <div>
      <h2>Rating: {props.rating} </h2>
      <p>Comment: {props.comment} </p>
    </div>
  );
}

export default Review;
