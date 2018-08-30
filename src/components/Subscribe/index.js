import React from "react"

const SubscribeForm = () => (
  <div className="subscribe">
    <h3>Subscribe to my weekly newsletter!</h3>
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
      </p>
      <p>
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

)

export default SubscribeForm
