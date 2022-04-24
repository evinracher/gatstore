const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`./src/templates/ProductTemplate.js`);
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
              images
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    });
  });
};
