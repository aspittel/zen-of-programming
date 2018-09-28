import React from "react"

const SubscribeForm = () => (
  <div className="subscribe">
    <h3>Subscribe to my weekly newsletter!</h3>
    <form action="https://zen-of-programming.us12.list-manage.com/subscribe/post?u=35ca9911cc046f5f8a4ad1400&amp;id=e3c4b59fcf" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" style={{ border: '1px', solid: '#ccc', padding: '3px', textAlign: 'center' }} className="validate" target="_blank" noValidate>
      <p className="mc-field-group">
        <label htmlFor="mce-EMAIL">Email
          </label>
      </p>
      <p>
        <input type="email" name="EMAIL" className="required email-field" id="mce-EMAIL" />
      </p>
      <div id="mce-responses" className="clear" style={{ display: "none" }}>
        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
        <div className="response" id="mce-success-response" style={{ display: "none" }}>></div>
      </div>
      <div type="hidden" style={{ display: "none" }}>
        <input type="text" name="b_35ca9911cc046f5f8a4ad1400_e3c4b59fcf" tabIndex="-1" value="" placeholder="Your email address" />
      </div>
      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="subscribe-button" style={{textAlign:'center', margin: '0 auto'}} />
    </form>
  </div>
)

export default SubscribeForm
