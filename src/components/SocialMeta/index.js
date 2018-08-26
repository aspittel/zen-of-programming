import React from "react"
import Helmet from "react-helmet"

export default ({ frontmatter, excerpt }) => {
  const twitterImage = frontmatter.twitter_image ? frontmatter.twitter_image : frontmatter.cover
  const facebookImage = frontmatter.facebook_image ? frontmatter.facebook_image : frontmatter.cover

  return (
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
          content: "https://zen-of-programming.com" + twitterImage
        },
        {
          name: "og:url",
          content: "https://zen-of-programming.com" + frontmatter.path
        },
        {
          name: "og:type",
          content: "article"
        },
        {
          name: "og:title",
          content: frontmatter.title
        },
        {
          name: "og:image",
          content: "https://zen-of-programming.com" + facebookImage
        }
      ]}
    >
      <html lang="en" />
    </Helmet>
  )
}
