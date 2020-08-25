/** @jsx jsx */
import React, { useRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { jsx, Text, Box, Image } from "theme-ui"
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
  }, [imageRef]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Helmet title="CVT | Home" />

      <div
        sx={{
          width: "100%",
          height: `${`calc(${height}px + 1vh)`}`
        }}
      />

      <div sx={{
        display: 'block',
      }}>
        <Image src={Background} sx={{
          width: '100vw',
          height: 'auto',
          position: 'absolute',
          left: 0,
          top: 0
        }} ref={imageRef} />

        <Box
          sx={{
            position: "absolute",
            top: ['0', '10%'],
            left: ['0', '5%'],
            display: "flex",
            flexDirection: "column",
          }}
        >
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