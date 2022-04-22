import React from "react";
import { Link } from "gatsby";
import priceFormat from "../utils/priceFormat";
import { StyledProducts } from "../styles/components";

export default function Products({ products }) {
  console.log(products);
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = priceFormat(node.unit_amount);
          return (
            <article key={node.id}>
              <img
                src={node.product.images[0]}
                alt={`Image of: ${node.product.name}`}
              />
              <p>{node.product.name}</p>
              <small>{price}</small>
              <Link to={`/${node.id}`}>Buy</Link>
            </article>
          );
        })}
      </section>
    </StyledProducts>
  );
}
