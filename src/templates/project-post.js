import React from 'react'
import { graphql } from "gatsby"
import { Container, Text, Divider, Image } from "theme-ui"
import { Helmet } from "react-helmet"

export default ({ data }) => {
    const { edges: posts} = data.allMarkdownRemark
    const { html, frontmatter} = posts[0].node
    return (
        <>
        <Helmet title={frontmatter.title} />
        <Container
            sx = {{
                maxWidth: 'xl',
                width: '100%',
                position: 'relative',
                p: 0
            }}>
            <Text sx = {{
                fontSize: [4, 5]
            }}>
                {frontmatter.title}
            </Text>

            <Divider sx = {{
                color: 'white'
            }}/>
            <Image sx = {{
                mt: 20,
                width: '100%',
                borderRadius: 'project',
                boxShadow: 'base',
            }}
            src = {`../${frontmatter.image}`}/>
            <Text sx = {{
                color: 'primary',
                textAlign: 'center',
                mt: '2vh'
            }}>
                Image Source: {frontmatter.label}
            </Text>
            <Text sx = {{
                color: 'primary',
                mt: 50
            }}>
                {html.replace(/<p>/g,'').replace('</p>','')}
            </Text>
            <a href={frontmatter.link} target={frontmatter.linkTarget} style={{color: 'secondary', textDecoration: 'none'}} >
            <Text sx = {{
                color: 'secondary',
                textDecoration: 'none',
                mt: 50
            }}>
               {frontmatter.linkTitle}
            </Text>
            </a>
            <a href={frontmatter.link2} target={frontmatter.linkTarget} style={{color: 'secondary', textDecoration: 'none'}} >
            <Text sx = {{
                color: 'secondary',
                textDecoration: 'none',
                mt: 20
            }}>
               {frontmatter.link2Title}
            </Text>
            </a>
        </Container>
        </>
    )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: {frontmatter: { slug: { eq: $slug } } }) {
        edges{
            node{
                html
                frontmatter {
                    title
                    image
                    label
                    link
                    linkTitle
                    linkTarget
                    link2Title
                    link2
                    link2Target
                }
            }
        }
    }
  }
`
