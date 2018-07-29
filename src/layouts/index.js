import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import "./index.css";

require("prismjs/themes/prism.css");

const TemplateWrapper = ({ children }) => (
  <div className="container">
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
            "code, programming, women, tech, python, frontend, backend, javascript, html, css"
        }
      ]}
      >
      <html lang="en" />
    </Helmet>
    <NavBar />
    <Header />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
