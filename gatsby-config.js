const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: `Andrew Dell'Aringa`,
    description:
      'Andrew Dell\'Aringa is a software engineer focused on building clean, testable, and scalable web and mobile experiences using modern technologies like Node.js, React Native, and Docker.',
    siteUrl: 'https://andrewdellaringa.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // Essential plugins for basic functionality
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // Essential for static file serving
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Essential for markdown content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
    // Essential for proper static file serving
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Andrew Dell\'Aringa',
        short_name: 'Andrew',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },

    // Temporarily comment out complex plugins to isolate the issue
    // `gatsby-plugin-sitemap`,
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/content/posts`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/content/projects`,
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: 'gatsby-remark-external-links',
    //         options: {
    //           target: '_blank',
    //           rel: 'nofollow noopener noreferrer',
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           maxWidth: 700,
    //           linkImagesToOriginal: true,
    //           quality: 90,
    //           tracedSVG: { color: config.colors.green },
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           classPrefix: 'language-',
    //           inlineCodeMarker: null,
    //           aliases: {},
    //           showLineNumbers: false,
    //           noInlineHighlight: false,
    //           languageExtensions: [
    //             {
    //               language: 'superscript',
    //               extend: 'javascript',
    //               definition: {
    //                 superscript_types: /(SuperType)/,
    //               },
    //               fertBefore: {
    //                 function: {
    //                   superscript_keywords: /(superif|superelse)/,
    //               },
    //             },
    //           ],
    //           prompt: {
    //             user: 'root',
    //             host: 'localhost',
    //             global: false,
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-XXXXXXXXX-X',
    //   },
    // },
  ],
};
