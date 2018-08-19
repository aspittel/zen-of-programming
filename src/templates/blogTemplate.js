import React from "react"
import SideBar from "../components/SideBar"
import Share from "../components/SocialShare"
import Helmet from "react-helmet"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, selfie, site } = data // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = markdownRemark
  return (
    <div className="page-content">
      <Helmet
        title="The Zen of Programming"
        meta={[
          {
            name: "description",
            content: excerpt
          },
          {
            name: "keywords",
            content: frontmatter.tags.join(", ")
          },
          {
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            name: "twitter:site",
            content: "@aspittel"
          },
          {
            name: "twitter:creator",
            content: "@aspittel"
          },
          {
            name: "twitter:title",
            content: frontmatter.title
          },
          {
            name: "twitter:description",
            content: excerpt
          },
          {
            name: "twitter:image",
            content: "https://zen-of-programming.com" + frontmatter.cover
          }
        ]}
      >
        <html lang="en" />
      </Helmet>

      <div className="blog-post">
        <h1 className="blog-title">{frontmatter.title}</h1>
        <img src={frontmatter.cover} alt="" srcSet="" className="header-picture" />
        <h4>{frontmatter.date}</h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <h2 className="share">Share</h2>
        <Share
          socialConfig={{
            config: {
              twitterData: "@aspittel",
              url: `${site.siteMetadata.siteUrl}${frontmatter.path}`,
              title: frontmatter.title
            }
          }}
        />
      </div>
      <SideBar selfie={selfie} />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    selfie: imageSharp(id: { regex: "/selfie/" }) {
      sizes(maxWidth: 500) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }
    site {
      siteMetadata {
        siteUrl
        twitterHandle
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 150)
      frontmatter {
        date
        cover
        path
        title
        tags
      }
    }
  }
`
