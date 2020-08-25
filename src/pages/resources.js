/** @jsx jsx */
import React from "react"
import { jsx, Text, Box, Embed } from "theme-ui"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/resources');

export default () => (
  <Box
    sx={{
      position: "relative",

      display: "flex",
      flexDirection: "column"
    }}
  >
    <Helmet title="CVT | Resources" />
    <Text
      sx={{
        fontSize: [3, 4],
        fontWeight: '700',
        textAlign: 'center',
        maxWidth: ["100%", "65%"],
        mb: 3,
        mt: 3,
        color: "#00E4BF",
        alignSelf: 'center'
      }}
    >
      Want to get involved in combating COVID-19?
    </Text>

    <Text
      sx={{
        fontSize: [0, 1],
        maxWidth: ["100%", "65%"],
        textAlign: 'center',
        alignSelf: 'center'
      }}
    >
      Our team crowdsourced these resources and opportunities to learn new skills, join initiatives, and attend online events—all for free.
    </Text>

    <Box
      sx={{
        width: "100%",
        mt: 6,
        bg: '#00E4BF',
        px: '5%',
        py: '5%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Text
        sx={{
          fontSize: [3, 4],
          fontWeight: '700',
          textAlign: "center",
          color: "white",
          mb: 4
        }}
      >
        Resources
      </Text>

      <Embed
        src="https://airtable.com/embed/shr9Csx0eMqbLByBN?backgroundColor=teal"
        sx={{
          background: "transparent",
          border: "1px solid #ccc",
          height: [450, 350]
        }}
      />
    </Box>

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5
      }}
    >
      <Text
        sx={{
          fontSize: [3, 4],
          fontWeight: '700',
          width: "100%",
          textAlign: "center",
          color: '#00E4BF'
        }}
      >
        Have suggestions?
      </Text>

      <Text
        sx={{
          fontSize: [2, 3],
          width: "100%",
          textAlign: "center",
          color: "secondary"
        }}
      >
        Add to the list!
      </Text>
    </Box>

    <Box
      sx={{
        width: "100%",
        mt: 5,
        justifyContent: "center",
        alignItems: "center",
        mx: "auto"
      }}
    >
      <Embed
        src="https://airtable.com/embed/shr6ByY3nznfVWut1?backgroundColor=teal"
        sx={{
          background: "transparent",
          border: "1px solid #ccc",
          height: [450, 350]
        }}
      />
    </Box>
  </Box>
)
