module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `partners`,
        path: `${__dirname}/partners`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `viz`,
        path: `${__dirname}/viz`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `breakingnews`,
        path: `${__dirname}/breakingnews`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `socioeconomics`,
        path: `${__dirname}/socioeconomics`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164762906-1",
        head: false,
        anonymize: true,
        respectDNT: false,
        defer: true,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Circular Std"],
          urls: ["/fonts/stylesheet.css"],
        },
      },
    },
  ],

  siteMetadata: {
    title: "Coronavirus Visualization Team",
    description:
      "We're the Coronavirus Visualization Team, a crowdsourced student network of data scientists and analysts, developers, and communicators working to better visualize and share the impacts, present and future, of COVID-19.",
    url: "https://www.understandcovid.org", 
    image: "/assets/banner.png",
    twitterUsername: "@joinCVT",
  },
}
