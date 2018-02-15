import React from 'react';
import './Review.scss';

const Review = function(props) {
  console.log('review props', props);
  return (
    <div>
      <p>{props.comment} </p>
      <p>Rating: {props.rating} </p>
    </div>
  );
}

export default Review;
