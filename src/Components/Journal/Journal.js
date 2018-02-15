import React from 'react';
import './Journal.scss';

const Journal = function(props) {
  console.log('review journals', props);
  return (
    <div>
      <h2>Title: {props.title} </h2>
      <p>Entry: {props.entry} </p>
    </div>
  );
};

export default Journal;
