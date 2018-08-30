import React from "react"
import Img from "gatsby-image"

import Subscribe from "../Subscribe"

const SideBar = props => (
    <div className="bio">
      <div className="about">
        <h3>Ali Spittel</h3>
        <Img sizes={props.selfie.sizes} alt="Selfie of me" className="selfie"/>
        Hi! Welcome to the Zen of Programming where I talk about programming and
        my life surrounding it!
      </div>
      <Subscribe />
    </div>
  )

export default SideBar
