/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { Container, jsx, Text, Grid, Box, Card, Button, Image } from "theme-ui"
import ProjectPicker from "../components/Projects/ProjectPicker"
import Tile from "../components/Projects/Tile"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/projects');

const Projects = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  const featured = posts.filter(({ node: post }) => post.frontmatter.featured === true);

  const { edges: vizPosts } = data.allFile;

  return (
    <>
      <Helmet title="CVT | Projects" />
      <Container
        sx={{
          width: "100%",
          maxWidth: "xl",
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
            mt: "50px",
            mb: "30px !important"
          }}
        >
          <Text
            sx={{
              fontWeight: "700",
              textAlign: 'center',
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
              src={featured[0]?.node?.frontmatter?.image}
            />

            <Button
              onClick = {() => {
                if(featured[0]?.node?.frontmatter?.slug.length != 0){
                    window.location.href = `/projects/${featured[0]?.node?.frontmatter?.slug}`
                }
              }}
              sx={{
                position: "absolute",
                bottom: 4,
                right: 3,
                fontWeight: "700",
                fontSize: "1rem",
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

          <Text
            sx={{
              mx: "auto",
              textAlign: "center",
              fontSize: '0.5em',
              mt: 2
            }}
          >
            Image Source: {featured[0]?.node?.frontmatter?.label}
          </Text>
          
          <Text
            sx={{
              width: "90%",
              mx: "auto",
              mt: 3,
              fontWeight: "700"
            }}
          >
            {featured[0]?.node?.frontmatter?.title}
          </Text>

          <Text
            sx={{
              width: "90%",
              mx: "auto",
              mt: 2,
              fontSize: "1rem"
            }}
          >
            {featured[0]?.node?.html.replace(/<p>/g,'').replace('</p>','')}
          </Text>

          {/**<ProjectPicker posts={posts}/>
          */}
        </Container>
      </Container>

      
      <Box sx={{width:"50%", float: 'left'}}>
        <Text sx={ { variant: "styles.headerText", mb: 4, color: "black" } }>Visualizations</Text>
      </Box>
      <Box sx={{width:"50%", float: 'right'}}>
        <Text sx={ { variant: "styles.headerText", mb: 4, color: "black" } }>More Projects</Text>
      </Box>
      
      <Container
        sx={{
          maxWidth: "xl",
          position: "relative",
          display: "flex",
          maxHeight: "800px"
        }}
      >
        {vizPosts && (
          <Box sx={{width:"50%", alignItems: 'top', float: 'left', overflowY: "scroll", overflowX: "visible", px: 3, py: 3}}>
            {vizPosts.map(({ node: post }) => {
              return <Tile
              //slug={post.childMarkdownRemark.frontmatter.slug}
              click={() => window.open(post.childMarkdownRemark.frontmatter.link, "_blank").focus()}
              title={post.childMarkdownRemark.frontmatter.name}
              img={post.childMarkdownRemark.frontmatter.image} >
              </Tile>
            })}
          </Box>
        )}

        <Box sx={{width:"50%", alignItems: 'top', float: 'right', overflowY: "scroll", overflowX: "visible", px: 3, py: 3}}>
            {posts.map(({ node: post }) => {
              return <Tile
              slug={post.frontmatter.slug}
              title={post.frontmatter.title}
              img={post.frontmatter.image} >
              </Tile>
            })}
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
                path
                slug
                title
                featured
                image
                label
                date(formatString: "MMMM DD, YYYY")
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
