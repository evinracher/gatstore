/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import { Content, Footer } from "../styles/components";
import "./layout.css";

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>
      <main>{children}</main>
    </Content>
    <Footer>
      With{" "}
      <span role="img" aria-label="emoji">
        ❤️
      </span>{" "}
      by{" "}
      <a href="https://github.com/evinracher" target="_blank">
        evinracher
      </a>
    </Footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
