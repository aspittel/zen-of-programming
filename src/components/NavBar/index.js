import React from "react"
import Link from "gatsby-link"

import SocialLinks from "../SocialLinks"

const NavBar = () => (
  <nav>
    <span className="internal-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/uses">Uses</Link>
    </span>

    <span className="social-links">
    <SocialLinks />
    </span>
  </nav>
)

export default NavBar
