import React from 'react';
import './Journal.scss';

const Journal = function(props) {
  console.log('review journals', props);
  return (
    <div>
      <h4>{props.title}</h4>
      <p>{props.entry}</p>
    </div>
  );
};

export default Journal;
