import React, { Component } from 'react';
import Review from '../Review/Review';
import Journal from '../Journal/Journal';
import './Profile.scss';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      journals: [],
    }
  }

  render() {
    return (
      <div className="profile-container">
        <div className="user-profile">
          <img className="profile-pic" src={this.props.profilePicture}/>
          <h3 className="user-name">Name: {this.props.name}</h3>
          <h4>Email: {this.props.email}</h4>
        </div>
        <div className="user-content">
          <Review />
          <Journal />
        </div>
      </div>
    );

  }
};
