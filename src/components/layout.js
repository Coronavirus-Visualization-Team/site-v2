/** @jsx jsx */
import { useState } from "react"
import {
  Container,
  Box,
  NavLink,
  Divider,
  jsx,
  Image,
  Text,
  Input,
  Button,
  useColorMode
} from "theme-ui"
import { Link } from "gatsby"
import favicon from "../../static/assets/favicon.ico"
import Logo from "./cvtlogo.svg"
import LogoIconOnly from "../../public/logo_icononly.png";
import { Helmet } from "react-helmet"
import TwitterLogo from "./social-icons/Twitter.png"
import InstagramLogo from "./social-icons/Instagram.png"
import MailLogo from "./social-icons/Mail.png"
import GithubLogo from "./social-icons/GitHub.png"
import MediumLogo from "./social-icons/Medium.png"
import LinkedInLogo from "./social-icons/LinkedIn.png"
import SpotifyLogo from "./social-icons/spotify.png"
import FacebookLogo from "./social-icons/Facebook-Icon-White.png"

import SEO from "../components/seo";

export const Header = () => {
  const [show, toggleShow] = useState(false)

  return(
    <Box
      as="header"
      sx={{
        display: "flex",
        alignItems: "center",
        py: 4,
        height: '16vh',
        "a+a": { ml: [4] },
        zIndex: 10,
        position: "relative",
      }}
    >
      <SEO />
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Link to="/">
        <Image
          sx={{
            width: ["4em", "6em"],
            maxWidth: "79px",
            height: "auto",
          }}
          src={LogoIconOnly}
        />
      </Link>
      <Box sx={{ mx: "auto" }} />
      <div sx = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: "1",
        '@media screen and (max-width: 800px)': {
          display: 'none'
        }
      }}>
        <div sx={{ ml: 'auto' }} />
        <Link to="/projects">
          <NavLink sx={{ fontSize: '0.9em', mx: '1.75em' }}>OUR WORK</NavLink>
        </Link>
        <Link to="/team">
          <NavLink sx={{ fontSize: '0.9em', mx: '1.75em' }}>OUR TEAM</NavLink>
        </Link>
        <Link to="/resources">
          <NavLink sx={{ fontSize: '0.9em', mx: '1.75em' }}>RESOURCES</NavLink>
        </Link>

        <Link to='/join' sx={{
          ml: 'auto !important'
        }}>
          <Button sx={{
            bg: 'blue',
            borderRadius: '24px',
            px: '1.85em',
            pt: '0.85em !important',
            pb: '0.85em !important',
            fontSize: '0.9em',
            fontWeight: '700',
            cursor: 'pointer',
            '&:focus': {
              outline: 'none'
            }
          }}>
            JOIN US
          </Button>
        </Link>
      </div>

      <div sx={{display: 'none',
                '@media screen and (max-width: 800px)': {
                  display: 'flex'
                },
                transform: show ? 'translateX(-50vw)' : null,
                transition: 'all 0.2s cubic-bezier(.25, .8, .25, 1)',
                '&:hover': {cursor: 'pointer'},
                width: '25px',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'end'
              }}
            onClick={() => toggleShow(!show)}>
        <p sx={{borderRadius: '10px',
                height: '2px',
                width: '25px',
                backgroundColor: 'white',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(9px) rotate(-45deg)' : null}}></p>
        <p sx={{borderRadius: '10px',
                height: '2px',
                width: show ? '25px' : '15px',
                backgroundColor: 'white',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(1px) rotate(45deg)': null}}></p>
          <p sx={{borderRadius: '10px',
                height: '2px',
                width: show ? '25px' : '20px',
                backgroundColor: 'white',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(-8px) rotate(45deg)' : null}}></p>
      </div>

      <div sx={{
                position: 'fixed',
                top: 0,
                height: '100%',
                maxHeight: '100vh',
                paddingTop: '30px',
                width: '50vw',
                right: show ? '0' : 'calc(-50vw)',
                background: 'gradient',
                boxShadow: 'base',
                transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
                color: 'black'}}>
        <div sx = {{
          display: 'flex',
          flexDirection: 'column'
        }} >
        <Link to="/projects">
          <NavLink onClick={() => toggleShow(!show)} sx={{ fontSize: '0.9em', marginLeft: '32px', mb: 2 }}>OUR WORK</NavLink>
        </Link>
        <Link to="/team">
          <NavLink onClick={() => toggleShow(!show)} sx={{ fontSize: '0.9em', mb: 2 }}>OUR TEAM</NavLink>
        </Link>
        <Link to="/resources">
          <NavLink onClick={() => toggleShow(!show)} sx={{ fontSize: '0.9em', mb: 2 }}>RESOURCES</NavLink>
        </Link>

        <Link to='/join' sx={{ mt: 2 }}>
          <Button sx={{
            bg: 'blue',
            borderRadius: '24px',
            px: '1.85em',
            pt: '0.85em !important',
            pb: '0.85em !important',
            fontSize: '0.9em',
            fontWeight: '700',
            cursor: 'pointer',
            '&:focus': {
              outline: 'none'
            }
          }}>
            JOIN US
          </Button>
        </Link>
      </div>


      </div>
    </Box>
  )
}

export const NavBackground = () => {
  return (
    <Container
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        background: "gradient",
        width: "100%",
        minWidth: "100%",
        height: "65vh",
      }}
    ></Container>
  )
}

export const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
  <Box
    as="footer"
    sx={{
      display: "flex",
      flexDirection: "column",
      py: 4,
      mt: 4,
      "a+a": { ml: [3, 4] },
      zIndex: 10,
      position: "relative",
    }}
  >
    <Divider
      sx={{
        mb: 4,
      }}
    />

    <Text
      sx={{
        fontSize: [2, 3],
        color: "primary",
      }}
    >
      Stay Updated
    </Text>

    <Box
      as="form"
      action="https://harvard.us19.list-manage.com/subscribe/post"
      method="POST"
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        alignItems: [null, "center"],
        justifyContent: ["center", null],
        py: 4,
      }}
    >
      {/** Mailchimp Identifiers */}
      <Input type="hidden" name="u" value="296f4b87de1255e43330d3eed" />
      <Input type="hidden" name="id" value="fd200b5e7b" />

      <Input
        placeholder="First Name"
        name="MERGE1"
        id="MERGE1"
        sx={{
          color: "secondary",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2",
        }}
      />

      <Input
        placeholder="Last Name"
        name="MERGE2"
        id="MERGE2"
        sx={{
          color: "secondary",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2",
        }}
      />

      <Input
        placeholder="Email"
        name="MERGE0"
        id="MERGE0"
        sx={{
          color: "secondary",
          borderRadius: "0",
          mr: [0, 4],
          mb: [4, 0],
          flex: "1.2",
        }}
      />

      <Button
        type="submit"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "#168CA6",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
        }}
      >
        Subscribe
      </Button>
    </Box>

    <div>
      <Button
        as="a"
        href="https://bank.hackclub.com/donations/start/coronavirus-visualization-team"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: [14, 18],
          px: 3,
          bg: "white",
          background: "#168CA6",
          borderRadius: "button",
          boxShadow: "base",
          flex: "1",
          mt: 2
        }}
      >
        Donate &#187;
      </Button>
    </div>

    <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        py: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column"],
          alignItems: ["center", "flex-start"],
        }}
      >
        <Image
          sx={{
            // vvv To turn logo black
            filter: `${colorMode === 'default' ? 'invert(100%)' : 'invert(0%)'}`,
            maxWidth: 200,
          }}
          src={Logo}
        />

        <Text
          sx={{
            fontSize: [1, 2],
            color: "secondary",
          }}
        >
          Coronavirus Visualization Team
        </Text>

        <Link
          to="/privacy"
          sx={{
            fontSize: [0, 1],
            color: "tertiary",
            textDecoration: "none",
          }}
        >
          Privacy Policy
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: ["row"],
          flexWrap: "wrap",
          justifyContent: ["center", null],
          alignItems: [null, "center"],
          ml: [null, "auto"],
          pt: [4, 0],
          maxWidth: [null, "300px"],
        }}
      >
        <SocialIcon
          link="https://instagram.com/joincvt"
          image={InstagramLogo}
          target="_blank"
        />
        <SocialIcon
          link="https://facebook.com/joincvt"
          image={FacebookLogo}
          target="_blank"
        />
        <SocialIcon 
          link="https://twitter.com/joincvt" 
          image={TwitterLogo} 
          target="_blank"
        />
        <SocialIcon
          link="mailto:coronavirusvisualizationteam@gmail.com"
          image={MailLogo}
          target="_blank"
        />
        <SocialIcon
          link="https://linkedin.com/company/coronavirus-visualization-team"
          image={LinkedInLogo}
          target="_blank"
        />
        <SocialIcon
          link="https://medium.com/coronavirus-visualization-team"
          image={MediumLogo}
          target="_blank"
        />
        <SocialIcon
          link="https://github.com/Coronavirus-Visualization-Team"
          image={GithubLogo}
          target="_blank"
        />
        <SocialIcon
          link="https://open.spotify.com/show/5SuhWvQ6JmwCbL5YPaHWIE?go=1&utm_source=embed_v3&t=0&nd=1"
          image={SpotifyLogo}
          target="_blank"
        />
      </Box>
    </Box>
  </Box>
)}

// Social icons for us in footer
const SocialIcon = props => {
  return (
    <Button
      as="a"
      href={props.link}
      target={props.target}
      rel="noopener noreferrer"
      sx={{
        background: "#168CA6",
        borderRadius: "button",
        boxShadow: "base",
        width: 60,
        height: 60,
        p: "1.05em",
        ml: [2, 4],
        mr: [2, null],
        my: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image src={props.image} />
    </Button>
  )
}

export default ({ children }) => (
  <Container sx={{ maxWidth: "xl", margin: "auto", px: 3 }}>
    <Header />
    <NavBackground />
    {children}
    <Footer />
  </Container>
)
