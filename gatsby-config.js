/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: '/2023',
  siteMetadata: {
    title: 'Sudweb - La conférence Web surtout Humaine',
    siteUrl: 'https://www.sudweb.fr/2023',
  },
  plugins: [
    'gatsby-theme-material-ui-top-layout',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          selfHosted: [
            {
              family: 'Oraqle Script',
              urls: {
                woff: '/src/assets/fonts/subset-OraqleScript.woff',
                woff2: '/src/assets/fonts/subset-OraqleScript.woff2',
              },
            },
          ],
          google2: [
            {
              family: 'Plus Jakarta Sans',
              axes: 'ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700',
            },
          ],
        },
      },
    },
  ],
};