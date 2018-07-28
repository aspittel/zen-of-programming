import React from "react";
import Img from "gatsby-image";

const AboutPage = props => {
  return (
    <div>
      <div className="container">
        <Img sizes={props.data.writingCode.sizes} alt="picture of me" className="selfie" />
        <p>
          Hi! I'm Ali. I'm a (mostly) self-taught software engineer who lives in
          Washington, DC.
        </p>
        <p>
          I have the really cool job of teaching other people how to code at
          General Assembly DC's Web Development Immersive program. Before that,
          I was a software engineer at 0ptimus.
        </p>
        <p>
          My favorite stack right now is Vue.js on the frontend and Django on
          the backend. I also have worked with React, Ruby on Rails, Java,
          Meteor, Express, MongoDB, PostgreSQL, CSS, and C++.
        </p>
        <p>
          When I'm not working you can find me watching my favorite New England
          sports teams, competing on CodeWars, taking runs around Capitol Hill,
          rock climbing, or participating in DC coding community events.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    writingCode: imageSharp(id: { regex: "/writing-code/" }) {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes_noBase64
        }
    }
  }
`;
