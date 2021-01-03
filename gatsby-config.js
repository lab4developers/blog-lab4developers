require('dotenv').config({
  path: '.env',
});

module.exports = {
  pathPrefix: "/blog-lab4developers",
  siteMetadata: {
    title: 'blog-lab4developers',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: ['article', 'category', 'writer'],
        singleTypes: ['homepage', 'global'],
        queryLimit: 1000,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
};
