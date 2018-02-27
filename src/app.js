import React, {Component} from 'react';
import axios from 'axios';

import './index.scss';

import SignUp from './Components/Postcard/SignUp';
import SignIn from './Components/Postcard/SignIn'
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Trails from './Components/Trails/trails';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.openSignUpModal = this.openSignUpModal.bind(this);
    this.openSignInModal = this.openSignInModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      isLoggedIn: false,
      postCardShowing: false,
      hasAccount: false,
      userId: 4,
      name: '',
      email: '',
    }
  };

  // this will call the user profile on page load.
  componentDidMount() {
    this.showProfile();
  };

  showProfile() {
    const fakeUser = {
      userId: 4,
      name: 'Smokey Bear',
      email: 'smokey@thebear.com'
    }
    // axios.get(`https://localhost:3000/users/${this.state.userId}`)
    //   .then((user) => {
    //     const { name, email } = user;
    //     const profilePicture = user.profile_picture;
        this.setState({
          userId: fakeUser.id,
          name: fakeUser.name,
          email: fakeUser.email,
        });
      // })
      // .catch(console.error);
  };

  openSignUpModal(userStatus) {
    this.setState({
      postCardShowing: true,
      hasAccount: false,
    })
  };

  openSignInModal(userStatus) {
    this.setState({
      postCardShowing: true,
      hasAccount: true,
    })
  }

  closeModal() {
    this.setState({
      postCardShowing: false,
    })
  };

  render() {
    let modal = null;
    if (!this.state.hasAccount) {
      modal = (
        <SignUp
        postCardShowing={this.state.postCardShowing}
        closeModal={this.closeModal}
        />
      )
    } else {
      modal = (
        <SignIn
        postCardShowing={this.state.postCardShowing}
        closeModal={this.closeModal}
        />
      )
    }
      return (
        <div className="app-container">
          {modal}
          <Navbar
          isLoggedIn={this.state.isLoggedIn}
          openSignUpModal={this.openSignUpModal}
          openSignInModal={this.openSignInModal}
          />
          <Trails />
          <Profile
          name={this.state.name}
          />
        </div>
      );
  };
};
