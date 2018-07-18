import React from "react";
import PostLink from "../components/post-link";
import selfie from "../img/selfie.jpg";

const IndexPage = props => {
  const edges = props.data.allMarkdownRemark.edges;
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div className="page-content">
      <div className="posts">{Posts}</div>
      <div className="bio">
        <div className="about">
          <h3>Ali Spittel</h3>
          <img src={selfie} alt="Me writing code" />
          Hi! Welcome to the Zen of Programming where I talk about programming
          and my life surrounding it!
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
              );
              return true;
            }}
          >
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
            <input
              type="submit"
              value="Subscribe"
              className="subscribe-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 800)
          frontmatter {
            date
            path
            title
            cover
          }
        }
      }
    }
  }
`;
