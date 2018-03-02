import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = function(props) {

  let navBarLinks = null;

  if (!props.isLoggedIn) {
    navBarLinks = (

          <div>
            <Link to="/"><p>Home</p></Link>
            <Link to="/trails"><p>Trails</p></Link>
            <p onClick={props.openSignUpModal}>Sign Up</p>
            <p onClick={props.openSignInModal}>Sign In</p>
          </div>

    )
  } else {
    navBarLinks = (

          <div>
            <Link to="/"><p>Home</p></Link>
            <Link to="/profile"><p>Profile</p></Link>
            <Link to="/trails"><p>Trails</p></Link>
            <p>Log Out</p>
          </div>

    )
  }
  return (
    <div className="navbar-container">{navBarLinks}</div>
  );
}

export default Navbar;
