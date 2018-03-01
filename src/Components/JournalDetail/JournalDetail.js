import React, { Component } from 'react';
import MyMapComponent from '../Map/Map';

export default class JournalDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      createMode: false,
      editMode: false,
      map: {},
      journalEntry: {}
    }
  }

  componentDidMount() {
    // fetch() JournalEntry using the id from the url params
  }

  render() {
    return(
      <div>
        Hi!
        <MyMapComponent coordinates={[]}/>
      </div>
    )
  }

};
