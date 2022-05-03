import React from "react";
import { Link } from "gatsby";
import priceFormat from "../utils/priceFormat";
import { StyledProducts } from "../styles/components";

export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = priceFormat(node.unit_amount);
          return (
            <article key={node.id}>
              <img src={node.product.images[0]} alt={node.product.name} />
              <div>
                <p>{node.product.name}</p>
                <small>{price}</small>
              </div>
              <Link to={`/${node.id}`}>Buy</Link>
            </article>
          );
        })}
      </section>
    </StyledProducts>
  );
}
