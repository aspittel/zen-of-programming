import React from "react"
import Img from "gatsby-image"

const SideBar = props => {
  return (
    <div className="bio">
      <div className="about">
        <h3>Ali Spittel</h3>
        <Img sizes={props.selfie.sizes} alt="Selfie of me" />
        Hi! Welcome to the Zen of Programming where I talk about programming and
        my life surrounding it!
      </div>
      <div className="subscribe">
        <h3>Don't miss any articles!</h3>
        <form
          style={{
            border: "1px",
            solid: "#ccc",
            padding: "3px",
            textAlign: "center"
          }}
          action="https://tinyletter.com/ali_writes_code"
          method="post"
          target="popupwindow"
          onSubmit={() => {
            window.open(
              "https://tinyletter.com/ali_writes_code",
              "popupwindow",
              "scrollbars=yes,width=800,height=600"
            )
            return true
          }}
        >
          <p>
            <label htmlFor="tlemail">Email</label>
            <input
              type="text"
              name="email"
              id="tlemail"
              placeholder="Your email address"
              className="email-field"
            />
          </p>

          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" className="subscribe-button" />
        </form>
      </div>
    </div>
  )
}

export default SideBar
