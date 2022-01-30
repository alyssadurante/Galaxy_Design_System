module.exports = {
  siteMetadata: {
    title: 'Galaxy Design System',
    description: 'Design system for AnswerRockets Galaxy',
    keywords: 'gatsby,theme,carbon',
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Galaxy Design System',
        icon: 'src/images/favicon.svg',
        short_name: 'GDS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#1F2937',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
