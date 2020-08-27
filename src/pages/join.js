/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import { Box, Button, Grid, Image, jsx, Text, useColorMode } from "theme-ui"
import HeaderImage from "../components/Join/HeaderImage"
import { Helmet } from "react-helmet"
import HarvardLogo from "../../static/img/harvard.png"
import BerkeleyLogo from "../../static/img/berkeley.png"
import StanfordLogo from "../../static/img/stanford.png"
import ColumbiaLogo from "../../static/img/columbia.png"
import MitLogo from "../../static/img/mit.png"
import JohnHopkinsLogo from "../../static/img/johnhopkins.png"
import GtLogo from "../../static/img/gt-seal.png"
import ReactGA from 'react-ga';

const trackingId = "UA-171730199-2"; 

ReactGA.initialize(trackingId);
ReactGA.pageview('/join');

const JoinPage = props => {
  const partnersData = props.data.partners.edges

  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Helmet title="CVT | Join" />
      <HeaderImage />
      <Text
        sx={{
          variant: "styles.headerText",
          mt: "6vh",
          color: "primary",
          position: "relative"
        }}
      >
        Our Mission.
      </Text>
      <Text sx={{ variant: "styles.bodyText", color: "secondary", position: "relative" }}>
        We collaborate on data visualization and analytics projects, economic
        research, and policy writing to better inform government entities on
        the impact of COVID-19, clear misconceptions, and the good that is happening.
      </Text>

      <Text sx={{ variant: "styles.headerText", color: "primary", position: "relative" }}>
        Let’s Accomplish Things Together.
      </Text>
      <Text sx={{ variant: "styles.subHeader", color: "secondary", position: "relative" }}>
        Join our global organization comprised of students from these institutions and
        more:
      </Text>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          py: 45,
          position: "relative"
        }}
      >
        <Grid width={["10%"]} gap={["2%"]}>
          <Image
            src={StanfordLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["65%", "60%"],
            }}
          />
          <Image
            src={BerkeleyLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["85%", "85%"],
            }}
          />
          <Image
            src={GtLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["90%", "90%"],
            }}
          />
          <Image
            src={HarvardLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["95%", "90%"],
            }}
          />
          <Image
            src={MitLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["95%", "90%"],
            }}
          />
          <Image
            src={ColumbiaLogo}
            sx={{
              mb: 2,
              mt: 1,
              objectFit: "contain",
              width: ["95%", "95%"],
            }}
          />
          <Image
            src={JohnHopkinsLogo}
            sx={{
              mb: 2,
              objectFit: "contain",
              width: ["65%", "65%"],
            }}
          />
        </Grid>
      </Box>

      <Text sx={{ variant: "styles.subHeader", py: 15, mb: 2, color: "primary" }}>
        We’re also partnered with these organizations:{" "}
      </Text>
      <Grid width={["20%"]} gap={["6%"]} sx={{
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: colorMode === "dark" ? "0 0 16px rgba(255, 255, 255, 0.3)" : "none",
          padding: 3,
          pb: "10em"
      }}>
        {partnersData.map(item => {
          const data = item.node.childMarkdownRemark.frontmatter

          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href={data.website} target="_blank" rel="noopener noreferrer">
                <Image
                  src={data.image}
                  alt={data.name}
                  sx={{
                    mb: 2,
                    objectFit: "contain",
                  }}
                />
              </a>
            </Box>
          )
        })}
      </Grid>
      <Text sx={{ variant: "styles.headerText", mt: "4vh", color: "primary" }}>Individuals</Text>
      <Text sx={{ variant: "styles.bodyText", color: "secondary" }}>
        We're looking for driven and talented individuals to join our team
        remotely. Learn more about our teams and ongoing
        projects <a style={{color : 'grey', textDecoration: 'none'}} href="https://docs.google.com/document/d/1SHfrZSzl9UMZUQSgxhle_XpVIRJ369YDQTp97ebLeNk/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here.</a>
      </Text>
      <Button
        as="a"
        href="https://tiny.cc/CvT"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "#388df7",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 4
        }}
      >
        Join Us
      </Button>

      <Text sx={{ variant: "styles.headerText", mt: "2vh", color: "primary" }}>Organizations</Text>
      <Text sx={{ variant: "styles.bodyText", color: "secondary" }}>
        We’re looking to form partnerships and project collaborations with
        organizations that either have data we can use or seek data. We welcome
        organizations who are willing to provide mentorship and resources to
        help us fulfill our mission.{" "}
      </Text>
      <Button
        as="a"
        href="mailto:coronavirusvisualizationteam@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "#388df7",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 4
        }}
      >
        Email Us
      </Button>

      <Text sx={{ variant: "styles.headerText", mt: "2vh", color: "primary" }}>Join Our Community</Text>
      <Text sx={{ variant: "styles.bodyText", color: "secondary" }}>
      The Coronavirus Visualization Community, or the CVC for short, is the larger community of the CVT and has learning opportunities, research projects, 
      and a community of like-minded individuals who are not as experienced in data science or just want to help out during the COVID-19 pandemic. 
      Having a community of over 1,000 members we have multiple current initiatives which include:
      <ul>
        <li>An Intercollegiate Discord -- a place where high school students can ask for advice and college students can attend events, network, and hangout</li>
        <li>eLearning Courses and Initiatives -- we have partnered with Beyond The Five to create a series of COVID-19 data science and research courses in addition to creating the Educational Non-Profit Coalition which is a huge mailing list of organizations who are actively contribute to education</li>
        <li>CVC/JOGL Research Projects -- we have over 15 active projects that CVC members can work on in collaboration with JOGL and partners. Some of our projects include: distribution of FDA approved testing kits, general visualization projects, medical research projects, and many more</li>
      </ul>
      If you are interested in joining the CVC please join our Slack Workplace at: <a style={{color : 'grey', textDecoration: 'none'}} href="https://bit.ly/Join-CVC" target="_blank" rel="noopener noreferrer">https://bit.ly/Join-CVC.</a>
      </Text>
      <Button
        as="a"
        href="https://bit.ly/Join-CVC"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "#388df7",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 4
        }}
      >
        Join CVC
      </Button>
    </>
  )
}
export default JoinPage
export const query = graphql`
  query {
    partners: allFile(filter: { sourceInstanceName: { eq: "partners" } }) {
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
    }
  }
`
