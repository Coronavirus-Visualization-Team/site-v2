/** @jsx jsx */
import React from "react"
import { jsx, Text, Box, Image, Grid } from "theme-ui"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga';

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
          alignItems: 'center',
          mb: 4
        }}
      >
        Executive Directors
      </Text>

        <Grid
        gap={2}
        width={[128, null, 192]}
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
                  <Box
                    as="a"
                    href={data.linkedin}
                    target="_blank"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      borderRadius: '10px',
                      transition: 'ease-in-out 0.12s',
                      backgroundColor: 'black',
                      opacity: 0
                    }}
                    id="overlay"
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '7px',
                        left: '10px',
                      }}
                      id="text"
                    >
                      <Text
                        sx={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: [0, 1]
                        }}
                      >{data.name}</Text>
                      <Text
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: [0, 1]
                        }}
                      >{data.position}</Text>
                    </Box>
                  </Box>
                </Box>
              )
            }
          })}
      </Grid>

      <Text sx={ { variant: "styles.headerText", mb: 4, color: "greyHeading" } }>Erevna Board of Directors</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

      {/** width={[ 128, null, 192 ]} */}
      <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if(data.erevna) {
                return (
                  <Text>
                    <a href={data.linkedin} target="_blank" sx={{
                        color: "secondary"
                      }}>{data.name}</a>
                    <small style={{
                      "fontWeight": "100",
                      "fontSize": "12.5px",
                      "display": "block"
                    }}>{data.erevna}</small>
                  </Text>
                )
            }
            } else {
              return null;
            }
          })}
      </Grid>
    </Text>

      <Text sx={ { variant: "styles.headerText", mb: 4, color: "greyHeading" } }>Directors</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

      {/** width={[ 128, null, 192 ]} */}
      <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if(data.director) {
                return (
                  <Text>
                    <a href={data.linkedin} target="_blank" sx={{
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
    </Text>

    <Text sx={ { variant: "styles.headerText", mb: 4, color: "greyHeading" } }>Project Leads</Text>
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
                <Text>
                  <a href={data.linkedin} target="_blank" sx={{
                      color: "secondary"
                    }}>{data.name}</a>
                  <small style={{
                    "fontWeight": "100",
                    "fontSize": "12.5px",
                    "display": "block"
                  }}>{data.project}</small>
                </Text>
              )
          }
          } else {
            return null;
          }
        })}
    </Grid>
  </Text>

    <Text sx={ { variant: "styles.headerText", mb: 4, color: "greyHeading" } }>Community Managers</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

      {/** width={[ 128, null, 192 ]} */}
      <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if(data.community_manager) {
                return (
                  <Text>
                    <a href={data.linkedin} target="_blank" sx={{
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
    </Text>


      <Text sx={ { variant: "styles.headerText", mb: 4, color: "greyHeading" } }>Members</Text>
      <Text
        sx={ { variant: "styles.bodyText", color: "secondary" } }
      >

      {/** width={[ 128, null, 192 ]} */}
      <Grid columns={[ 2, null, 4 ]}>
        {teamData.map((item) => {
            if (item.node.childMarkdownRemark) {
              const data = item.node.childMarkdownRemark.frontmatter;

              if (!data.executive && !data.director && !data.lead) {
                if (data.position || data.project) {
                  return (
                    <Text>
                      <a href={data.linkedin} target="_blank" sx={{
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
                        <a href={data.linkedin} target="_blank" sx={{
                            color: "secondary"
                          }}>{data.name}</a>
                      </Text>
                    )
                  }
                }
              }
            })}
      </Grid>
    </Text>
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
