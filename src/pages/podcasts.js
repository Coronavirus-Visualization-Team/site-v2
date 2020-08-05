/** @jsx jsx */
import React from "react"
import { jsx, Text, Box, Embed } from "theme-ui"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2";

ReactGA.initialize(trackingId);
ReactGA.pageview('/podcasts');

export default () => (
  <Box
    sx={{
      position: "relative",

      display: "flex",
      flexDirection: "column"
    }}
  >
    <Helmet title="CVT | Podcasts" />
    <Text
      sx={{
        fontSize: [3, 4],
        maxWidth: ["100%", "65%"],
        mb: 3,
        mt: 3,
      }}
    >
      Podcasts
    </Text>

    <Text
      sx={{
        fontSize: [1, 2],
        maxWidth: ["100%", "65%"]
      }}
    >
      Check out our Coronavirus Visualization Podcast below.
    </Text>

    <Box
      sx={{
        width: "100%",
        mt: 5,
        border: "none"
      }}
    >
      <Embed
        src="https://open.spotify.com/embed-podcast/show/5SuhWvQ6JmwCbL5YPaHWIE"
        width="100%"
        height="232"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        sx={{
          background: "transparent",
          border: "none",
          height: "232px",
          padding: "0"
        }}
      />
    </Box>
  </Box>
)
