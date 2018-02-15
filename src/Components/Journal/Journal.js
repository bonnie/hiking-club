import React, { Component } from 'react';
import './Journal.scss';

const Journal = function(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.entry}</p>
    </div>
  );
}

export default Journal;
