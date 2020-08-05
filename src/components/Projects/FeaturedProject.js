/** @jsx jsx */
import React, { useState } from "react"
import theme from "../../gatsby-plugin-theme-ui"
import { Container, jsx, Image, Button } from "theme-ui"

const FeaturedProject = ({ img, slug, present }) => {
    return (
        <Container
            sx={{
                p: 0,
                maxWidth: 'xl',
                position: 'relative',
            }}>
            <Image src={img}
                sx={{
                    width: '100%',
                    borderRadius: 'project',
                    height: ['auto', '500px'],
                    boxShadow: 'base',
                    objectFit: 'cover'
                }} >

            </Image>
            <Button 
            onClick = {() => {
                if(slug.length != 0){
                    window.location.href = `/projects/${slug}`
                }
            }}
            sx={{
                fontSize: [10, 18],
                position: 'absolute',
                bottom: 0,
                right: 0,
                m: 4,
                px: 3,
                bg: 'white',
                background: '#168CA6',
                borderRadius: 'button',
                boxShadow: 'base',
                transition: '0.2s', 
                '&:hover': {boxShadow: 'hover', cursor: 'pointer'},
                '&:focus': {outline: 'none'}
            }}
                mr={2}>{present ? 'Learn More' : 'Coming Soon!'}</Button>
        </Container>
    )
}

export default FeaturedProject