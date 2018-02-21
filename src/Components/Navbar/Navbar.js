import React from 'react';

import './Navbar.scss';

const Navbar = function(props) {

  let navBarLinks = null;

  if (!props.isLoggedIn) {
    navBarLinks = (
      <div>
        <p>Home</p>
        <p>Trails</p>
        <p onClick={props.openSignUpModal}>Sign Up</p>
        <p onClick={props.openSignInModal}>Sign In</p>
      </div>
    )
  } else {
    navBarLinks = (
      <div>
      <p>Home</p>
      <p>Profile</p>
      <p>Trails</p>
      <p>Log Out</p>
      </div>
    )
  }
  return (
    <div className="navbar-container">{navBarLinks}</div>
  );
}

export default Navbar;
