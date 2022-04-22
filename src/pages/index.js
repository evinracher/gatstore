import React from "react";
import { Link, graphql } from "gatsby";

import { SEO, Jumbo } from "../components";
import styled from "styled-components";

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`;

const Button = styled.button`
  width: 6rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color};
  &:hover {
    transform: scale(1.5);
  }
`;

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button color="gray">Buy</Button>
    <Link to="/page-2/">Go to page 2</Link>
  </>
);

export default IndexPage;
