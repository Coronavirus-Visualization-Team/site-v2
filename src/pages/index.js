/** @jsx jsx */
import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx, Text, Box } from "theme-ui"
import Background from '../components/Bitmap.png'
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/');

const IndexPage = () => {
  const imageRef = useRef();
  const [height, setHeight] = useState();

  useEffect(() => {
    setHeight(imageRef?.current?.getBoundingClientRect().height);

    const handleResize = () => setHeight(imageRef?.current?.getBoundingClientRect().height);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageRef])

  const backgroundImageStyles = {
        backgroundImage: `url(${Background})`,
        position: 'absolute',
        left: 0,
        top: 0,
        width:'100vw',
        minHeight: '35vw',
        backgroundSize: 'cover',
        Background: 'linear-gradient',
        opacity: '0.8',
        backgroundColor: 'grey',
        backgroundRepeat: 'no-repeat'
};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        sx={{
          width: "100%",
          height: `${`calc(${height}px - 8vh)`}`
        }}
      />

      <div css={backgroundImageStyles} ref={imageRef}>
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
              fontSize: [2, 4],
              width: "xl",
              fontWeight: '600',
              my: "15vh",
              mx: "auto",
              px: "16px",
              color: "white"
            }}
          >
            Real Data. Real People.
            <Text
            sx={{
              fontSize: [1, 2],
              maxWidth: ["100%", "100%"],
              fontWeight: '700',
              mb: '3',
            
              color: "#00E4BF"
            }}
          >
            #WeAreInThisTogether.
          </Text>
          </Text>
        </Box>
      </div>
    </Box>
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