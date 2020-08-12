/** @jsx jsx */
import React, { useState } from "react"
import { jsx, Text, Box, Image, Grid, Container } from "theme-ui"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';
import { graphql, useStaticQuery } from "gatsby";

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/team');

const TeamPage = (props) => {
  const [projectLeads, setProjectLeads] = useState(false);
  const [directors, setDirector] = useState(false);
  const [advisors, setAdvisor] = useState(false);

  let teamData = props.data.team.edges;
  teamData = teamData.sort((x,y) => { return x.position == "undefined" ? -1 : y.position == "undefined" ? 1 : 0; });

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Helmet title="CVT | Team" />
      <Text
        sx={{
          fontSize: [3, 4],
          fontWeight: '700',
          alignItems: 'center',
          alignSelf: 'center',
          mb: 3,
          color: 'green'
        }}
      >
        Our Team
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
              fontSize: [2, 3],
              fontWeight: '700',
              alignItems: 'center',
              alignSelf: 'center',
              mb: 4,
              color: 'white'
            }}
          >
            Executive Directors
          </Text>

            <Grid
            columns={[ 2, null, 4 ]}
            sx={{
              justifyItems: ['center', 'unset']
            }}
            >
              {teamData.map((item) => {
                if (item.node.childMarkdownRemark) {
                  const data = item.node.childMarkdownRemark.frontmatter;

                  if(!data.executive) {
                    return null;
                  }

                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: [128, 192],
                          height: [128, 192],
                          borderRadius: '10px',
                          ":hover > #overlay": {
                            opacity: 1
                          },
                        }}
                      >
                        <Image src={data.image} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
                      </Box>

                      <Text
                        sx={{
                          fontSize: [1, 2],
                          fontWeight: '700',
                          mb: '0rem',
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        {data.name}
                      </Text>

                      <Text
                        sx={{
                          fontSize: '0.9rem',
                          fontWeight: '400',
                          textAlign: 'center',
                          color: 'rgba(255,255,255,0.8)',
                          mt: '0'
                        }}
                      >
                        {data.position}
                      </Text>
                    </Box>
                  )
                }
              })}
          </Grid>
      </Container>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 4,
          mb: 4
        }}
      >

      <Text sx={ { variant: "styles.headerText", mb: 4, mt: 4, alignSelf: 'center', paddingTop: '10px !important', fontWeight: '700', textAlign: 'center', cursor: 'pointer', display: 'flex' } } onClick={() => setProjectLeads(!projectLeads)}>Project Leads <span sx={{ fontSize: '0.4em', my: 'auto', ml: 3 }}>{projectLeads ? '▲' : '▼'}</span></Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >
        <Grid columns={[ 2, null, 4 ]} sx={{ justifyItems: ['center', 'unset'], height: `${projectLeads ? 'unset' : '0px'}`, transform: `scaleY(${projectLeads ? '1' : '0'})` }}>
          {teamData.map((item) => {
              if (item.node.childMarkdownRemark) {
                const data = item.node.childMarkdownRemark.frontmatter;

                if(data.lead) {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%'
                      }}
                    >
                      <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{ color: 'slate' }}>{data.name}</a>
                      <small style={{
                        "fontWeight": "100",
                        "fontSize": "12.5px",
                        "display": "block"
                      }}>{data.project}</small>
                    </Box>
                  )
              }
              } else {
                return null;
              }
            })}
        </Grid>
      </Text>

    <Text sx={ { variant: "styles.headerText", mb: 4, mt: 4, alignSelf: 'center', paddingTop: '10px !important', fontWeight: '700', textAlign: 'center', cursor: 'pointer', display: 'flex'} } onClick={() => setAdvisor(!advisors)}>Advisors <span sx={{ fontSize: '0.4em', my: 'auto', ml: 3 }}>{advisors ? '▲' : '▼'}</span></Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

<Grid columns={[ 2, null, 4 ]} sx={{ height: `${advisors ? 'unset' : '0px'}`, transform: `scaleY(${advisors ? '1' : '0'})` }}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if(data.advisor) {
                return (
                  <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%'
                  }}
                >
                  <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{ color: 'slate' }}>{data.name}</a>
                  <small style={{
                    "fontWeight": "100",
                    "fontSize": "12.5px",
                    "display": "block"
                  }}>{data.initiative}</small>
                </Box>
                )
            }
            } else {
              return null;
            }
          })}
      </Grid>
    </Text>
    </Box>
  </Box>
)};
export default TeamPage;



export const query = graphql`
query {
  team: allFile(filter: {sourceInstanceName: {eq: "team"}}) {
    edges {
      node {
        childMarkdownRemark {
          frontmatter {
            name
            executive
            erevna
            director
            lead
            advisor
            initiative
            community_manager
            position
            project
            image
            linkedin
        }
      }
    }
  }
},
}`
