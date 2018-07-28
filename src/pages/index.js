import React from "react";
import PostLink from "../components/post-link";
import SideBar from "../components/SideBar";

const IndexPage = props => {
  const edges = props.data.allMarkdownRemark.edges;
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return (
    <div className="page-content">
      <div className="posts">{Posts}</div>
      <SideBar selfie={props.data.selfie}/>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    selfie: imageSharp(id: { regex: "/selfie/" }) {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes_noBase64
        }
    }
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
