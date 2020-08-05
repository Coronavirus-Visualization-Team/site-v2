/** @jsx jsx */
import React from "react"
import { Box, jsx, Text, useColorMode, Container , Embed} from "theme-ui"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/visualizations/us-rates-interactive');

const usRatesInteractivePage = props => {
  return (
    <>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Helmet title="CVT | US Rates Interactive" />
      <Text
        sx={{
          fontSize: [3, 4],
          maxWidth: ["100%", "65%"],
          m: "2vh 0vw"
        }}
      >
      US Rates Interactive Model
      </Text>
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: 4
        }}
      >
        <Embed
          src={'/us_rates.html'}
          sx={{
            background: "transparent",
            border: "1px solid #ccc",
            height: [400, 400], 
            borderRadius: "25px"
          }}
        />
        <Text
          sx={{
            fontSize: [0, 1],
            maxWidth: ["100%", "65%"],
            m: "2vh auto",
            textAlign: "center",
            color: "primary", 
            position: "relative"
          }}
          >
            By Maria Izzi
        </Text>
    </Box>
     
      </> 
  ) 
}

export default usRatesInteractivePage;