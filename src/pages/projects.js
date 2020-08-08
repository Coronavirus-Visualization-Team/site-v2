/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { Container, jsx, Text, Grid, Box, Card, Button} from "theme-ui"
import ProjectPicker from "../components/Projects/ProjectPicker"
import Tile from "../components/Projects/Tile"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/projects');

const Projects = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <Helmet title="CVT | Projects" />
      <Container
        sx={{
          width: "100%",
          maxWidth: "xl",
          mb: ["5em", "20em"],
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
        
      </Text>
        <Container
          sx={{
            fontSize: [2, 3],
            position: "relative",
            bg: "#168CA6",
            maxWidth: "xl",
            p: 4,
            borderRadius: "project",
            height: ["fit-content", "500px"],
            boxShadow: "base",
          }}
        >
          <Text
            sx={{
              mb: "0.01rem",
              fontWeight: "700",
              textAlign: 'center',
            }}
          >
            Featured Projects
          </Text>
          <ProjectPicker posts={posts}/>
        </Container>
      </Container>
      <Grid columns={[1, 2]} gap={[25, 50]}>
        <Box>
        <Text sx={ { variant: "styles.headerText", mb: 4, color: "black" } }>Visualizations</Text>
        </Box>
        <Box>
        <Text sx={ { variant: "styles.headerText", mb: 4, color: "black" } }>More Projects</Text>
        </Box>
    </Grid>
      <Container
        sx={{
          maxWidth: "xl",
          position: "relative",
          display: "flex"
        }}
      >
        {posts && (
          <Card sx={{width:"50%", alignItems: 'top', float: 'right'}}>
            {posts.map(({ node: post }) => {
              return <Tile
              slug={post.frontmatter.slug}
              title={post.frontmatter.title}
              img={post.frontmatter.image} >
              </Tile>
            })}
          </Card>
        )}
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
        }
      }
    `}
    render={(data, count) => <Projects data={data} count={count} />}
  />
)
