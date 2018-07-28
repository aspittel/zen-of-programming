import React from "react";
import SideBar from "../components/SideBar"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="page-content">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <img src={frontmatter.cover} x alt="" srcSet="" />
        <h4>{frontmatter.date}</h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <SideBar/>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        cover
        path
        title
      }
    }
  }
`;
