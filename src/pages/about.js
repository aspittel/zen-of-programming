import React from "react"
import Img from "gatsby-image"

import Subscribe from "../components/Subscribe"

const AboutPage = props => {
  return (
    <div className="about-me">
      <div className="container">
        <Img sizes={props.data.writingCode.sizes} alt="picture of me" className="selfie" />
        <h2>About Me</h2>
        <p>
          Hi! I'm Ali. I'm a (mostly) self-taught software engineer who lives in
          Washington, DC.
        </p>
        <p>
          I have the really cool job of teaching other people how to code at a bootcamp. Before that,
          I was a software engineer at a data science startup.
        </p>
        <p>
          When I'm not working you can find me watching my favorite New England
          sports teams, competing on CodeWars, taking runs around Capitol Hill,
          rock climbing, or participating in DC coding community events. I am also a co-founder of the <a href="https://art-code-collective.github.io/">Art Code Collective</a> and an organizer for the <a href="https://twitter.com/arttechchat">Art Tech Chat</a>.
        </p>
        <h2>Why I created this blog</h2>
        <p>
          When I started coding in 2013, I didn't see anybody like me in the field -- I was a young woman who had very different interests from most programmers. I also didn't have a background in writing code before college, and I struggled really hard with building confidence. I didn't learn very well in the traditional computer science setting.
        </p>
        <p>
          This blog is for the Ali of a couple years ago -- and all the people like me. I want to show that people like me do exist in this industry and to show a snapshot into my life as a developer. It's going to be a combination of the lifestyle blogs I love to follow, technical posts, and the cultural critiques I occasionally like to dish out.
        </p>
        <p>
          As for the name of the blog, its named after the <a href="https://www.python.org/dev/peps/pep-0020/">"Zen of Python"</a> which is a fantastic poem about the philosophy of the Python programming language. I really love the poem -- I even have it hanging on the wall in my apartment!
        </p>
        <h2>Follow me elsewhere!</h2>
        <p>
          You can also find me on <a href="https://www.instagram.com/ali_writes_code/">Instagram</a>, <a href="https://www.pinterest.com/ali0714/">Pinterest</a>, <a href="https://twitter.com/ASpittel">Twitter</a>, <a href="https://dev.to/aspittel">Dev.to</a>, and <a href="https://medium.com/@ali07cat07">Medium</a>.
        </p>
        <p>The best place to ask me questions online is my <a href="https://github.com/aspittel/ama">AMA Repo on GitHub</a>.
        <p>You can also reach out via <a href="mailto:ali@zen-of-programming.com">email</a>!</p>
        </p>
        <Subscribe/>
      </div>
    </div>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    writingCode: imageSharp(id: { regex: "/selfie/" }) {
        sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes_noBase64
        }
    }
  }
`
