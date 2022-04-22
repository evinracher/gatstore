import React from "react";
import { graphql } from "gatsby";

import { SEO, Jumbo, Products } from "../components";

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            description
            type
            object
            images
          }
          unit_amount
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripePrice.edges} />
    </>
  );
};

export default IndexPage;
