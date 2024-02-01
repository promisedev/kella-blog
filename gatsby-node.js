const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query Pages {
      site {
        siteMetadata {
          data {
            desc
            title
          }
        }
      }
    }
  `);

  result.data.site.siteMetadata.data.forEach(({ title }) => {
    createPage({
      path: `/categories/${title}`,
      component: path.resolve(`src/template/categoryTemp.jsx`),
      context: { slug: title },
      defer: true,
    });
  });
};
