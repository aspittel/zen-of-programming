import React from 'react'
import Tags from '../Tags'

const SideBar = ({ tags }) => (
  <div>
    <div className='vertical-line'>
      <h2>About</h2>
      <p>
        Hi! I’m Ali. I’m a (mostly) self taught software engineer, and my favorite thing to do is to learn new things.
      </p>
      <p>
        The entire field of development is rapidly evolving — it seems like every day there is a hot new JavaScript framework or code challenge trending on Twitter. It gets really hard to filter out the noise and only stick to learning some of these technologies.
      </p>
      <p>
        I’ve decided to temporarily throw caution to the wind and try to learn all the things — one thing per week in fact. This blog focuses on me learning one thing a week and then reporting back here on how it went.
      </p>
      <div className='contact'>
        <h2>Find Me Online!</h2>
        <a href='http://twitter.com/aspittel'>Twitter</a>
        <a href='http://alispit.tel'>Personal Site</a>
        <a href='http://dev.to/aspittel'>Dev.to</a>
      </div>

    </div>
  </div>
)

export default SideBar
