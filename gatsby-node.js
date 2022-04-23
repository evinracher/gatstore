const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/product.js`);
  const result = await graphql(`
    {
      allStripePrice {
        edges {
          node {
            id
            unit_amount
            product {
              name
              description
              type
              images
            }
            unit_amount
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    console.log(`creating page for: ${node.id}`);
    createPage({
      path: node.id,
      component: productTemplate,
    });
  });
};
