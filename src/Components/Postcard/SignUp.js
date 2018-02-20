import React, { Component } from 'react';
import './Postcard.scss';

export default class SignUp extends Component {
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
            <form className="signup-form" method="POST" action="http://localhost:3000/signup">
              <label>
                Login
                <input type="text" name="name" required />
              </label>
              <label>
                Password
                <input type="password" name="password" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <button id="sign-up-btn" type="submit">Sign Up</button>
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
