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
import LogoIconOnly from "./cvt-new-logo.png";
import LogoWithText from "./cvt-logo-full-text.png";
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
            background: '#388CF7',
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
                backgroundColor: 'black',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(9px) rotate(-45deg)' : null}}></p>
        <p sx={{borderRadius: '10px',
                height: '2px',
                width: show ? '25px' : '15px',
                backgroundColor: 'black',
                margin: '3px 0',
                transition: 'all 0.7s cubic-bezier(.25, .8, .25, 1)',
                transform: show ? 'translateY(1px) rotate(45deg)': null}}></p>
          <p sx={{borderRadius: '10px',
                height: '2px',
                width: show ? '25px' : '20px',
                backgroundColor: 'black',
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
                background: "#F8F8F8",
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
            background: '#388CF7',
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
  return (
    <Box
      as="footer"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        py: 4,
        mt: 4,
        zIndex: 10,
        position: "relative",
      }}
    >
      <Box
        sx={{
          flex: '1.5',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Text
          sx={{
            fontSize: [2, 3],
            color: "primary",
          }}
        >
          Stay Updated!
        </Text>

        <Box
          as="form"
          action="https://harvard.us19.list-manage.com/subscribe/post"
          method="POST"
          sx={{
            flex: '1',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            mt: 3,
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
              borderRadius: "20px",
              border: 'none',
              mb: [4, 0],
              mt: 3,
              mr: '2%',
              p: '0.75em',
              boxShadow: '0px 0px 10px #D2D2D2',
              width: '36%',
            }}
          />

          <Input
            placeholder="Last Name"
            name="MERGE2"
            id="MERGE2"
            sx={{
              color: "secondary",
              borderRadius: "20px",
              border: 'none',
              mb: [4, 0],
              mt: 3,
              p: '0.75em',
              boxShadow: '0px 0px 10px #D2D2D2',
              width: '36%',
            }}
          />

          <Input
            placeholder="Email"
            name="MERGE0"
            id="MERGE0"
            sx={{
              color: "secondary",
              borderRadius: "20px",
              border: 'none',
              mb: [4, 0],
              mt: 3,
              p: '0.75em',
              boxShadow: '0px 0px 10px #D2D2D2',
              width: '74%',
            }}
          />

          <Button
            type="submit"
            sx={{
              //fontSize: [14, 18],
              p: '0.75em',
              mt: 3,
              ml: 3,
              bg: "green",
              borderRadius: "button",
              boxShadow: "0px 0px 10px #D2D2D2",
              flex: "1",
              cursor: 'pointer'
            }}
          >
            Subscribe
          </Button>
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Image
            sx={{
              mt: 4,
            }}
            src={LogoWithText}
          />

          <Button
            as="a"
            href="https://bank.hackclub.com/donations/start/coronavirus-visualization-team"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              p: '0.75em',
              px: '1.75em',
              mt: 4,
              ml: 3,
              bg: "blue",
              borderRadius: "button",
              boxShadow: "0px 0px 10px #D2D2D2",
            }}
          >
            Donate &#187;
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            ml: 'auto',
            maxWidth: '90%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Button
              as="a"
              href="https://facebook.com/joincvt"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'none',
                mr: 4,
                p: 0
              }}
            >
              <Image
                sx={{
                  filter: 'brightness(0)',
                  width: '40px',
                }}
                src={FacebookLogo}
              />
            </Button>

            <Button
              as="a"
              href="https://instagram.com/joincvt"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'none',
                mr: 4,
                p: 0
              }}
            >
              <Image
                sx={{
                  filter: 'brightness(0)',
                  width: '40px',
                }}
                src={InstagramLogo}
              />
            </Button>

            <Button
              as="a"
              href="https://twitter.com/joincvt"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'none',
                mr: 4,
                p: 0
              }}
            >
              <Image
                sx={{
                  filter: 'brightness(0)',
                  width: '40px',
                }}
                src={TwitterLogo}
              />
            </Button>

            <Button
              as="a"
              href="https://medium.com/coronavirus-visualization-team"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'none',
                mr: 4,
                p: 0
              }}
            >
              <Image
                sx={{
                  filter: 'brightness(0)',
                  width: '40px',
                }}
                src={MediumLogo}
              />
            </Button>
          </Box>

          <Text
            sx={{
              fontWeight: '700',
              color: 'black',
              mt: 3
            }}
          >
            Other Platforms
          </Text>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Text
              as="a"
              href="https://www.linkedin.com/company/covid-visualization-team/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'slate',
                mr: 3
              }}
            >
              LinkedIn
            </Text>

            <Text
              as="a"
              href="https://github.com/coronavirus-Visualization-Team"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'slate',
                mr: 3
              }}
            >
              GitHub
            </Text>

            <Text
              as="a"
              href="https://open.spotify.com/show/5SuhWvQ6JmwCbL5YPaHWIE?go=1&utm_source=embed_v3&t=0&nd=1&nd=1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'slate',
              }}
            >
              Spotify
            </Text>
          </Box>

          <Text
            sx={{
              mt: 'auto'
            }}
          >
            &copy; 2020 <span sx={{ color: 'green', fontWeight: '700' }}>Coronavirus Visualization Team</span>. All rights reserved.
          </Text>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              mt: 2
            }}
          >
            <Link
              to="/privacy"
              sx={{
                color: 'slate',
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
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
