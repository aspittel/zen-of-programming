import React from "react";
import Link from "gatsby-link";

import Ionicon from "react-ionicons";

const NavBar = () => (
  <nav>
    <span className="internal-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </span>

    <span className="social-links">
      <a href="https://www.instagram.com/ali_writes_code/">
        <Ionicon icon="logo-instagram" />
      </a>

      <a href="https://twitter.com/ASpittel">
        <Ionicon icon="logo-twitter" />
      </a>

      <a href="https://www.pinterest.com/ali0714/" className="pinterest">
        <Ionicon icon="logo-pinterest" />
      </a>

      <a href="https://www.github.com/aspittel">
        <Ionicon icon="logo-github" />
      </a>
    </span>
  </nav>
);

export default NavBar;
