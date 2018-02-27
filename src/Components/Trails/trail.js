import React from 'react';
import './trails.scss';

const Trail = function(props) {
  return (
    <div>
      <p>{props.trailName}</p>
    </div>
  )
}

export default Trail;
