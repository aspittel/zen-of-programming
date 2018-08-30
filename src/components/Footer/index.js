import React from 'react'

import SocialLinks from '../SocialLinks'

import "./index.css"

const Footer = () => (
  <footer>
    <div>
      <span>© 2018 The Zen of Programming</span>
      <span><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></span>
    </div>
    <div>
      <span><a href="https://tinyletter.com/ali_writes_code">Subscribe</a></span>
      <span><a href="/about">About</a></span>
      <span><a href="/privacy-policy">Privacy Policy</a></span>
      <span><a href="/contact">Contact</a></span>
    </div>
    <div>
      <SocialLinks />
    </div>
  </footer>
)

export default Footer
