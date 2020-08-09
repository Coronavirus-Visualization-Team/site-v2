/** @jsx jsx */
import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx, Text, Divider, Box, Container, Grid, Image, useColorMode} from "theme-ui"
import Tile from "../components/Projects/Tile"
import VizTile from "../components/Visualizations/VizTile"
import Background from '../components/Bitmap.png'
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/');

const IndexPage = (props) => {
  const partnersData = props.data.partners.edges;

  const [colorMode, setColorMode] = useColorMode();

  const backgroundImageStyles = {
        backgroundImage: `url(${Background})`,
        position:'center',
        maxWidth:'900px',
        maxHeight:'900px',
        display:'block',
        backgroundSize: 'cover',
        Background: 'linear-gradient',
        opacity: '0.8',
        backgroundColor: 'grey',
        backgroundRepeat: 'no-repeat'
};

  return (
    <div css={backgroundImageStyles}>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        // alignItems: 'center'
      }}
    >
      <Helmet title="CVT | Home" />
      <Text
        sx={{
          fontSize: [1, 3],
          maxWidth: ["100%", "100%"],
          fontWeight: '600',
          my: "15vh",
          p: 4,
          color: "white"
        }}
      >
        Real Data. Real People.
        <Text
        sx={{
          fontSize: [1, 2],
          maxWidth: ["100%", "100%"],
          fontWeight: '500',
          mb: '3',
        
          color: "green"
        }}
      >
        #WeAreInThisTogether.
      </Text>
      </Text>
      
      {/*
      <Text
        sx={{
          fontSize: [1, 3],
          maxWidth: ["100%", "90%"],
          my: "4vh",
          p: 4,
          borderTop: '1px solid white',
          borderBottom: '1px solid white',
          color: "primary"
        }}
      >
        We're the <b>Coronavirus Visualization Team</b>,  a crowdsourced student network of data scientists and analysts, developers, and communicators working to better visualize and share the impacts, present and future, of COVID-19.
      </Text>
      
      <Text
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 4,
          color: "primary",
          fontSize: [3, 4]
        }}
      >
        Our Partners
      </Text>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mt: 4,
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "none",
          padding: 3,
          mb: "3em"
        }}
      >
        {partnersData.map((item) => {
          const data = item.node.childMarkdownRemark.frontmatter;

          return (
            <Box
              sx={{
                width: ["20%"],
                display: "flex",
                justifyContent: "center"
              }}
            >
              <a href={data.website} target="_blank" rel="noopener noreferrer">
                <Image
                  src={data.image}
                  alt={data.name}
                  sx={{
                    mb: 3,
                    objectFit: "contain"
                  }}
                />
              </a>
            </Box>
          )
        })}
      </Box>

      <Divider
        sx={{
          my: 2
        }}
      />

    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          sx={{
            color: "primary",
            fontSize: [3, 4]
          }}
        >
          Join Us
        </Text>

        <Text
          sx={{
            color: "secondary",
            fontSize: [1, 2],
            my: 4,
            maxWidth: ["100%", "65%"]
          }}
        >
          We’re looking for talented and driven individuals and organizations to join our team remotely.
        </Text>

        <Link
          sx={{
            color: "primary",
            fontSize: [1, 2],
            textDecoration: "none"
          }}
          to="/join"
        >
          Learn More &#187;
        </Link>
      </Box>
        */}
    </Box>
    </div>
  )
}

export default IndexPage;

export const query = graphql`
  query {
    partners: allFile(filter: {sourceInstanceName: {eq: "partners"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              image
              website
            }
          }
        }
      }
    },
}`
