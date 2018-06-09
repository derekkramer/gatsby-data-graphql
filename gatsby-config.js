module.exports = {
  siteMetadata: {
    title: 'Eats Shoots, Then Leaves',
  },
  plugins: [
    'gatsby-plugin-glamor',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
