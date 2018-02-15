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
      name: '',
      email: '',
    }
  }

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
  }

  render() {
      return (
        <div>
          <Navbar />
          <Profile
          name={this.state.name}
          />
        </div>
      );
  };
};
