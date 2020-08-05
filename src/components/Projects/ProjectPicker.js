/** @jsx jsx */
import React, { useState } from "react"
import { Container, jsx, Box, Grid } from "theme-ui"
import FeaturedProject from './FeaturedProject'
import CoronaImg from './corona.jpg'

const ProjectPicker = ({ posts }) => {

    const featured = posts.filter(({ node: post }) => post.frontmatter.featured === true)
    const [currentProject, setCurrent] = useState(featured[0])
    const [one, toggleOne] = useState(true)
    const [two, toggleTwo] = useState(false)
    const [three, toggleThree] = useState(false)
    const [four, toggleFour] = useState(false)

    console.log(featured)

    return (
        <Container
            sx={{
                p: 0,
                width: '100%',
                maxWidth: 'xl',
                display: 'inline-block',
            }}>
            <Container
                sx={{
                    p: 3
                }}>
                <Grid width={['25%', '25%']}
                    gap={0}
                    sx={{
                        textAlign: 'center',
                    }}>
                    <Box
                        onClick={() => {
                            toggleOne(true)
                            toggleTwo(false)
                            toggleThree(false)
                            toggleFour(false)
                        }}
                        sx={{ variant: one ? 'styles.projectPickerActive' : 'styles.projectPicker',
                              display: 'flex',
                              alignItems: 'center',
                              px: "2vw",
                              fontSize:"50%" }}>{featured[0] ? featured[0].node.frontmatter.title : "Coming Soon!"}</Box>
                    <Box
                        onClick={() => {
                            toggleOne(false)
                            toggleTwo(true)
                            toggleThree(false)
                            toggleFour(false)
                        }}
                        sx={{ variant: two ? 'styles.projectPickerActive' : 'styles.projectPicker',
                              display: 'flex',
                              alignItems: 'center',
                              px: "2vw",
                              fontSize:"50%"  }}>{featured[1] ? featured[1].node.frontmatter.title : "Coming Soon!"}</Box>
                    <Box
                        onClick={() => {
                            toggleOne(false)
                            toggleTwo(false)
                            toggleThree(true)
                            toggleFour(false)
                        }}
                        sx={{ variant: three ? 'styles.projectPickerActive' : 'styles.projectPicker',
                              display: 'flex',
                              alignItems: 'center',
                              px: "2vw",
                              fontSize:"50%"  }}>{featured[2] ? featured[2].node.frontmatter.title : "Coming Soon!"}</Box>
                    <Box
                        onClick={() => {
                            toggleOne(false)
                            toggleTwo(false)
                            toggleThree(false)
                            toggleFour(true)
                        }}
                        sx={{ variant: four ? 'styles.projectPickerActive' : 'styles.projectPicker',
                              display: 'flex',
                              alignItems: 'center',
                              px: "2vw",
                              fontSize:"50%"  }}>{featured[3] ? featured[3].node.frontmatter.title : "Coming Soon!"}</Box>
                </Grid>
            </Container>
            {one && <FeaturedProject
                        img={featured[0] ? featured[0].node.frontmatter.image : CoronaImg}
                        slug={featured[0] ? featured[0].node.frontmatter.slug : ''}
                        present={true && featured[0]}/>}
            {two && <FeaturedProject
                        img={featured[1] ? featured[1].node.frontmatter.image : CoronaImg }
                        slug={featured[1] ? featured[1].node.frontmatter.slug : ''}
                        present={true && featured[1]} />}
            {three && <FeaturedProject
                        img={featured[2] ? featured[2].node.frontmatter.image : CoronaImg}
                        slug={featured[2] ? featured[2].node.frontmatter.slug : ''}
                        present={true && featured[2]}/>}
            {four && <FeaturedProject
                        img={featured[3] ? featured[3].node.frontmatter.image : CoronaImg}
                        slug={featured[3] ? featured[3].node.frontmatter.slug : ''}
                        present={true && featured[3]}/>}

        </Container>
    )
}

export default ProjectPicker
