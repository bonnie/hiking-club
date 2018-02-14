import React, { Component } from 'react';
import Review from '../Review/Review';
import Journal from '../Journal/Journal';
import './Profile.scss';

const Profile = function(props) {
  return (
    <div className="profile-container">
      <div className="user-profile">
        <img className="profile-pic" src={props.profilePicture}/>
        <h3 className="user-name">Name: {props.name}</h3>
        <h4>Email: {props.email}</h4>
      </div>
      <div className="user-content">
        <Review />
        <Journal />
      </div>
    </div>
  );
};

export default Profile;
