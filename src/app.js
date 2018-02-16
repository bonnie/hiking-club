import React, {Component} from 'react';
import axios from 'axios';

import './index.scss';

import Postcard from './Components/Postcard/Postcard';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
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

  openModal(userStatus) {
    this.setState({
      postCardShowing: true,
    })
  };

  closeModal() {
    this.setState({
      postCardShowing: false,
    })
  };

  render() {
      return (
        <div>
          <Postcard
          postCardShowing={this.state.postCardShowing}
          closeModal={this.closeModal}
          />
          <Navbar
          isLoggedIn={this.state.isLoggedIn}
          openModal={this.openModal}
          />
          <Profile
          name={this.state.name}
          />
        </div>
      );
  };
};
