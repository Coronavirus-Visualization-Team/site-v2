/** @jsx jsx */
import React, { useState } from "react"
import theme from "../../gatsby-plugin-theme-ui"
import { Container, Image, jsx } from "theme-ui"
import HeroImage from "./cvt-group.jpg"
const HeaderImage = () => {
  return (
      <Container
        sx={ {
          p: 0,
          maxWidth: "xl",
          position: "relative",
          minHeight: 300
        } }>
        <Image src={ HeroImage }
          sx={ {
            width: "100%",
            borderRadius: "project",
            height: "auto",
            boxShadow: "base",
            objectFit: "cover"
          } } />
      </Container>
  )
}

export default HeaderImage
