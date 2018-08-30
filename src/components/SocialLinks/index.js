import React from "react"
import Ionicon from "react-ionicons"

const SocialLinks = () => (
  <span>
    <a href="https://www.instagram.com/ali_writes_code/" aria-label="Instagram">
      <Ionicon icon="logo-instagram" />
    </a>

    <a href="https://twitter.com/ASpittel" aria-label="Twitter">
      <Ionicon icon="logo-twitter" />
    </a>

    <a href="https://www.pinterest.com/ali0714/" className="pinterest" aria-label="Pinterest">
      <Ionicon icon="logo-pinterest" />
    </a>

    <a href="https://www.github.com/aspittel" aria-label="GitHub">
      <Ionicon icon="logo-github" />
    </a>
    <a href="https://zen-of-programming.com/rss.xml" aria-label="RSS feed">
      <Ionicon icon="logo-rss" />
    </a>

  </span>
)

export default SocialLinks
