require('dotenv').config({
  path: ".env",
}) 

module.exports = {
  siteMetadata: {
    title: "Bella Rose",
    description: "aspired data scientist, machine learning and natural language processing enthusiast from UW CSE",
    url: "https://bellaroseee.github.io",
  },
  plugins: [
    "gatsby-plugin-styled-components", // css-jsx
    "gatsby-plugin-image", // StaticImages 
    "gatsby-plugin-react-helmet", // SEO -> metadata
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-graphql`, // graphql query for github api
      options: {
        typeName: "Github",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        }
      },
    },
  ],
};
