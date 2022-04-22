import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

export default function Image({ name }) {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          icon: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => <Img fluid={data[name].childImageSharp.fluid} />}
    ></StaticQuery>
  );
}
