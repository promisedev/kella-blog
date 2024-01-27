/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */




/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    data: [
      {
        title: "health",
        link: "/health",
        desc: "some dummy description about the category type",
      },
      {
        title: "fashion",
        link: "/fashion",
        desc: "some dummy description about the category type",
      },
      {
        title: "lifestyle",
        link: "/lifestyle",
        desc: "some dummy description about the category type",
      },
    ],
  },
  plugins: ["gatsby-plugin-use-query-params"],
};
