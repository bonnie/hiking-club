import React from 'react';
import './JournalEntry.scss';

const JournalEntry = function(props) {
  return (
    <div className="journal-container">
      <h4 className="journal-title">{props.title}</h4>
      <p>{props.entry}</p>
    </div>
  );
};

export default JournalEntry;
