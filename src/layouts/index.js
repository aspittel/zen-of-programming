import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import "./index.css"

require("prismjs/themes/prism.css")

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="The Zen of Programming"
      meta={[
        {
          name: "description",
          content: "A blog about writing code and the life surrounding it"
        },
        {
          name: "keywords",
          content:
            "code, programming, women, tech, python, frontend, backend, javascript, html, css, design, frontend programming, start programming"
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
          content: "The Zen of Programming"
        },
        {
          name: "twitter:description",
          content: "A blog about writing code and the life surrounding it"
        },
        {
          name: "twitter:image",
          content: "https://zen-of-programming.com/writing-code.jpeg"
        }

      ]}
    >
      <html lang="en" />
    </Helmet>
    <div className="container">
      <NavBar />
      <Header />
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper;
