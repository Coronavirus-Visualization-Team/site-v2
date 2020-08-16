/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { Container, jsx, Text, Grid, Box, Card, Button, Image } from "theme-ui"
import ProjectPicker from "../components/Projects/ProjectPicker"
import Tile from "../components/Projects/Tile"
import VizTile from "../components/Visualizations/VizTile"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';
import { useState } from "react"

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/projects');

const Projects = ({ data }) => {
  const [shownFeatured, setShownFeatured] = useState(0);

  const { edges: posts } = data.allMarkdownRemark;
  const featured = posts.filter(({ node: post }) => post.frontmatter.featured === true);

  const { edges: vizPosts } = data.allFile;

  return (
    <>
      <Helmet title="CVT | Projects" />
      <Container
        sx={{
          width: "100%",
          maxWidth: "90%",
          mb: ["5em", "5em"],
        }}
      >
      <Text
        sx={{
          fontSize: [3, 4],
          fontWeight: '700',
          alignItems: 'center',
          alignSelf: 'center',
          mb: 3,
          color: 'green',
          textAlign: 'center'
        }}
      >
        Our Work
      </Text>
      <Text
        sx={{
          fontSize: [0, 1],
          fontWeight: '400',
          alignItems: 'center',
          alignSelf: 'center',
          mb: 3,
          color: 'black',
          textAlign: 'center'
        }}
      >
        Our team has created empirical data visualizations that educate the public 
        on the pandemic's ongoing impact and display information from multiple, 
        often overlooked angles such as climate implications, socioeconomic factors,
        and social aspects.
      </Text>

        <Container
          sx={{
            fontSize: [2, 3],
            position: "relative",
            bg: "green",
            maxWidth: "100%",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-between',
            mt: "50px",
            mb: "30px !important"
          }}
        >
          <Text
            sx={{
              fontWeight: "700",
              textAlign: 'center',
              color: 'white'
            }}
          >
            Featured Projects
          </Text>
          
          <Box
            sx={{
              width: "90%",
              mx: "auto",
              position: "relative",
              mt: 4
            }}
          >
            <Image
              src={featured[shownFeatured]?.node?.frontmatter?.image}
              sx={{
                width: '100%'
              }}
            />

            {shownFeatured > 0 ?
            <Text
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: '5px',
                color: 'green',
                fontSize: ["80px", "120px"],
                cursor: 'pointer'
              }}
              onClick={() => {
                if(shownFeatured > 0) {
                  setShownFeatured(shownFeatured - 1);
                }
                else {
                  setShownFeatured(0);
                }
              }}
            >
              &#8249;
            </Text> : null}

            <Text
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: '5px',
                color: 'green',
                fontSize: ["80px", "120px"],
                cursor: 'pointer'
              }}
              onClick={() => {
                if(shownFeatured < featured.length - 1) {
                  setShownFeatured(shownFeatured + 1);
                }
                else {
                  setShownFeatured(0);
                }
              }}
            >
              &#8250;
            </Text>

            <Button
              onClick = {() => {
                if(featured[shownFeatured]?.node?.frontmatter?.slug.length !== 0){
                    window.location.href = `/projects/${featured[0]?.node?.frontmatter?.slug}`
                }
              }}
              sx={{
                position: "absolute",
                bottom: 4,
                right: 3,
                fontWeight: "700",
                fontSize: ["0.7rem", "1rem"],
                bg: "white",
                color: "black",
                borderRadius: "button",
                boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.3)",
                cursor: "pointer"
              }}
            >
              Learn More
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mx: "auto",
              my: 3
            }}
          >

            {featured.map((item, index) => {
              return (
                <Box
                  key={index}
                  onClick={() => setShownFeatured(index)}
                  sx={{
                    width: "20px",
                    height: "20px",
                    bg: index === shownFeatured ? "green" : "lightgray",
                    borderRadius: "50%",
                    border: "solid 4px gray",
                    mx: 3,
                    cursor: "pointer"
                  }}
                />
              )
            })}

          </Box>

          <Text
            sx={{
              mx: "auto",
              textAlign: "center",
              fontSize: '0.5em',
              mt: 2,
              color: 'white'
            }}
          >
            Image Source: {featured[shownFeatured]?.node?.frontmatter?.label}
          </Text>
          
          <Text
            sx={{
              width: "90%",
              mx: "auto",
              mt: 3,
              fontWeight: "700",
              color: 'white'
            }}
          >
            {featured[shownFeatured]?.node?.frontmatter?.title}
          </Text>

          <Text
            sx={{
              width: "90%",
              mx: "auto",
              mt: 2,
              mb: 4,
              fontSize: ["1.1rem", "1.2rem"],
              color: 'white'
            }}
          >
            {featured[shownFeatured]?.node?.html.replace(/<p>/g,'').replace('</p>','')}
          </Text>

          {/**<ProjectPicker posts={posts}/>
          */}
        </Container>
      </Container>
      
      <Container
        sx={{
          width: '100% !important',
          position: "relative",
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: 'space-between',
          maxHeight: "800px",
          maxWidth: '100% !important',
          mx: '0 !important',
          px: '5%'
        }}
      >
        {vizPosts && (
          <Box sx={{display: "flex", flexDirection: "column", width:["100%", "45%"], alignItems: 'top', float: 'left', overflowY: "hidden", overflowX: "visible", px: '40px', py: 3, bg: '#ffffff'}}>
            <Text sx={ { variant: "styles.headerText", mb: 4, pt: "0 !important", color: "black", textAlign: "center", fontWeight: '700' } }>Visualizations</Text>

            <Box sx={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              flex: 1,
            }}>
              {vizPosts.map(({ node: post }) => {
                return <VizTile
                link= {post.childMarkdownRemark.frontmatter.link}
                title={post.childMarkdownRemark.frontmatter.name}
                img={post.childMarkdownRemark.frontmatter.image}
                linkTarget={post.childMarkdownRemark.frontmatter.linkTarget} >
                </VizTile>
              })}
            </Box>
          </Box>
        )}

        <Box
          sx={{
            height: ['1px', '100%'],
            width: ['100%', '1px'],
            bg: 'black'
          }}
        >

        </Box>

        <Box sx={{display: "flex", flexDirection: "column", width:["100%", "45%"], alignItems: 'top', float: 'right', overflowY: "hidden", overflowX: "visible", px: '40px', py: 3, bg: "#ffffff"}}>
          <Text sx={ { variant: "styles.headerText", mb: 4, pt: "0 !important", color: "black", textAlign: "center", fontWeight: '700' } }>More Projects</Text>

          <Box sx={{
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            flex: 1,
          }}>
            {posts.map(({ node: post }) => {
              return <Tile
              slug={post.frontmatter.slug}
              title={post.frontmatter.title}
              img={post.frontmatter.image} >
              </Tile>
            })}
          </Box>
        </Box>
      </Container>
     
    </>
  )
}

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectQuery {
        allMarkdownRemark (
          filter: { frontmatter: { templateKey: { eq: "project" } } },
          sort: { fields: [frontmatter___featured], order: DESC }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              html
              id
              frontmatter {
                slug
                title
                featured
                image
                label
              }
            }
          }
        },
        allFile(filter: { sourceInstanceName: { eq: "viz" } }) {
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
        } 
      }
    `}
    render={(data, count) => <Projects data={data} count={count} />}
  />
)
