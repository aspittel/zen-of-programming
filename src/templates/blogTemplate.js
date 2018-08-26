import React from "react"
import SideBar from "../components/SideBar"
import Share from "../components/SocialShare"
import SocialMeta from "../components/SocialMeta"

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, selfie, site } = data // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = markdownRemark
  const pinterestImage = frontmatter.pinterest_image ? frontmatter.pinterest_image : frontmatter.cover
  return (
    <div className="page-content">
      <SocialMeta frontmatter={frontmatter} excerpt={excerpt}/>
      <div className="blog-post">
        <h1 className="blog-title">{frontmatter.title}</h1>
        <img src={frontmatter.cover} alt={frontmatter.title} className="header-picture" />
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
              title: frontmatter.title,
              image: `${site.siteMetadata.siteUrl}${pinterestImage}`
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
        twitter_image
        facebook_image
        pinterest_image
      }
    }
  }
`
