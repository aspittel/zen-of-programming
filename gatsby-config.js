module.exports = {
  siteMetadata: {
    title: "The Zen of Programming",
    siteUrl: `https://zen-of-programming.com`,
    twitterHandle: "@aspittel",
    description:
      "Hi! Welcome to the Zen of Programming where I talk about programming and my life surrounding it!"
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`
    },  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Zen of Programming",
        short_name: "ZenOfCode",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#cf92b7",
        display: "minimal-ui",
        icon: "static/zen-of-programming-logo.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-twitter",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.id,
                  custom_elements: [{ "content:encoded": `<img src="${edge.node.frontmatter.cover}" />` + edge.node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { published: { eq: true } } }
                ) {
                  edges {
                    node {
                      id
                      html
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
            `,
            output: "/rss.xml"
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116285482-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`
  ]
}
