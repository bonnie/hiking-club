import React, {Component} from 'react';
import axios from 'axios';

import './index.scss';

import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

export default class App extends Component {
  constructor(props) {
    super(props);

    // temporarily hardcoding variables to test this out.
    this.state = {
      isLoggedIn: false,
      userId: 4,
      title: 'Profile Page',
      name: 'Plankton',
      email: 'plankton@plankton.org',
    }
  }

  // this will call the user profile on page load.
  componentDidMount() {
    this.showProfile();
  };

  showProfile() {
    axios.get(`https://localhost:3000/users/${this.state.userId}`)
      .then((user) => {
        const { name, email } = user;
        const profilePicture = user.profile_picture;
        this.setState({
          name: name,
          profilePicture: profilePicture,
          email: email,
        });
      })
      .catch(console.error);
  }

  render() {
      return (
        <div>
          <Navbar />
          <h1>{this.state.title}</h1>
          <Profile
          name={this.state.name}
          email={this.state.email}
          />
        </div>
      );
  };
};
