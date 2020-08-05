/** @jsx jsx */
import { jsx, Box, Text, Image, useColorMode } from "theme-ui"

const Tile = ({ title, img, slug }) => {
    const [colorMode, setColorMode] = useColorMode();

    return(
        <Box
        onClick = {() => window.location.href = `/projects/${slug}`}
        sx = {{
            width: '100%',
            height: ['fit-content', '300px'],
            boxShadow: 'base',
            bg: 'white',
            p: [3,4],
            borderRadius: 'tile',
            color: 'primary',
            mb: [0, 60],
            backgroundColor: "secondaryBackground"

        }}>
            <Text
                sx = {{
                    fontSize: [1, 2],
                    fontWeight: '600',
                    mb: '15px'
                }}>
                    {title}
            </Text>
            <Image src = {img}
                    sx = {{
                        width: ['350px', '100%'],
                        height: ['210px', '250px'],
                        borderRadius: 'tile',
                        boxShadow: `${colorMode === "dark" ? "0 3px 6px rgba(255,255,255,0.14), 0 3px 6px rgba(255,255,255,0.18)" : "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}`,
                        ml: [0, '10px'],
                        transition: '0.2s',
                        '&:hover': {boxShadow: `${colorMode === "dark" ? "0 14px 28px rgba(255,255,255,0.20), 0 10px 10px rgba(255,255,255,0.17)" : "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}`, cursor: 'pointer'}
                    }}
                    />
        </Box>
    )
}

export default Tile
