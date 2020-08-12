/** @jsx jsx */
import React from "react"
import { jsx, Text, Box, Image, Grid } from "theme-ui"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';
import { graphql } from "gatsby";

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/team');

const TeamPage = (props) => {
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

      <Text
        sx={{
          fontSize: [2, 3],
          fontWeight: '700',
          alignItems: 'center',
          alignSelf: 'center',
          mb: 4
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
                      fontSize: [0, 1],
                      fontWeight: '700',
                      mb: 1,
                      color: 'green',
                      textAlign: 'center'
                    }}
                  >
                    {data.name}
                  </Text>

                  <Text
                    sx={{
                      fontSize: [0, 1],
                      fontWeight: '700',
                      textAlign: 'center'
                    }}
                  >
                    {data.position}
                  </Text>
                </Box>
              )
            }
          })}
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 4,
          mb: 4
        }}
      >
        {/* <Text sx={ { variant: "styles.headerText", mb: 4, alignSelf: 'center', paddingTop: '10px !important', fontWeight: '700', textAlign: 'center' } }>Erevna Board of Directors</Text>
        <Text
          sx={ { variant: "styles.bodyText", color: "secondary" } }
        >

        <Grid columns={[ 2, null, 4 ]}>
          {teamData.map((item) => {
              if (item.node.childMarkdownRemark) {
                const data = item.node.childMarkdownRemark.frontmatter;

                if(data.erevna) {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%'
                      }}
                    >
                      <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{ color: 'slate' }}>{data.name}</a>
                      <small style={{
                        "fontWeight": "100",
                        "fontSize": "12.5px",
                        "display": "block"
                      }}>{data.erevna}</small>
                    </Box>
                  )
              }
              } else {
                return null;
              }
            })}
        </Grid>
      </Text> */}

      <Text sx={ { variant: "styles.headerText", mb: 4, mt: 4, alignSelf: 'center', paddingTop: '10px !important', fontWeight: '700', textAlign: 'center' } }>Project Leads</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

        {/** width={[ 128, null, 192 ]} */}
        <Grid columns={[ 2, null, 4 ]}>
          {teamData.map((item) => {
              if (item.node.childMarkdownRemark) {
                const data = item.node.childMarkdownRemark.frontmatter;

                if(data.lead) {
                  return (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
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
{/*    <Text sx={ { variant: "styles.headerText", mb: 4, mt: 4, alignSelf: 'center', paddingTop: '10px !important', fontWeight: '700', textAlign: 'center'} }>Directors</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >
*/}
      {/** width={[ 128, null, 192 ]} */}
{/*      <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if(data.director) {
                return (
                  <Text>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{
                        color: "secondary"
                      }}>{data.name}</a>
                    <small style={{
                      "fontWeight": "100",
                      "fontSize": "12.5px",
                      "display": "block"
                    }}>{data.position}</small>
                  </Text>
                )
            }
            } else {
              return null;
            }
          })}
      </Grid>
    </Text> */}

{/*     <Text sx={ { variant: "styles.headerText", mb: 4, mt: 4, alignSelf: 'center', paddingTop: '10px !important', fontWeight: '700', textAlign: 'center' } }>Community Managers</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >
*/}
      {/** width={[ 128, null, 192 ]} */}
{/*       <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if(data.community_manager) {
                return (
                  <Text>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{
                        color: "secondary"
                      }}>{data.name}</a>
                    <small style={{
                      "fontWeight": "100",
                      "fontSize": "12.5px",
                      "display": "block"
                    }}>{data.community_manager}</small>
                  </Text>
                )
            }
            } else {
              return null;
            }
          })}
      </Grid>
    </Text> */}

     <Text sx={ { variant: "styles.headerText", mb: 4, mt: 4, alignSelf: 'center', paddingTop: '10px !important', fontWeight: '700', textAlign: 'center' } }>Advisors</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

      {/** width={[ 128, null, 192 ]} */}
       <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if(data.advisor) {
                return (
                  <Text>
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{
                        color: "secondary"
                      }}>{data.name}</a>
                    <small style={{
                      "fontWeight": "100",
                      "fontSize": "12.5px",
                      "display": "block"
                    }}>{data.initiative}</small>
                  </Text>
                )
            }
            } else {
              return null;
            }
          })}
      </Grid>
    </Text>
    </Box>

  

      {/* <Text sx={ { variant: "styles.headerText", mb: 4, color: "grey" } }>Members</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

      <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if (!data.executive && !data.director && !data.lead) {
                if (data.position || data.project) {
                  return (
                    <Text>
                      <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{
                          color: "secondary"
                        }}>{data.name}</a>

                      <small style={{
                        "fontWeight": "100",
                        "fontSize": "12.5px",
                        "display": "block"
                      }}>
                        {data.position || data.project}
                      </small>
                    </Text>
                  )
                }
              }
            }
          })}

          {teamData.map((item) => {
              if (item.node.childMarkdownRemark) {
                const data = item.node.childMarkdownRemark.frontmatter;

                if(!data.executive && !data.erevna && !data.director && !data.lead && !data.community_manager) {
                  if (!data.position && !data.project) {
                    return (
                      <Text>
                        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" sx={{
                            color: "secondary"
                          }}>{data.name}</a>
                      </Text>
                    )
                  }
                }
              }
            })}
      </Grid>
    </Text> */}
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
