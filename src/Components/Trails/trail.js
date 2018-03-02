import React from 'react';
import './trails.scss';

const Trail = function(props) {
  console.log("What's up??????", props);
  return (
    <div>
      <p>{props.trailName}</p>
    </div>
  )
}

export default Trail;
