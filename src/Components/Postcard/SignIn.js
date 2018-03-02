import React, { Component } from 'react';
import './Postcard.scss';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render() {
    let postCard = null;

    if (!this.props.postCardShowing) {
      postCard = (
        <div></div>
      )
    } else {
      postCard = (
        <div className="modal-background">
          <div className="postcard">
            <button id="close-modal" onClick={this.props.closeModal}>&times;</button>
            <form className="signin-form" method="POST" action="http://localhost:3000/signin">
              <label>
                Login
                <input type="email" name="email" required />
              </label>
              <label>
                Password
                <input type="password" password="password" required />
              </label>
              <button id="sign-in-btn" type="submit" onClick={this.props.fakeSignUp}>Sign In</button>
            </form>
          </div>
        </div>
      )
    }

    return (
      <div>{postCard}</div>
    )
  };
};
