/** @jsx jsx */
import React from "react"
import { Image, Box, jsx, Text, Grid, Container, useColorMode } from "theme-ui"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import ReactGA from 'react-ga';
import VizTile from '../components/Visualizations/VizTile'

const trackingId = "UA-171730199-2";

ReactGA.initialize(trackingId);
ReactGA.pageview('/visualizations');

const VizPage = props => {
  const vizData = props.data.viz.edges
  const breakingNewsData = props.data.breakingnews.edges
  const socioeconomicsData = props.data.socioeconomics.edges

  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Helmet title="CVT | Visualizations" />
        <Text
            sx={{
              fontSize: [3, 4],
              maxWidth: ["100%", "65%"],
              m: "2vh 0vw"
            }}
          >
            Visualizations
        </Text>

        <Text
            sx={{
              fontSize: [1, 2],
              maxWidth: ["100%", "65%"],
              mb: "3em",
            }}
          >
           Our team has created empirical data visualizations that educate the public on the pandemic’s ongoing impact
           and display information from multiple, often overlooked angles such as climate implications, socioeconomic factors, and societal aspects.
        </Text>
      </Box>
      {
        // <Container
        //         sx={{
        //           position: "relative",
        //           width: "100%",
        //           minWidth: "100%",
        //         }}
        // >
        // <Text
        //   sx={{
        //     width: "100%",
        //     textAlign: "left",
        //     m: "1.5em 0 4vh 0",
        //     color: "primary",
        //     fontSize: [2, 3],
        //
        //   }}
        // >
        //   Breaking News
        // </Text>
        // </Container>
        // <Grid
        //   gap={3}
        //   width={[300, null, 350]}
        //   sx={{
        //     justifyItems: ['center', 'unset'],
        //     position: "relative"
        //   }}
        // >
        //   {breakingNewsData.map(item => {
        //     const data = item.node.childMarkdownRemark.frontmatter
        //     return (
        //       <VizTile name={data.name} image={data.image} author={data.author} link={data.link} linkTarget={data.linkTarget} />
        //     )
        //   })}
        // </Grid>
        // <Box
        //   sx={{
        //     position: "relative",
        //     display: "flex",
        //     flexDirection: "column"
        //   }}
        // >
        //   <Text
        //     sx={{
        //       fontSize: [2, 3],
        //       maxWidth: ["100%", "65%"],
        //       m: "4vh 0vw",
        //       color: "primary"
        //     }}
        //   >
        //     Socioeconomic Factors
        // </Text>
        // </Box>
        // <Grid
        //   gap={3}
        //   width={[300, null, 350]}
        //   sx={{
        //     justifyItems: ['center', 'unset'],
        //   }}
        // >
        // {socioeconomicsData.map(item => {
        //     const data = item.node.childMarkdownRemark.frontmatter
        //     return (
        //       <VizTile name={data.name} image={data.image} author={data.author} link={data.link} linkTarget={data.linkTarget} />
        //     )
        //   })}
        //   </Grid>
        // <Box
        //   sx={{
        //     position: "relative",
        //     display: "flex",
        //     flexDirection: "column"
        //   }}
        // >
        //   <Text
        //     sx={{
        //       fontSize: [2, 3],
        //       maxWidth: ["100%", "65%"],
        //       m: "4vh 0vw",
        //       color: "primary"
        //     }}
        //   >
        //     General
        // </Text>
        // </Box>
        // <Grid
        //   gap={3}
        //   width={[300, null, 350]}
        //   sx={{
        //     justifyItems: ['center', 'unset'],
        //   }}
        // >
        // {vizData.map(item => {
        //     const data = item.node.childMarkdownRemark.frontmatter
        //     return (
        //       <VizTile name={data.name} image={data.image} author={data.author} link={data.link} linkTarget={data.linkTarget} />
        //     )
        //   })}
        //   </Grid>
      }

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Text
          sx={{
            fontSize: [2, 3],
            maxWidth: "100%",
            m: "4vh 0vw",
            color: "primary"
          }}
        >
          Harvard CGA Projects
        </Text>
        <iframe title="CoViz Project Team" scrolling="no" frameborder="0" src="https://harvard-cga.maps.arcgis.com/home/webmap/embedGallery.html?displayapps=true&displayinline=true&group=6ee6c2a54beb432cae327c578923b11d" style={{width:'100%', height:'687px'}}></iframe>
      </Box>

    </>
  )
}
export default VizPage
export const query = graphql`
  query {
    viz: allFile(filter: { sourceInstanceName: { eq: "viz" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              author
              image
              link
              linkTarget
            }
          }
        }
      }
    },
    breakingnews: allFile(filter: { sourceInstanceName: { eq: "breakingnews" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              author
              image
              link
              linkTarget
            }
          }
        }
      }
    },
    socioeconomics: allFile(filter: { sourceInstanceName: { eq: "socioeconomics" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              author
              image
              link
              linkTarget
            }
          }
        }
      }
    },
  }
`
